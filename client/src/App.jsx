import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import EasyPaisa from "./components/EasyPaisa/EasyPaisa";
import MetaMask from "./components/MetaMask/MetaMask";
function App() {
  return (
    <>
      <NavBar />
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="easypaisa" element={<EasyPaisa />} />
        <Route path="metamask" element={<MetaMask />} />
      </Routes>
    </>
  );
}

export default App;
