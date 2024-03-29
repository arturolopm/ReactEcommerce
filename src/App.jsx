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
import RegisterForm from "@/components/forms/RegisterForm";
import ProfileForm from "@/components/forms/ProfileForm";
import ShippingView from "@/components/cart/ShippingView";
import PaymentForm from "@/components/forms/PaymentForm";
import PlaceOrderForm from "@/components/forms/PlaceOrderForm";
import OrderScreen from "@/components/order/OrderScreen";
import OrderList from "@/components/profile/OrderList";
import AdminLogin from "@/components/adminView/AdminLogin";

const App = () => {
  return (
    <>
      <GeneralContextProvider>
        <Router>
          <Routes>
            {[
              "/",
              "/home",
              "/search",
              "/search/:keyword",
              "/page/:pagenumber",
              "/search/:keyword/page/:pagenumber",
            ].map((multiplePath, index) => (
              <Route
                path={multiplePath}
                element={[<IndexHeader />, <Home />]}
                key={index}
                exact
              />
            ))}

            <Route
              path="/products/:_id"
              element={[<IndexHeader />, <IndexProducts />]}
            />
            <Route path="/admin/" element={[<IndexHeader />, <AdminLogin />]} />
            {/* <Route path="/admin/" element={[<IndexHeader />, <AdminView />]} /> */}
            <Route path="/contact" element={[<IndexHeader />, <Contact />]} />
            <Route path="/cart" element={[<IndexHeader />, <CartView />]} />
            <Route path="/login" element={[<IndexHeader />, <LoginView />]} />
            <Route
              path="/register"
              element={[<IndexHeader />, <RegisterForm />]}
            />

            <Route
              path="/profile"
              element={[<IndexHeader />, <ProfileForm />]}
            />
            <Route
              path="/shipping"
              element={[<IndexHeader />, <ShippingView />]}
            />
            <Route
              path="/payment"
              element={[<IndexHeader />, <PaymentForm />]}
            />
            <Route
              path="/place-order"
              element={[<IndexHeader />, <PlaceOrderForm />]}
            />
            <Route
              path="/order/:id"
              element={[<IndexHeader />, <OrderScreen />]}
            />
            <Route path="/order" element={[<IndexHeader />, <OrderList />]} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </GeneralContextProvider>
      <Footer />
    </>
  );
};

export default App;
