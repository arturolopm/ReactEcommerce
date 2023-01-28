import CartIcon from "@/components/icons/CartIcon.jsx";
import { useGeneralContext } from "@/context/useGeneralContext";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

const DetailsProductsHome = ({ objectProduct }) => {
  const { addCartItems } = useContext(useGeneralContext);
  const [count, setCount] = useState(1);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    addCartItems({
      ...objectProduct,
      quantity: count || 1,
    });
    setCount(1);
  };
  const _id = objectProduct._id;
  return (
    <section className="container flex max-h-[30vh] flex-col px-4  text-xs md:px-4">
      <Link to={`/products/${_id}`}>
        <p className=" mb-3 hidden font-bold uppercase tracking-wide text-green-primary md:block md:text-lg">
          {objectProduct.subtitle}
        </p>
        <h2 className=" mb-0 text-sm font-bold md:text-xl">
          {objectProduct.title}
        </h2>
        <p className=" mb-0 hidden max-h-12 overflow-hidden text-clip text-xs text-dark-grayish-blue min-[320px]:block md:text-base">
          {objectProduct.description}
        </p>
      </Link>
      <div className="mb-0 flex flex-wrap  items-center gap-4 font-bold md:justify-start md:gap-1 md:self-start ">
        <span className=" self-center text-xs md:w-[40%] md:text-lg">
          COP
          {Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
          })
            .format(objectProduct.price * (1 - objectProduct.discount))
            .slice(0, -3)}
        </span>
        {objectProduct.discount > 0 && (
          <span className="  mx-auto rounded-md bg-pale-green py-1 px-2 text-green-primary md:w-10 md:text-base">
            {objectProduct.discount * 100}%
          </span>
        )}
        {objectProduct.discount > 0 && (
          <span className=" text-right text-xs text-grayish-blue line-through md:text-left md:text-lg">
            COP${objectProduct.price?.toFixed(0)}
          </span>
        )}
      </div>
      <div className=" flex  flex-row justify-between md:max-w-3xl ">
        <div className=" flex grow items-baseline justify-between rounded-md bg-gray-200  px-1 py-1 ">
          <button
            className=" grow text-lg text-green-primary md:text-xl"
            onClick={decrementCount}
          >
            -
          </button>
          <span className=" font-bold md:text-lg">{count}</span>
          <button
            className=" grow text-lg text-green-primary md:text-xl"
            onClick={incrementCount}
          >
            +
          </button>
        </div>
        <button
          className=" textlg flex w-[40%] items-center justify-center gap-x-3 rounded-md bg-green-primary py-1 text-white transition-all hover:bg-green-700"
          onClick={handleAddToCart}
        >
          <CartIcon fill="#fff" className="fill-white" />
          <span>Añadir</span>
        </button>
      </div>
    </section>
  );
};
export default DetailsProductsHome;
