import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GeneralContextProvider from "@/context/useGeneralContext";

import IndexHeader from "@/components/header/IndexHeader";
import IndexProducts from "@/components/product/IndexProducts";
import Contact from "@/components/contact/Contact";
import CartView from "@/components/cart/CartView";
import LoginView from "@/components/forms/LoginView";

import Home from "@/components/home/Home";
import Footer from "@/components/footer/Footer";

const App = () => {
  return (
    <>
      <GeneralContextProvider>
        <Router>
          <Routes>
            {["/", "/home"].map((multiplePath, index) => (
              <Route
                path={multiplePath}
                element={[<IndexHeader />, <Home />]}
                key={index}
              />
            ))}

            <Route
              path="/products/:_id"
              element={[<IndexHeader />, <IndexProducts />]}
            />
            <Route path="/contact" element={[<IndexHeader />, <Contact />]} />
            <Route path="/cart" element={[<IndexHeader />, <CartView />]} />
            <Route path="/login" element={[<IndexHeader />, <LoginView />]} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </GeneralContextProvider>
      <Footer />
    </>
  );
};

export default App;
