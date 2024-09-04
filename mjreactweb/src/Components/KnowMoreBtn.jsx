import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const KnowMoreBtn = ({ btnClass = "", link, label = "KNOW MORE", ...btnprops }) => {
    return (
        <button className={btnClass + " button"}
            aria-label={label}
            {...btnprops}
        >
            <Link style={{
                textDecoration: "none"
            }}
                {...btnprops} to={link || "#"}>
                {label}
            </Link>
        </button>
    );
};
export default KnowMoreBtn