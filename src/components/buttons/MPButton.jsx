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
    window.location.href = newdata.data.response.body.init_point;
  };
  // useEffect(() => {

  //   successPaymentHandler()
  // }, [third])

  return (
    <>
      <button onClick={() => handleClick()}>
        <div className=" mx-auto rounded-md border border-solid bg-gradient-to-r from-green-400 to-white transition-all duration-1000 hover:border-green-700 hover:from-white hover:to-green-400">
          Pagar
        </div>
      </button>
    </>
  );
};
export default MPButton;
