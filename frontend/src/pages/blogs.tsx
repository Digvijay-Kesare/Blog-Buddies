import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/blogCard"
import { useBlogs } from "../hooks"

export const Blogs = () =>{
    const {loading,blogs}=useBlogs();

    if(loading) {
        return<div>
            loading....
        </div>
    }

    return<div>
    <Appbar/>
    <div className="flex justify-center">
    <div className="max-w-xl">
        {blogs.map(blog => <BlogCard 
    authorName={'Aarav Mehta'} 
    title={'How AI is Revolutionizing Web Development'}
    content={'Artificial Intelligence is transforming web development by automating design processes, enhancing UX, and optimizing performance. With AI-driven tools, developers can streamline workflows, improve accessibility, and boost SEO rankings effortlessly.'}
    publishedDate={'5th Feb 2024'}
/>)}

    </div>
    </div>
    </div>
}