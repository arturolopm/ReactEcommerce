import { useEffect } from "react";
import axios from "axios";
// In this example i'm using React
// Other way to use this is using the script tag in the html file
// and then use the global variable window.MercadoPago

// Then some document.querySelector('.cho-container') to get the element
// and then use the mp.checkout() method

const MPButton = ({ id }) => {
  const handleClick = async () => {
    console.log("holi");
    const newdata = await axios.post(`/api/orders/${id}/paymp`);
    window.location.href = newdata.data.response.body.init_point;
    console.log(newdata);
  };

  return (
    <>
      <button onClick={() => handleClick()}>Pagaar</button>
    </>
  );
};
export default MPButton;
