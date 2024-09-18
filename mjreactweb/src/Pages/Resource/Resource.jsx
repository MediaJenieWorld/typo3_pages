/* eslint-disable react/prop-types */
import "./style.scss";
import { resourceLink } from "@/Utils/api";


const cards = [
  {
    imageSrc: "/assets/Resource/image.webp",
    title: "Increasing Customer Satisfaction And Loyalty Through CX",
    text: "How can we create an exceptional customer experience that keeps our customers coming back for more? This question reverberates through boardrooms, executive meetings, and strategy sessions across businesses worldwide. In an era where customers wield unprecedented power, the answer lies in mastering Customer Experience (CX). CX is the total of emotions, perceptions, and interactions that...",
    link: "https://mediajenie.com/increasing-customer-satisfaction-and-loyalty-through-cx/"
  },
  {
    imageSrc: "/assets/Resource/image (1).webp",
    title: "How To Improve Your ROI In Marketing Through Optimization Of Customer Experience?",
    text: "How do you transform mundane customer interactions into memorable moments? How can you turn satisfied customers into loyal ones who not only stick around but also bring others along too? Each customer touchpoint shapes their perception of your brand. Get it right, and you’ve won a loyal customer. Get it wrong, and they might vanish...",
    link: "https://mediajenie.com/how-to-improve-your-roi-in-marketing-through-optimization-of-customer-experience/"
  },
  {
    imageSrc: "/assets/Resource/image (2).webp",
    title: "Losing Customers? Reduce Your Churn Rate Through CX Transformation",
    text: "Are your customers slipping through the cracks? It’s a question that keeps many business owners awake at night. The churn rate – the percentage of customers who said goodbye to your brand – can be a silent profit killer. The stakes are high: companies lose an average of 20-30% of their customers annually. That’s a...",
    link: "https://mediajenie.com/losing-customers-reduce-your-churn-rate-through-cx-transformation/"
  },
  {
    imageSrc: "/assets/Resource/image (3).webp",
    title: "How To Transform Sales And Profitability Through CX (Customer Experience) Transformation?",
    text: "Picture this: Your business is a high-speed train speeding through the digital landscape. The tracks ahead are lined with opportunities, but also risky curves. What’s the one lever that can ensure your train stays on course, accelerates, and outpaces the competition? Customer Experience (CX) transformation – the secret weapon used by smart businesses to skyrocket...",
    link: "https://mediajenie.com/how-to-transform-sales-and-profitability-through-cx-customer-experience-transformation/"
  },
  {
    imageSrc: "/assets/Resource/image (4).webp",
    title: "How To Retain Customers? CX Transformation To Improve Retention",
    text: "Do your customers vanish before you even realise why? Even though your product or service may be the best, do you still feel your customers are slipping away and you’re unable to hold on to them? Customer retention isn’t a trick, it’s a strategy, and it has the potential to transform your business.  Acquiring new...",
    link: "https://mediajenie.com/how-to-retain-customers-cx-transformation-to-improve-retention/"
  },
  {
    imageSrc: "/assets/Resource/image (5).webp",
    title: "The Power of Trust: How to Deliver Outstanding Customer Experience",
    text: "In the ever-evolving realm of business, trust stands as the pivotal foundation for exceptional customer experiences and enduring relationships. This post unveils the profound influence of trust on customer interactions and unravels strategies to cultivate trust for building long-lasting connections. The Vital Role of Trust: Trust serves as the heart of outstanding customer experiences. It’s...",
    link: "https://mediajenie.com/the-power-of-trust-how-to-deliver-outstanding-customer-experience/"
  },
]


const ResourcePage = () => {

  const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE", btnProps, linkProps }) => {
    return (
      <button {...btnProps} className={btnClass + " button"}>
        <a href={link || "#link"} {...linkProps}>{lable}</a>
      </button>
    );
  };

  return (
    <div className="ResourcePage">
      <div className="section-1">
        <h4 className="text-32 text-600">Our Blogs</h4>
        <pre className="text-60 text-600">
          {`Here is a sneak peak to our blogs on across different industries and services.`}
        </pre>
      </div>
      <div className="search-section">
        <input type="text" placeholder="Search" />
        <img height={40} width={40} src="/icons/search.svg" alt="search" />
      </div>
      <div className="card-section">
        {cards.map((data, i) => {
          return (<div key={i} className="card">
            <div className="img">
              <img loading="lazy"
                src={data.imageSrc}
                alt={data.imageSrc}
                height={400}
                width={400}
              />
            </div>
            <div className="text-container">
              <p className="text-36 text-600">{data.title} </p>
              <p className="text-28 text-400">{data.text}  </p>
              <KnowMoreBtn linkProps={{ target: "_blank" }} link={data.link} lable="VIEW BLOG" />
            </div>
          </div>)
        })}
      </div>
      <div className="centered">
        <KnowMoreBtn link={resourceLink} lable="LOAD MORE BLOGS" />
      </div>
    </div>
  );
};



export default ResourcePage;
