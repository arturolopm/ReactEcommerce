import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailsProductHome from "@/components/home/cartProductHome/DetailsProductHome";

import GalleryProductsHome from "@/components/home/productsHome/GalleryProductsHome";
import PaginationButtons from "@/components/pagination/PaginationButtons";

const Home = () => {
  if (window.scrollY) {
    window.scroll(0, 0);
  }
  const params = useParams();
  const [keyword, setKeyword] = useState(params.keyword);
  useEffect(() => {
    setKeyword(params.keyword);
  }, [params]);

  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(
    () => {
      const fetchProducts = async () => {
        // setPageNumber(parseInt(params.pagenumber));
        const { data } = await axios.get(
          `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        setProducts(data.products);
        setPages(parseInt(data.pages));
      };
      fetchProducts();
    },
    [keyword, pages, pageNumber],
    []
  );
  return (
    <section className=" mx-auto min-h-screen max-w-7xl bg-white px-4 md:text-base">
      {keyword && <h1>Results based on: {keyword}</h1>}
      {products.length == 0 && (
        <h1 className=" font-bold">
          Your request did not find any match please try again with another word
        </h1>
      )}
      <div className=" flex justify-center">
        <PaginationButtons
          pages={pages}
          pageNumber={pageNumber}
          keyword={keyword}
          setPageNumber={setPageNumber}
        />
      </div>
      {products.map((product) => (
        <div key={product._id}>
          <div className=" mx-auto mb-2 flex max-h-[25%] flex-row items-center gap-1 rounded-xl md:container ">
            <GalleryProductsHome
              _id={product._id}
              ARRAY_IMGS={product.imagesMain}
              ARRAY_IMG_SMALL={product.imagesSmall}
            />
            <DetailsProductHome objectProduct={product} />
          </div>
          <span className="container mx-auto mb-2 block h-[1px] w-full bg-gray-300"></span>
        </div>
      ))}
      <div className=" flex justify-center">
        <PaginationButtons
          pages={pages}
          pageNumber={pageNumber}
          keyword={keyword}
          setPageNumber={setPageNumber}
        />
      </div>
    </section>
  );
};

export default Home;
