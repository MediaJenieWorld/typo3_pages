import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <h1>Logo</h1>
        <p>Copyright © 2020</p>
      </div>
      <div className="section text-28 text-400">
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="section section-2 text-28">
        <Link to="/services">Services</Link>
        <Link to="/services/consulting">Consulting</Link>
        <Link to="/services/design">Design</Link>
        <Link to="/customer_insight">Customer_Insight</Link>
        <Link to="/services/details">Details</Link>
 
     
      </div>
      <div className="section section-2 text-28">
        <Link to="/resource">Resource</Link>
        <Link to="/about/behindUs">Company</Link>
        <Link to="/about/behindUs">People</Link>
        <Link to="/work">Our Work</Link>
      </div>
      <div className="section social text-28">
        <Link to="https://www.facebook.com/mediajenie/">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/facebook.svg"
            alt="social-icon"
          />
        </Link>
        <Link to="https://www.instagram.com/mediajenie/">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/instagram.svg"
            alt="social-icon"
          />
        </Link>
        <Link to="https://www.linkedin.com/company/mediajenie/">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/twitter.svg"
            alt="social-icon"
          />
        </Link>
        <Link to="#">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/linkedIn.svg"
            alt="social-icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
