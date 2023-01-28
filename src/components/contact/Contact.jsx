import MapDiv from "@/components/contact/MapDiv";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
const Contact = () => {
  return (
    <div className=" min-h-[calc(100vh-88px-3px)]">
      <div className=" container mx-auto flex max-w-4xl flex-wrap justify-center border border-solid bg-slate-100  px-4 ">
        <div className=" mb-3 w-full text-center font-bold uppercase tracking-wide text-green-primary md:block md:text-lg">
          Contacto
        </div>
        <form className="mb-4 flex flex-col text-left">
          <label className="block w-[50%] ">
            Nombre:
            <input
              className="  mx-auto border border-solid hover:border-green-700  focus:outline-green-700"
              type="text"
              name="name"
            />
          </label>
          <label className="block w-[50%]">
            email:
            <input
              className="  border border-solid hover:border-green-700  focus:outline-green-700"
              type="email"
              name="email"
            />
          </label>

          <input
            className=" mx-auto rounded-md border border-solid bg-gradient-to-r from-green-400 to-white transition-all duration-1000 hover:border-green-700 hover:from-white hover:to-green-400"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
      <div className=" container mx-auto flex max-w-4xl flex-wrap justify-center border border-solid bg-white px-16 pb-4 ">
        <p className=" text-lg font-bold text-green-primary">¿Quienes somos?</p>
        <p className=" text-xs md:text-base">
          Somos una empresa especializada en la venta de piedras preciosas
          talladas a mano para decoración. Nuestra selección incluye piedras
          como jade, obsidiana, opalo y esmeraldas, todas cuidadosamente
          seleccionadas y talladas por expertos artesanos. Ofrecemos una amplia
          variedad de piedras en diferentes formas y tamaños, todas ellas con
          una belleza única. Nuestras piedras son ideales para añadir un toque
          de elegancia y exclusividad a cualquier espacio, tanto en el hogar
          como en el lugar de trabajo. Con nuestra experiencia y conocimientos,
          estamos seguros de que podremos ayudarlo a encontrar la piedra
          perfecta para cualquier ocasión, valorando el arte y el trabajo del
          artesano en cada una de nuestras obras.
        </p>
      </div>
      <div className=" container mx-auto flex max-w-4xl flex-wrap justify-between border border-solid bg-slate-100 px-16 text-4xl text-green-primary">
        <p className=" w-full text-center text-lg font-bold text-slate-500">
          SunquwanStore en todas las redes
        </p>
        {/* <FaInstagram />
        <FaFacebook />
        <FaTiktok />
        <FaWhatsapp /> */}
      </div>
      <MapDiv />
    </div>
  );
};

export default Contact;
