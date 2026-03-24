import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./components/Global/Loader";
import ScrollToTop from "./components/Global/ScrollToTop";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.url} element={route.page} key={index} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
