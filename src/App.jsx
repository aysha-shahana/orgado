import Navbar  from "./assets/componants/Navbar";
import Aboutus from "./assets/componants/Aboutus";
import Header from "./assets/componants/Header";
import Footer from "./assets/componants/Footer";
import Loginpage from "./assets/pages/Loginpage";
import { Route, Routes } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Contactpage from "./assets/pages/Contactpage";
import SignUppage from "./assets/pages/SignUppage";
import Shoppage from "./assets/pages/Shoppage";
import Wishlistpage from "./assets/pages/Wishlistpage";
import Cartpage from "./assets/pages/Cartpage";


function App() {
  return (
    <>
        <Header/>
        <Aboutus/>
        <Navbar/>
       <Routes>
             <Route path="/" element={<Homepage/>}/>
             <Route path="/contact" element={<Contactpage/>}/>
             <Route path="/login" element={<Loginpage/>}/>
             <Route path="/signup" element={<SignUppage/>}/>
              <Route path="/shop" element={<Shoppage/>}/>
              <Route path="/wishlist" element={<Wishlistpage/>}/>
              <Route path="/cart" element={<Cartpage/>}/>
       </Routes>
        <Footer/>
       
    </>
  );
}

export default App;
