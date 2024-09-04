// import TestimonialSlider from "@/Components/Testomonials/Testimonial_Slider";
import "./style.scss";
import KnowMoreBtn from "@/Components/KnowMoreBtn";
import ImageComp from "@/Components/Image";
import ScrollToTop from "@/Components/ScrollTop";
import { Fragment, useState } from "react";
// import LineSplitter from "@/Components/Gsap/Line_Ani";
import StaggeredWords, { StaggeredLine } from "@/Components/Gsap/LineIntoWords";
import GsapImage from "@/Components/Gsap/Image_Ani";
import Validations from "@/Utils/FormValidations"
import { useForm } from "react-hook-form";
import { getCountryDataList } from 'countries-list'
import Custom_Centered_DynamicDialog from "@/Components/Models/Dialog/Center_Dialog";
import { contactFormApi } from "@/Utils/api"

const {
  firstName,
  email,
  phoneNumber,
} = Validations

const countries = getCountryDataList()

const headingText = `We are a CX Agency based in Bangalore.`;

const subHeadingText = "We bring your brand & customers closer";
const descriptionText = "through great customer experiences.";

const story = `We are a customer-experience
agency from Bangalore, India.`
// eslint-disable-next-line react/prop-types



const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [modelState, setModelState] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitForm = async (data) => {
    if (loading) return
    try {
      setLoading(true)
      const names = data.fullName.split(" ")
      data.firstName = names[0] ? names[0] : ""
      data.lastName = names[1] ? names[1] : ""

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };

      const response = await fetch(contactFormApi, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      alert("Form submitted successfully!");
      console.log("Response data:", responseData);
    } catch (error) {
      alert("Form Submission Failed")
      console.error("Error submitting form:", error || error.message);
    }
    setLoading(false)
  };
  return (
    <div className="home">
      <ScrollToTop />
      <div className="hero-section">
        <img style={{ objectFit: "cover" }}
          loading="eager"
          height={"960px"} width={"100%"} src="/assets/Home/Home-Hero-Image2.webp" alt="Banner" />
        <div className="overlay">
          <div className="text-84 text-700">
            <StaggeredLine layerCSS_Style={{ opacity: 0 }}
              transitionStyle={{ opacity: 1 }}
              duration={3} initX="-100%" initY="0%" >
              {headingText}
            </StaggeredLine>
          </div>
          <h3 className="text-48 text-500">
            <StaggeredWords duration={4} initX="100%" initY="0%" >
              {subHeadingText}
            </StaggeredWords>
          </h3>
          <h4 className="text-32 text-500">
            <StaggeredWords duration={4} initX="-100%" initY="0%" >
              {descriptionText}
            </StaggeredWords>
          </h4>
          <StaggeredLine duration={4} initX="0%" initY="100%" >
            <button className="button" onClick={() => setModelState(true)}>
              Know More
            </button>
          </StaggeredLine>
        </div>
      </div>
      <Custom_Centered_DynamicDialog modelWidth={"100%"} modelHeight={"calc(100vh - var(--header-h) - 30px)"} state={modelState} setModelState={setModelState}>
        <div className="model">
          <span onClick={() => setModelState(false)} className={"closeBtn"}>
            X
          </span>
          <h1 className="text-42">Please Share your contact details & requirement for a free quatos</h1>
          <form onSubmit={handleSubmit(submitForm)} className="form">
            <div className="fields">
              <div className="field">
                <input {...register("fullName")} type="text" placeholder="Full Name" />
                {errors?.fullName && <p>{errors?.fullName.message}</p>}
              </div>
              <div className="field">
                <input {...register("email", email)} type="email" placeholder="Email Address" />
                {errors?.email && <p>{errors?.email.message}</p>}
              </div>
              <div className="field">
                <select {...register("country")} defaultValue={"India"} placeholder="Country Code" >
                  {countries.map((country, i) => <option value={country.name} key={i}>{country.name} {` (+${country.phone})`}</option>)}
                </select>
                {errors?.code && <p>{errors?.code.message}</p>}
              </div>
              <div className="field">
                <input {...register("phoneNumber", phoneNumber)} type="number" placeholder="Phone Number" />
                {errors?.phoneNumber && <p>{errors?.phoneNumber.message}</p>}
              </div>
              <div className="field">
                <input {...register("company")} type="text" placeholder="company" />
              </div>
              <div className="field">
                <textarea {...register("subject")} name="subject" id="subject" placeholder="Your Message"></textarea>
              </div>
            </div>
            <div className="centered">
              <button className="text-24 button">
                submit
              </button>
            </div>

          </form>
        </div>
      </Custom_Centered_DynamicDialog>

      <div className="home-section-2">
        {/* <h4 className="text-32 text-600">Introduction</h4> */}
        <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
          <pre className="text-60 text-600">
            {story}
          </pre>
        </StaggeredLine>
        <StaggeredLine duration={1} delay={.01} initY="0%" initX="100%" >
          <KnowMoreBtn link={"/services"} label="View Services" />
        </StaggeredLine>
      </div>
      <AllServices />
      <div className="cards-section">
        <div className="card">
          <StaggeredLine duration={2} delay={.7} initX="100%" initY="0">
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
                <KnowMoreBtn link={"/services/consulting"} />
              </div>
            </div>
          </StaggeredLine>
        </div>
        <div className="card">
          <StaggeredLine duration={2} delay={.7} initX="100%" initY="0">
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
                <KnowMoreBtn link={"/work/Gallery"} />
              </div>
            </div>
          </StaggeredLine>
        </div>
        <div className="card">
          <StaggeredLine duration={2} delay={.7} initX="100%" initY="0">
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
                <KnowMoreBtn link={"/resource"} />
              </div>
            </div>
          </StaggeredLine>
        </div>
      </div>
      <div className="home-section-2">
        <div className="text-60 text-600">
          <StaggeredLine duration={1} delay={.01} initY="100%" initX="0%" >
            Our Clients
          </StaggeredLine>
        </div>
        <div className="text-32 text-400">
          <StaggeredLine duration={1} delay={.01} initY="100%" initX="0%" >
            {`In the last 15 years, we have had the honor of working with some exciting brands. From startups, SMEs to large corporates and non-profit organizations...From different industries and countries across the globe.`}
          </StaggeredLine>
        </div>
        <StaggeredLine duration={1} delay={.01} initY="100%" initX="0%" >
          <KnowMoreBtn link={"/services"} btnClass="purple" label="View Services" />
        </StaggeredLine>
      </div>
      {/* <div className="testimonials">
        <h3 className="text-32 text-700 text-container">What our customers say?</h3>
        <TestimonialSlider data={testimonialData} />
      </div> */}
      <div className="success-stories">
        <div className="text-84 text-700">
          <StaggeredWords duration={3} delay={.35} initX="0" initY="100%">
            Success Stories
          </StaggeredWords>
        </div>
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
          <GsapImage loading="lazy"
            className="backImage"
            src="Home/Card.webp"
            alt="bg-image"
            height="700"
            width="500"
            transitionStyle={{ x: "100%" }}
          />
          {/* <h1>Big Heading Text goes here</h1> */}
        </div>
        <div className="right">
          <StaggeredLine
            layerCSS_Style={{ zIndex: 5, opacity: 0, transform: "translate(100%,0%)" }} delay={1} duration={2.5}
            transitionStyle={{ transform: "translate(0%,0%)", opacity: 1 }}>
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
          </StaggeredLine>
        </div>
      </div>
    </div>
  );
};

const SuccessStoryConatiner = ({ data }) => {
  const { category, heading, text } = data
  return <Fragment>
    <div className="text-36">
      <StaggeredWords >
        {heading}
      </StaggeredWords>
    </div>
    <div className="text-28 text-500">
      <StaggeredWords delay={.05}>
        {text}
      </StaggeredWords>
    </div>
    <div className="category text-32 text-600">
      <StaggeredWords>
        {category}
      </StaggeredWords>
    </div>
  </Fragment>
}

function AllServices() {
  return <div className="All-Services">
    <div className="service-heading">
      <div className="text-48 text-600">
        <StaggeredWords delay={.025} initY="100%" initX="0%">
          {`Brand growth & sales are outcomes of
great customer experiences. By
understanding your audience, and
making every experience memorable - at
every touch point - we bring them closer
to your brand.`}
        </StaggeredWords>
      </div>
      <div className="text-48 text-600">
        <StaggeredWords delay={.025} initY="100%" initX="0%">
          {`15+ Years | 100s of Clients | 360 Degree
Solutions`}
        </StaggeredWords>
      </div>
    </div>
    <div className="service-content">
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        Research & Strategy
      </StaggeredLine> </div>
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        Insights
      </StaggeredLine> </div>
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        CX Consulting
      </StaggeredLine> </div>
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        Design
      </StaggeredLine> </div>
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        Digital Media
      </StaggeredLine> </div>
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        Tech Solutions
      </StaggeredLine> </div>
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        Content Production
      </StaggeredLine> </div>
      <div className="text-32 text-400"> <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
        Campaigns
      </StaggeredLine> </div>
      <div className="text-32 text-400">
        <StaggeredLine duration={1} delay={.01} initY="0%" initX="-100%" >
          Marketing Services
        </StaggeredLine>
      </div>
    </div>
    <div className="btn">
      {/* <StaggeredLine duration={1} initY="100%" initX="0%" > */}
      <KnowMoreBtn link={"/services"} label="View Services" />
      {/* </StaggeredLine> */}
    </div>
  </div>
}


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

export default Home;
