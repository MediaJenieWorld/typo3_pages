// import TestimonialSlider from "@/Components/Testomonials/Testimonial_Slider";
import "./style.scss";
import KnowMoreBtn from "@/Components/KnowMoreBtn";
import ImageComp from "@/Components/Image";
import ScrollToTop from "@/Components/ScrollTop";
import { Fragment } from "react";

const headingText = `We are a CX Agency based in Bangalore.`;

const subHeadingText = "We bring your brand & customers closer";
const descriptionText = "through great customer experiences.";

const story = `We are a customer-experience
agency from Bangalore, India.`
// eslint-disable-next-line react/prop-types

const testimonialData = [
  {
    heading: `“MediaJenie worked with us closely in changing
the overall digital experience of our customers.
From revamping our website to content and digital
media management, they supported us through the
year.”`,
    summary: "",
    author: "Puneet Singh",
    position: "CEO | Encryption Consulting LLC - USA"
  },
  {
    heading:
      `“I just wanted to share our experience and let you
know that it’s been great working with you. We're
glad we decided to work with you. Thank you so
much for a job well done.You guys are the best!
Keep up the great work!”`,
    summary: "",
    author: "Nirmal Narayan",
    position: "Founder-CEO"
  },
  {
    heading: `“Good Supporting Team. The quality of work is
good. The feedback system with customers is very
good. We will give an overall 9 points out of 10!
Vishwanath Bettadapura.”`,
    summary: "",
    author: "Toyoda Gosei",
    position: "Asst. Manager - Sales"
  },
  {
    heading:
      `“Managing NPS and CSAT was a challenge for us.
MediaJenie took this off our shoulders and
managed it smoothly. The reports and insights
were really helpful.”`,
    summary: "",
    author: "COO",
    position: "F & B Brand, Bangalore"
  },
  {
    heading:
      `“Excellent support by the operations team, the
ideation process is amazing, and are highly
committed. Looking forward to many years of great
content with MediaJenie.”`,
    summary: "",
    author: "Shareeq Mohammed",
    position: "Toni Rossi"
  },
  {
    heading:
      `“CX audit & NPS by MediaJenie helped us in
understanding the critical areas we needed to
focus. They supported us in fixing these gaps in
our marketing & service areas..”`,
    summary: "",
    author: "Fintech Start-up",
    position: "VP Marketing"
  }
]

const successStoriesData = [
  {
    heading: "Tech Consulting Company - USA",
    text: "Generated 10X return & revenue. Grew organic traffic by 1600% and leads by 1500% in one year.",
    category: "Digital Marketing",
  },
  {
    heading: "Global F&B brand",
    text: "Designed developed and launched the website of a Global F&B brand for the Indian market entry.",
    category: "Website",
  },
  {
    heading: "Coffee brand | Karnataka",
    text: "Helped a century-old traditional coffee grower launch their own brand.",
    category: "Brand Launch & Growth",
  },
  {
    heading: "Fintech Startup, Gurugram",
    text: "Transformed the website experience / Tech-stack - Vue-JS + Strapi.",
    category: "UX + UI + Website",
  },
  {
    heading: "Resort | Maharashtra",
    text: "Grew revenue from online booking by 1200% Increased leads by 2100%.",
    category: "Digital Marketing",
  },
  {
    heading: "F & B Brand",
    text: "Managed NPS administration & insights generation. Designed & implemented CX initiatives across channels.",
    category: "CX Consulting & Managed Services",
  },
]

const Home = () => {
  return (
    <div className="home">
      <ScrollToTop />
      <div className="hero-section">
        <img style={{ objectFit: "cover" }}
          loading="eager"
          height={"960px"} width={"100%"} src="/assets/Home/Home-Hero-Image2.webp" alt="Banner" />
        <div className="overlay">
          <pre className="text-84 text-700">{headingText}</pre>
          <h3 className="text-48 text-500">{subHeadingText}</h3>
          <h4 className="text-32 text-500">{descriptionText}</h4>
          <KnowMoreBtn link={"/about"} />
        </div>
      </div>
      <div className="home-section-2">
        {/* <h4 className="text-32 text-600">Introduction</h4> */}
        <pre className="text-60 text-600">{story}
        </pre>
        <KnowMoreBtn link={"/services"} btnClass="purple" label="View Services" />
      </div>
      <AllServices />
      <div className="cards-section">
        <div className="card">
          <ImageComp loading="lazy"
            src="Home/blue-particle.webp"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">FEATURED SERVICE</p>
            <div className="bottom">
              <p className="text-36 text-600">
                Customer Experience Consulting to improve Sales
              </p>
              <KnowMoreBtn link={"/about"} />
            </div>
          </div>
        </div>
        <div className="card">
          <ImageComp loading="lazy"
            src="Home/red-rays.webp"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">LATEST WORK</p>
            <div className="bottom">
              <p className="text-36 text-600">
                Digital Experience for one of the leading organization in USA
              </p>
              <KnowMoreBtn link={"/about"} />
            </div>
          </div>
        </div>
        <div className="card">
          <ImageComp loading="lazy"
            src="Home/blue-ball.webp"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">KNOWLEDGE</p>
            <div className="bottom">
              <p className="text-36 text-600">
                How you can use AI to improve customer experience?
              </p>
              <KnowMoreBtn link={"/about"} />
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-2">
        <h4 className="text-60 text-600">Our Clients</h4>
        <p className="text-32 text-400">{`In the last 15 years, we have had the honor of working with some exciting brands. From startups, SMEs to large corporates and non-profit organizations...From different industries and countries across the globe.`}
        </p>
        <KnowMoreBtn link={"/services"} btnClass="purple" label="View Services" />
      </div>
      {/* <div className="testimonials">
        <h3 className="text-32 text-700 text-container">What our customers say?</h3>
        <TestimonialSlider data={testimonialData} />
      </div> */}
      <div className="success-stories">
        <h2 className="text-84 text-700">Success Stories</h2>
        <div className="list">
          {successStoriesData.map((item, index) => {
            return <div className="story-list-item" key={index}>
              <SuccessStoryConatiner data={item} />
            </div>
          })}
        </div>

      </div>
      <div id="section6" className="Big-container">
        <div className="left parent">
          <ImageComp loading="lazy"
            className="backImage"
            src="Home/Card.webp"
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
                <h2 className="text-60 text-700">Why CX is critical?</h2>
                <p className="text-32 text-400">
                  When products, technology and services become commoditized and brands face intense competition, “experience” will be the one aspect that differentiate them from the rest. If you focus on delivering great customer experience (CX) at every touch point of your brand, you are not just driving growth & profit, but also becoming a better organization internally. Because, to deliver great CX, you need to REALLY KNOW your customer. By having a deeper understanding about them and delivering experiences that connects with them at an emotional level, your brand is forging a deeper, stronger and meaningful bond with the right audience.
                </p>
              </div>
              <KnowMoreBtn link={"/about"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessStoryConatiner = ({ data }) => {
  const { category, heading, text } = data
  return <Fragment>
    <h3 className="text-36">
      {heading}
    </h3>
    <p className="text-28 text-500">{text}</p>
    <h4 className="category text-32 text-600">{category}</h4>
  </Fragment>
}

function AllServices() {
  return <div className="All-Services">
    <div className="service-heading">
      <p className="text-48 text-600">{`Brand growth & sales are outcomes of
great customer experiences. By
understanding your audience, and
making every experience memorable - at
every touch point - we bring them closer
to your brand.`}</p>
      <p className="text-48 text-600">
        {`15+ Years | 100s of Clients | 360 Degree
Solutions`}
      </p>
    </div>
    <div className="service-content">
      <p className="text-32 text-400">Research & Strategy</p>
      <p className="text-32 text-400">Insights</p>
      <p className="text-32 text-400">CX Consulting</p>
      <p className="text-32 text-400">Design</p>
      <p className="text-32 text-400">Digital Media</p>
      <p className="text-32 text-400">Tech Solutions</p>
      <p className="text-32 text-400">Content Production</p>
      <p className="text-32 text-400">Campaigns</p>
      <p className="text-32 text-400">Marketing Services</p>
    </div>
    <div className="btn">
      <KnowMoreBtn link={"/services"} btnClass="purple" label="View Services" />
    </div>
  </div>
}

export default Home;
