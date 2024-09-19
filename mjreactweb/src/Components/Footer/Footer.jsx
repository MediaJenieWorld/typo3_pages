import { Link } from "react-router-dom";
import "./style.scss";
import { resourceLink } from "@/Utils/api";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <img style={{ height: "60px", objectFit: "cover", width: "180px" }} loading="lazy"
          src="/icons/footer-logo.webp" height={50} width={120} alt="Logo" />
        <br />
        <p style={{ textAlign: "center" }} className="text-16">Copyright © 2020</p>
      </div>
      <div className="section text-28 text-400">
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="section section-2 text-28">
        <Link to="/services">Services</Link>
        <Link to="/services/details">Details</Link>
        <Link to="/services/design">Design</Link>
        <Link to="/services/consulting">Consulting</Link>
        <Link to="/services/digital">Digital Experience</Link>
        
      
        <Link to="/services/customer_insight">Customer Insight</Link>
        <Link to="/services/content_services">Content Services</Link>
        <Link to="/services/marketing_services">Marketing Services</Link>
      </div>
      {/* <div className="section section-2 text-28">

        <Link to="/services/digital">Digital</Link>
        <Link to="/services/content_services">Content Services</Link>
        <Link to="/services/marketing_services">Marketing Services</Link>
      </div> */}
      <div className="section section-2 text-28">
        <Link to={resourceLink}>Resource</Link>
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
        {/* <Link to="https://x.com/company/mediajenie/">
          <img loading="lazy"
            height={24}
            width={24}
            src="/icons/twitter.svg"
            alt="social-icon"
          />
        </Link> */}
        <Link to="https://www.linkedin.com/company/mediajenie/">
        
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
