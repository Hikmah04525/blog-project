import {Routes, Route} from "react-router-dom"
import Home  from "./pages/Home"
import PrivateLayout from "./components/layout/PrivateLayot"
import CategoryList from "./pages/category/CategoryList"
import PostList from "./pages/post/PostList";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import PublicLayout from "./components/layout/PublicLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App () {
  return (
    <Routes>
      <Route element ={<PrivateLayout />}>
        <Route path="/" element ={<Home />} />
        <Route path ="/categories" element ={<CategoryList />} />
        <Route path ="/posts" element ={<PostList />} />
        <Route path ="/profile" element ={<Profile />} />
        <Route path ="/settings" element ={<Setting />} />
      </Route>
      <Route element ={<PublicLayout />}>
        <Route path ="/login" element ={<Login />} />
        <Route path ="/signup" element ={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App