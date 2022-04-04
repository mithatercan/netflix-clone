import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "../layouts";
import HomeView from "../views/Home";
import LoginView from "../views/Login";

const index = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/browse' element={<HomeView />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default index;
