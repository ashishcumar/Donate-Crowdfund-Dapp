import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import App from "../App";
import Donate from "../pages/Donate";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/donate" element={<Donate />} />
        <Route path="/" element={<App />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
