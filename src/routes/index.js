import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../views/HomeView";
import ContentView from "../views/ContentView";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/science' element={<ContentView />} />
      </Routes>
    </Router>
  );
};

export default index;
