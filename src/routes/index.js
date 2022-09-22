import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import PostPage from "../pages/Post";
import NotFound from "../pages/Notfound";
import MainLayout from "../layouts/main";
import LoginPage from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
