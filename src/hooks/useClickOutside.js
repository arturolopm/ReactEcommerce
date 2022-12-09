import { useRef, useEffect } from "react";
const useClickOutside = (callback) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClose = (event) => {
      if (!ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  });
  return ref;
};
export default useClickOutside;
