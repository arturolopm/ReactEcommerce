import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import IndexHeader from "@/components/header/IndexHeader";
import IndexProducts from "@/components/product/IndexProducts";
import Contact from "@/components/contact/Contact";

import CartDetailsProvider from "@/context/useCartDetails";
import Home from "@/components/home/Home";
import Footer from "@/components/footer/Footer";

const App = () => {
  return (
    <>
      <CartDetailsProvider>
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
              path="/products/:id"
              element={[<IndexHeader />, <IndexProducts />]}
            />
            <Route path="/contact" element={[<IndexHeader />, <Contact />]} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </CartDetailsProvider>
      <Footer />
    </>
  );
};

export default App;
