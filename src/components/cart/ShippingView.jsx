import React, { useContext } from "react";
import { useGeneralContext } from "@/context/useGeneralContext";
import LoginView from "@/components/forms/LoginView";
import ShippingForm from "@/components/forms/ShippingForm";

const ShippingView = () => {
  const { user } = useContext(useGeneralContext);
  // Use the useState hook to manage the name, email, password, and passwordConfirmation state

  return <>{user ? <ShippingForm /> : <LoginView />}</>;
};

export default ShippingView;
