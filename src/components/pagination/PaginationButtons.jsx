import { useEffect } from "react";
import { Link } from "react-router-dom";

const PaginationButtons = ({
  pages,
  pageNumber = 1,
  keyword,
  setPageNumber,
}) => {
  const checkNan = () => {
    typeof pageNumber != Number ? setPageNumber(1) : "";
  };
  useEffect(() => {
    checkNan();
  }, []);

  return (
    <>
      {pages > 1 && (
        <nav className=" justify-center border-b-2 pb-1 ">
          <ul className="flex gap-1">
            {[...Array(pages).keys()].map((x) => (
              <div
                className={` w-min rounded-md ${
                  x + 1 === parseInt(pageNumber)
                    ? " bg-green-primary "
                    : " bg-slate-200"
                }`}
                key={x + 1}
              >
                <Link
                  to={
                    keyword
                      ? `/search/${keyword}/page/${x + 1}`
                      : `/page/${x + 1}`
                  }
                  onClick={() => setPageNumber(x + 1)}
                  className="  p-2"
                >
                  {x + 1}
                </Link>
              </div>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default PaginationButtons;
