import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/homepage/about/About.jsx"
import CourseHome from "./components/homepage/allcourses/CourseHome"
import Team from "./components/homepage/team/Team"
import Contact from "./components/homepage/contact/Contact"
import Home from "./components/homepage/home/Home"
import SignIn from "./components/login/Login"
import SDashboard from './components/student/pages/Dashboard.jsx';
import ADashboard from './components/admin/pages/Dashboard.jsx';
import Profile from "./components/student/pages/Profile.jsx"
import Analytics from "./components/student/pages/Analytics.jsx"
import Comment from "./components/student/pages/Comment.jsx"
import Product from "./components/student/pages/Product.jsx"
// import ProductList from './pages/ProductList.jsx';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          {/* <Route exact path="/courses" element={<CourseHome/>} /> */}
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/contact" element={<Contact/>} />         
          <Route path="/login" element={<SignIn/>} />
          <Route path="/studentdashboard" element={<SDashboard />} />
          <Route path="/admindashboard" element={<ADashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Comment />} />
          <Route path="/grades" element={<Analytics />} />
          <Route path="/" element={<Product />} />
          {/* <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
    </BrowserRouter>
  );
};

export default App;