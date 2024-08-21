/* eslint-disable react/prop-types */
import "./style.scss";
import ScrollToTop from "@/Components/ScrollTop";



const headingText = `Digital Experience Transformation`;

const subHeadingText = "for a US based tech consulting firm";
const descriptionText = `3 line description of the client/ project etc goes here
and in the next line...`;


const cards = [
  "/assets/Work/image (1).webp",
  "/assets/Work/image (2).webp",
  "/assets/Work/image (3).webp",
  "/assets/Work/image (4).webp",
]


const cards2 = [
  "/assets/Work/image (5).webp",
  "/assets/Work/image (6).webp",
]

const WorkPage = () => {


  const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
    return (
      <button className={btnClass + " button"}>
        <a href={link || "#link"}>{lable}</a>
      </button>
    );
  };

  return (
    <div className="Work">
      <ScrollToTop />
      <div className="section-1">
        <h4 className="text-32 text-600">Our Work</h4>
        <pre className="text-60 text-600">
          {`Here is a sneak peak to our work across different industries and services.`}
        </pre>
      </div>
      <div className="card-section">
        {cards.map((val, i) => {
          return (<div key={i} className="card">
            <div className="img">
              <img loading="lazy"
                src={val}
                alt={val}
                height={400}
                width={400}
              />
            </div>
            <div className="text-container">
              <p className="text-36 text-600">
                Introduction line heading or value proposition goes here in 4
                lines.
              </p>
              <KnowMoreBtn lable="VIEW PROJECT" />
            </div>
          </div>)
        })}
      </div>
      <div className="hero-section">
        <img style={{ objectFit: "cover" }}
          loading="eager"
          height={"960px"} width={"100%"} src="/assets/Work/image.webp" alt="Banner" />
        <div className="overlay">
          <pre className="text-84 text-700">{headingText}</pre>
          <h3 className="text-48 text-500">{subHeadingText}</h3>
          <pre className="text-32 text-500">{descriptionText}</pre>
          <KnowMoreBtn link={"/work"} lable="VIEW WORK" />
        </div>
      </div>
      <div className="card-section">
        {cards2.map((val, i) => {
          return (<div key={i} className="card">
            <div className="img">
              <img loading="lazy"
                src={val}
                alt={val}
                height={400}
                width={400}
              />
            </div>
            <div className="text-container">
              <p className="text-36 text-600">
                Introduction line heading or value proposition goes here in 4
                lines.
              </p>
              <KnowMoreBtn lable="VIEW PROJECT" />
            </div>
          </div>)
        })}
      </div>
      <div className="centered">
        <KnowMoreBtn link={"#"} lable="LOAD MORE PROJECTS" />
      </div>
    </div>
  );
};



export default WorkPage;
