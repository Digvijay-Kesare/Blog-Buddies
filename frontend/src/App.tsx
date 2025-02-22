import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Signin } from './pages/signin';
import { Blog } from './pages/blog'; 
import { useTheme } from './context/ThemeContext'; 
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import {Blogs} from './pages/blogs'

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      {/* <header className="flex justify-between items-center py-4 px-8">
        <h1 className="text-xl font-bold">My Application</h1>
         
      </header> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
