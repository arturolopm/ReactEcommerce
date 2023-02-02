import axios from "axios";

// In this example i'm using React
// Other way to use this is using the script tag in the html file
// and then use the global variable window.MercadoPago

// Then some document.querySelector('.cho-container') to get the element
// and then use the mp.checkout() method

const MPButton = ({ id, successPaymentHandler }) => {
  const handleClick = async () => {
    const newdata = await axios.post(`/api/orders/${id}/paymp`);
    // try {

    // } catch (error) {
    //   console.log(error.message);
    // }
    window.open(newdata.data.response.body.init_point);
  };
  // useEffect(() => {

  //   successPaymentHandler()
  // }, [third])

  return (
    <>
      <button onClick={() => handleClick()}>Pagaaaaaar</button>
    </>
  );
};
export default MPButton;
