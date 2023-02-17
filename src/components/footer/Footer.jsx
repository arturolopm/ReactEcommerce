import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="  bottom-0 z-50 w-full translate-y-full bg-slate-100">
        <div className=" container z-50 mx-auto flex max-w-4xl  flex-wrap justify-between border border-solid bg-slate-100 px-4  text-3xl text-green-primary">
          <h1 className=" w-full text-center text-lg text-slate-700">
            Sunquwan Store , piedras preciosas decoración interior
          </h1>
          <div className=" flex grow justify-around ">
            <a
              href="https://www.facebook.com/sunquwanstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://instagram.com/sunquwancol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />{" "}
            </a>
            {/* <FaTiktok /> */}
            <a
              href="https://wa.me/573114483981?text=Me%20interesan%20sus%20figuras"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="z-50 flex grow flex-wrap justify-around align-baseline text-sm text-slate-500  md:text-base ">
            <div className=" z-50 ">
              <div>
                Whatsapp
                <p>+573114483981</p>
              </div>
            </div>
            <div className=" z-50 ">
              <div>
                Dirección
                <p>
                  Cra 20 #33a-32 <br /> Bogotá Colombia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
