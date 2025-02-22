import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify} from 'hono/jwt'
import bcrypt from 'bcryptjs';
import {signinInput, signupInput} from '@digvijay_kesare/medium-common';

export const userRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()


userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

  const { success }=signupInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message:"inputs not correct"
    })
  }

  try{

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user=await prisma.user.create({
    data:{
      name:body.name,
      email: body.email, 
      password: hashedPassword
    }
  });
  const token=await sign({id:user.id},c.env.JWT_SECRET)
  return c.json({
      jwt:token
    });
  }catch(e){
    c.status(403);
    return c.json({error:"error while signing up"})
  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body= await c.req.json();
  const { success }=signinInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message:"inputs not correct"
    })
  }
  try{
    const user=await prisma.user.findUnique({
      where:{
        email:body.email
      }
    });

    if(!user){
      return c.json({error:'Invalid Credentials'},401);
    }

    const isPasswordValid= await bcrypt.compare(body.password,user.password);
    if(!isPasswordValid){
      return c.json({error:'Invalid Credentials'},401);
    }

    const token=sign({id:user.id,},c.env.JWT_SECRET);
    return c.json({
      jwt:token
    });
  }catch(e){
    c.status(500);
    return c.json({error:'Error while signing in'})
  }
})