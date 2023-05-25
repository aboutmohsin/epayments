import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import EasyPaisa from "./components/EasyPaisa/EasyPaisa";
// import MetaMask from "./components/MetaMask/MetaMask";
import CryptoPayment from "./components/MetaMask/CryptoPayment";
import PaymentImage from "./components/PaymentImage/PaymentImage";
import Search from "./components/Search/Search";
function App() {
  return (
    <>
      <NavBar />
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="easypaisa" element={<EasyPaisa />} />
        <Route path="crypto" element={<CryptoPayment />} />
        <Route path="payments" element={<PaymentImage />} />
        <Route path="search" element={<Search />} />

        {/* <Route path="metamask" element={<MetaMask />} /> */}
      </Routes>
    </>
  );
}

export default App;
