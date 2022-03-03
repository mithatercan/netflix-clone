import { useEffect } from "react";
import { fetchMovies } from "./api/movieApi";
import Layout from "./layouts";
import Router from "./routes";

function App() {
  useEffect(() => {
    const fetchFunction = async () => {
      const res = await fetchMovies();
      console.log(res);
    };

    fetchFunction();
  }, []);
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
