import "./style.scss";
import CoverPageImage from "@/Components/CoverPage";
import TestimonialSlider from "@/Components/Testomonials/Testimonial_Slider";
import Counter from "./Count";
import { StaggeredLine } from "@/Components/Gsap/LineIntoWords";
import GsapImage from "@/Components/Gsap/Image_Ani";

import { useState } from "react";
import Connect_Form from "@/Components/Models/Form/Connect_Form";

const floatingCard_Heading = `Our
Work Culture`

const About = () => {

  const [modelState, setModelState] = useState(false);

  return (
    <div className="About">
      <CoverPageImage src="/assets/Home/Our Story.webp" />
      <div className="section-2">
        <StaggeredLine initX={"0%"} initY={"100%"} >
          <pre style={{ fontFamily: 'Poppins', lineHeight: "1.2em" }} className="text-84 text-600">
            {`We help in
launching & growing brands,
businesses & ideas.`}
          </pre>
        </StaggeredLine>
        <StaggeredLine initX={"0%"} initY={"100%"} >
          <p className="text-28">
            We are a Customer Experience Agency. We bring your brand & customers
            closer through great customer experiences. With a leadership team of
            veterans having 20+ years of experience in their respective domains, we
            provide solutions with a razor-sharp focus on your users. With us on
            board, what you get is a rare-combination of customer experience +
            creative + digital + content + services.
          </p>
        </StaggeredLine>

      </div>
      {/* <div className="image-section">
        <ImageSlider />
      </div> */}
      <div className="hero-section">
        <GsapImage duration={1.5} layerCSS_Style={{ display: "none" }}
          imageCSS_Style={{ filter: "blur(10px)", scale: "1" }} image_transitionStyle={{ filter: "blur(0px)", scale: "1" }} loading="lazy" src="/assets/Home/About-Hero.webp" alt="Banner" />
        <div className="overlay">
          <h1 className="text-84 text-700">
            <StaggeredLine duration={4} delay={1} initX={"0%"} initY={"-100%"} >
              From 1-man startups
            </StaggeredLine>
          </h1>
          <h3 className="text-48 text-400">
            <StaggeredLine duration={3} delay={1}>
              to family-owned businesses, fast-growing brands, and some very large
              corporates, we have had the honor of working with
            </StaggeredLine>
          </h3>
          <h4 className="text-32 text-400">
            <StaggeredLine duration={3} delay={1}>
              some interesting clients.
            </StaggeredLine>
          </h4>
        </div>
      </div>
      <div className="section-5">
        <div className="text-center-wrapper">
          <h2 className="text-72 text-600">Our Principles & Values</h2>
          <table className="items">
            <tbody>{principlesAndValues().map((data, i) =>
              <tr key={i}>
                <td className="item text-28">
                  {data.title}
                </td>
                <td className="item text-28">
                  {data.text}
                </td>
              </tr>
            )}
            </tbody>
            {/* {principlesAndValues().map((data, i) => <div key={i} className="item">
              <p className="text-28">
                {data.title}
              </p>
              <p className="text-28">{data.text}
              </p>
            </div>)} */}
          </table>
        </div>
      </div>
      <div className="section-4">

        <div className="text-center-wrapper">

          <div className="flex-col Counter">

            <h2 className="text-84 text-600"> <Counter targetNumber={15} gap={1} />+</h2>
            <p className="text-28">Years</p>
          </div>
          <div className="flex-col">
            <h2 className="text-84 text-600"> <Counter targetNumber={100} gap={4} />+</h2>
            <p className="text-28">Clients</p>
          </div>
          <div className="flex-col">
            <h2 className="text-84 text-600"> <Counter targetNumber={15} gap={1} />+</h2>
            <p className="text-28">Industries Handled</p>
          </div>
          <div className="flex-col">
            <h2 className="text-84 text-600"> <Counter targetNumber={1000} gap={10} />+</h2>
            <p className="text-28">Solutions Delivered</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h3 className="text-32 text-700 text-container">What our customers say?</h3>
        <TestimonialSlider data={testimonialData()} />
      </div>
      <div id="section5" className="Big-container">
        <img loading="lazy"
          className="main-backImage"
          src="/assets/Home/About-half-card.webp"
          alt="bg-image"
          height="700"
          width="500"
        />
        <div className="left parent">
          <img loading="lazy"
            className="backImage"
            src="/assets/Home/About-half-card.webp"

            alt="bg-image"
            height="700"
            width="500"
          />
          <pre style={{ color: "#fff" }} className="text-72 text-700">
            <StaggeredLine initX="0" initY="100%" >
              {floatingCard_Heading}
            </StaggeredLine>
          </pre>
        </div>
        <div className="right">
          <div className="card">
            <div className="text-wrapper">
              <StaggeredLine initX="0" initY="100%" >
                <p className="text-32 text-400">
                  Open, unbiased and respectful.
                  We encourage constant learning, exploration and problem solving.
                  People are given freedom, flexibility and responsibilities.
                  To reach their potential, push limits and deliver awesome outcomes.

                </p>
              </StaggeredLine>
              <StaggeredLine initX="-100%" initY="0%" >
                <button className="button" onClick={() => setModelState(true)}>
                  Know More
                </button>
              </StaggeredLine>
            </div>
          </div>
        </div>
      </div>
      <Connect_Form modelState={modelState} setModelState={setModelState} />
    </div>
  );
};


function testimonialData() {
  return [
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
}

function principlesAndValues() {
  return [
    {
      title: "Integrity",
      text: "Transparent & Honest"
    },
    {
      title: "Respect",
      text: "Non-discriminatory"
    }
    ,
    {
      title: "Excellence",
      text: "Data & Insight driven to deliver value"
    },
    {
      title: "Teamwork",
      text: "Collaborative, flexibility and accountability"
    },
    {
      title: "Innovation",
      text: "Creative, Problem Solving"
    },
    {
      title: "Fairness",
      text: "Equal Opportunity Employer"
    },
    {
      title: "Care",
      text: "Be Supportive & Empathetic"
    },
    {
      title: "Passion",
      text: "Deliver our best. Aim to better."
    },
    {
      title: "Learning",
      text: "Be better than who we were yesterday."
    },
    {
      title: "Customers",
      text: "Customer Experience Focused & Service"
    }
  ]
}

export default About;
