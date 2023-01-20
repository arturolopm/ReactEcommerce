import { Link } from "react-router-dom";

const PaginationButtons = ({ pages, pageNumber, keyword, setPageNumber }) => {
  console.log(pageNumber);
  return (
    <nav className=" justify-center ">
      <ul className="flex gap-2">
        {[...Array(pages).keys()].map((x) => (
          <div
            className={` w-min rounded-md ${
              x + 1 === parseInt(pageNumber)
                ? " bg-green-primary text-xl"
                : " bg-slate-200"
            }`}
            key={x + 1}
          >
            <li onClick={() => setPageNumber(x + 1)} className="  p-2">
              <Link
                to={
                  keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                }
              >
                {x + 1}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationButtons;
