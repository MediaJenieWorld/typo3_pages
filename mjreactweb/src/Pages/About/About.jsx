import "./style.scss";
import CoverPageImage from "@/Components/CoverPage";
import TestimonialSlider from "@/Components/Testomonials/Testimonial_Slider";
import Counter from "./Count";
import ScrollToTop from "@/Components/ScrollTop";
import { StaggeredLine } from "@/Components/Gsap/LineIntoWords";
import GsapImage from "@/Components/Gsap/Image_Ani";

import Validations from "@/Utils/FormValidations"
import { useForm } from "react-hook-form";
import { getCountryDataList } from 'countries-list'
import Custom_Centered_DynamicDialog from "@/Components/Models/Dialog/Center_Dialog";
import { contactFormApi } from "@/Utils/api"
import { useState } from "react";

const floatingCard_Heading = `Our
Work Culture`


const {
  firstName,
  email,
  phoneNumber,
} = Validations

const countries = getCountryDataList()

const About = () => {
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
    <div className="About">
      <ScrollToTop />
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
