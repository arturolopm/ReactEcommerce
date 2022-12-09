import { useCartDetails } from "@/context/useCartDetails";
import CartIcon from "@/components/icons/CartIcon";
import CardDetailsHeader from "@/components/header/CartDetailsHeader";
import { useContext, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

const CartHeader = () => {
  const { cartQuantity } = useContext(useCartDetails);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const divRef = useClickOutside(() => setIsOpenCart(false));

  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return (
    <div
      className=" right-0 ml-auto flex justify-end self-stretch text-3xl text-slate-500  "
      ref={divRef}
    >
      <button
        onClick={handleOpenCart}
        className=" relative ml-auto flex min-h-[30px] min-w-[30px] justify-end self-center"
      >
        <CartIcon />
        <span className=" absolute top-1 right-0 rounded-lg bg-green-primary px-1 text-xs font-bold text-white">
          {cartQuantity}
        </span>
      </button>
      {isOpenCart && <CardDetailsHeader />}
    </div>
  );
};
export default CartHeader;
