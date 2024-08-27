import CoverPageImage from "@/Components/CoverPage";
import "./style.scss";
import ScrollToTop from "@/Components/ScrollTop";

const fakeCardData = [
  {
    category: "SERVICE",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/msg593987909-835.webp",
  },
  {
    category: "CASE STUDY",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/msg593987909-836.webp",
  },
  {
    category: "FEATURED WORK",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/owl.webp",
  },
  {
    category: "HAND PICKED",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/woman.webp",
  },
];

const faq = [{
  title: "Increasing Customer Satisfaction And Loyalty Through CX",
  text: "How can we create an exceptional customer experience that keeps our customers coming back for more? This question reverberates through boardrooms, executive meetings, and strategy sessions across businesses worldwide. In an era where customers wield unprecedented power, the answer lies in mastering Customer Experience (CX). CX is the total of emotions, perceptions, and interactions that"
},
{
  title: "How To Improve Your ROI In Marketing Through Optimization Of Customer Experience?",
  text: "How do you transform mundane customer interactions into memorable moments? How can you turn satisfied customers into loyal ones who not only stick around but also bring others along too? Each customer touchpoint shapes their perception of your brand. Get it right, and you’ve won a loyal customer. Get it wrong, and they might vanish"
}, {
  title: "Losing Customers? Reduce Your Churn Rate Through CX Transformation",
  text: "Are your customers slipping through the cracks? It’s a question that keeps many business owners awake at night. The churn rate – the percentage of customers who said goodbye to your brand – can be a silent profit killer. The stakes are high: companies lose an average of 20-30% of their customers annually. That’s a ..."
}
  , {
  title: "How To Transform Sales And Profitability Through CX (Customer Experience) Transformation?",
  text: "Picture this: Your business is a high-speed train speeding through the digital landscape. The tracks ahead are lined with opportunities, but also risky curves. What’s the one lever that can ensure your train stays on course, accelerates, and outpaces the competition? Customer Experience (CX) transformation – the secret weapon used by smart businesses to skyrocket ..."
}, {
  title: "How To Retain Customers? CX Transformation To Improve Retention",
  text: "Do your customers vanish before you even realise why? Even though your product or service may be the best, do you still feel your customers are slipping away and you’re unable to hold on to them? Customer retention isn’t a trick, it’s a strategy, and it has the potential to transform your business.  Acquiring new ..."
}
  , {
  title: "The Power of Trust: How to Deliver Outstanding Customer Experience",
  text: "In the ever-evolving realm of business, trust stands as the pivotal foundation for exceptional customer experiences and enduring relationships. This post unveils the profound influence of trust on customer interactions and unravels strategies to cultivate trust for building long-lasting connections. The Vital Role of Trust: Trust serves as the heart of outstanding customer experiences. It’s ..."
}
  , {
  title: "Case Study – 360-Degree Digital Media Transformation for a Tech Consulting Firm USA",
  text: "Download Case Study The Challenge A growing tech-consulting firm in the US, the client was competing with some large organizations in their segment and was struggling to get traction in marketing. Their website was getting just about 2500 visitors from organic search, and a couple of leads. The Solution We started with user research to ..."
}
  , {
  title: "Importance of customer experience",
  text: "When products, services and technology are being commoditized, how is your brand going to differentiate and grow? In this blog we present the concept of “CX – Customer Experience” and its importance…"
}

]

const DetailsPage = () => {
  return (
    <div className="Details">
      <ScrollToTop />
      <CoverPageImage src={"/assets/Service/cover.webp"} />
      <div className="section-1">
        <pre className="text-84 text-600">{`What we do?`}</pre>
        
        <pre className="text-28">{`Strategic Consulting & Research`}</pre>
        
        <h4 className="text-32 text-600">Driven by research, behaviour insights, intelligence and applied psychology, we design, produce, implement, deliver and manage services to make your brand loved by your customers.</h4>
      </div>
      <div className="cards-section">
        {fakeCardData.map((card, i) => {
          return (
            <div className="card" key={i}>
              <img
                loading="lazy"
                src={card.imgSrc}
                alt={card.imgSrc}
                height={450}
                width={350}
              />
              <div className="text-container">
                <p className="text-24 text-600">{card.category}</p>
                <div className="bottom">
                  <p className="text-36 text-600">{card.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="section-3">
        <div className="text-center-wrapper">
          <h2 className="text-72 text-600">User Focused. Insight Driven.</h2>
          <p className="text-28">

            We are a Customer Experience Agency. We bring your brand & customers
            closer through great customer experiences. With a leadership team of
            veterans having 20+ years of experience in their respective domains, we
            provide solutions with a razor-sharp focus on your users. With us on
            board, what you get is a rare-combination of customer experience +
            creative + digital + content + services.
          </p>
        </div>
      </div>
      <div id="section-4" className="Big-container">
        <div className="left parent">
          <img
            loading="lazy"
            className="backImage"
            src="/assets/Service/float-card.webp"
            alt="bg-image"
            height="700"
            width="500"
          />
          {/* <h1>Big Heading Text goes here</h1> */}
        </div>
        <div className="right">
          <div className="card">
            <div className="all">
              <div className="text-wrapper">
                <h2 className="text-60 text-700">Applied Psychology</h2>
                <p className="text-32 text-400">
                  Veterans, seasoned, grey-haired, golden-haired,
                  freshers, rebels... MediaJenie has an electric
                  mix of passionate professionals from different
                  domains. Our leadership team comprises of
                  industry veterans with 20+ years experience in
                  their respective domains.
                </p>
              </div>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="FAQ">
        <h2 className="text-72 text-600">Frequently Asked Questions</h2>
        {faq.map((data, i) => {
          return (
            <details key={i}>
              <summary className="text-32 text-500">
                {data.title}
              </summary>
              <div className="content">
                <div className="text-28 text-300">{data.text}</div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
};

function KnowMoreBtn({ btnClass = "", link, lable = "KNOW MORE" }) {
  return (
    <button className={btnClass + " button"}>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
}

export default DetailsPage;
