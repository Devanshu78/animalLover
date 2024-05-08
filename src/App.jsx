import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div id="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
