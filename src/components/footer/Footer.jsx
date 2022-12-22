import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="  bottom-0 w-full  translate-y-full bg-slate-100">
        <div className=" container mx-auto flex max-w-4xl  flex-wrap justify-between border border-solid bg-slate-100 px-4  text-3xl text-green-primary">
          <p className=" w-full text-center text-lg text-slate-700">
            JadeHouseCol in all social media
          </p>
          <div className=" flex grow justify-around ">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            <FaWhatsapp />
          </div>
          <div className="flex grow flex-wrap justify-around align-baseline text-sm text-slate-500  md:text-base ">
            <div className=" ">
              <div>
                Phone Number
                <p>+573013866300</p>
              </div>
            </div>
            <div className=" ">
              <div>
                Adress
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
