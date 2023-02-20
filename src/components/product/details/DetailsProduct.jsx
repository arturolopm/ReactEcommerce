import CartIcon from "@/components/icons/CartIcon.jsx";
import { useGeneralContext } from "@/context/useGeneralContext";
import { useContext, useState } from "react";

const DetailsProduct = ({ objectProduct }) => {
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
  return (
    <section className="container mx-auto mb-4 px-4 md:px-0">
      <p className=" mb-3 font-bold uppercase tracking-wide text-green-primary">
        Sunquwan
      </p>
      <h2 className=" mb-4 text-3xl font-bold">{objectProduct?.title}</h2>
      <p className=" mb-5 text-dark-grayish-blue md:text-xl">
        {objectProduct?.description}
      </p>
      <div className=" mb-5 grid grid-cols-3 items-center gap-3 font-bold md:grid-cols-[1fr_3fr] md:gap-1">
        <span
          className=" text-3xl"
          price={objectProduct.price * (1 - objectProduct.discount)}
          currency="COP"
        >
          COP
          {Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
          })
            .format(objectProduct.price * (1 - objectProduct.discount))
            .slice(0, -3)}
        </span>
        {objectProduct.discount > 0 && (
          <span className=" ml-auto rounded-md bg-pale-green py-1 px-2 text-green-primary">
            {objectProduct?.discount * 100}%
          </span>
        )}
        {objectProduct.discount > 0 && (
          <span className=" text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">
            ${objectProduct?.price?.toFixed(0)}
          </span>
        )}
      </div>
      <div className=" grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.5fr]">
        <div className=" col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
          <button
            className=" text-3xl text-green-primary"
            onClick={decrementCount}
          >
            -
          </button>
          <span className=" text-xl">{count}</span>
          <button
            className=" text-3xl text-green-primary"
            onClick={incrementCount}
          >
            +
          </button>
        </div>
        <button
          className=" col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-green-primary py-3 text-white transition-all hover:bg-green-700 md:col-span-1"
          onClick={handleAddToCart}
        >
          <CartIcon fill="#fff" className="fill-white" />
          <span>Añadir al carrito</span>
        </button>
      </div>
    </section>
  );
};
export default DetailsProduct;
