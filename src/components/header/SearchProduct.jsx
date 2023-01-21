import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SearchProduct = ({ handleShowLogo }) => {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
    window.innerWidth > 768 ? setShowInput(true) : "";
  }, []);

  const show = () => {
    setShowInput(true);
    if (window.innerWidth < 768) {
      setShowButton(false);
      handleShowLogo();
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (keyWord) {
      navigate(`/search/${keyWord}`);
      // setKeyWord("");
    } else {
      navigate("/home");
    }
  };
  return (
    <form className="ml-auto flex text-right" onSubmit={submitHandler}>
      <label className="ml-auto flex text-right">
        {showInput && (
          <input
            className="m-0 border-b-2 p-1"
            type="search"
            placeholder="Search"
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
          />
        )}
        {showButton && (
          <button
            onClick={show}
            className="ml-auto w-full text-end text-xl"
            type="submit"
          >
            <MdSearch />
          </button>
        )}
      </label>
    </form>
  );
};
export default SearchProduct;
