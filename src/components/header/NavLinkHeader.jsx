import { Link } from "react-router-dom";
const NavLinkHeader = ({ ...props }) => {
    const linked = "/" + props.text;
    const text = props.text;

    return (
        <Link to={linked} className="group relative py-8">
            <span className="group-hover:text-green-primary">{text}</span>
            <span className="absolute bottom-0 block h-1 w-full scale-x-0 transition-all duration-200 group-hover:scale-x-100 group-hover:bg-green-primary"></span>
        </Link>
    );
};

export default NavLinkHeader;
