import { useState } from "react";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import { Link } from "react-router-dom";

const SlideProductsHome = ({
  ARRAY_IMGS = [],
  ARRAY_IMG_SMALL = [],
  _id = null,
  ...props
}) => {
  const [imgIndex, setImgIndex] = useState(0);

  // const handleClickNext = () => {

  //     (imgIndex === ARRAY_IMGS.length -1) ? setImgIndex(0) : setImgIndex(imgIndex + 1)
  // }
  // const handleClickPrev = () => {
  //     (imgIndex === 0) ? setImgIndex(ARRAY_IMGS.length-1) : setImgIndex(imgIndex-1)
  // }

  return (
    <section
      className=" w-[150px] min-w-[150px] md:w-[336px]  xl:max-w-sm"
      {...props}
    >
      <Link to={`/products/${_id}`} className=" max-h-[25%] min-w-[150px]  ">
        <img
          src={ARRAY_IMGS[imgIndex]}
          alt=""
          className=" aspect-auto max-h-[300px] w-full max-w-[300px] cursor-pointer content-center rounded-md object-cover"
        />

        {/* <button className="absolute top-1/2 left-0  -translate-y-1/2 justify-between px-4 grid place-items-center h-3 w-3 rounded-full  " onClick={handleClickPrev}>
                        <PrevIcon />
                    </button> 

                    <button className="absolute top-1/2 right-0  -translate-y-1/2 justify-between px-4 grid place-items-center h-3 w-3 rounded-full  " onClick={handleClickNext}>
                        <NextIcon />
                    </button> */}
      </Link>
    </section>
  );
};

export default SlideProductsHome;
