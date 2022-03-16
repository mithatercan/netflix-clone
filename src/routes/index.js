import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeView from "../views/Home";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/browse' />} />
        <Route path='/browse' element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default index;
