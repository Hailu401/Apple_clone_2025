import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Iphone from "./Components/Main/IphonePage/Iphone";
import Main from "./Components/Main/Main";
import { Routes, Route } from "react-router-dom";
import SharedPage from "./Components/SharedPage";
import SinglePdt from "./Components/Main/IphonePage/SinglePdt";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedPage />}>
          <Route index element={<Main />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:productId" element={<SinglePdt/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
