import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/admin/Loader";


const Dashboard = lazy(() => import ("./pages/admin/dashboard"))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      
      <Routes>
    {/* <Route path="/" element={<Home />}> */}
    <Route path="/" element={<Dashboard />} />

      </Routes>
      
      
      </Suspense>
    </Router>
  );
}

export default App;
