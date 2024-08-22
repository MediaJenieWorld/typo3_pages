/* eslint-disable react/prop-types */
import "./style.scss";
import ScrollToTop from "@/Components/ScrollTop";

const headingText = `Digital Experience Transformation`;

const subHeadingText = "for a US based tech consulting firm";
const descriptionText = `3 line description of the client/ project etc goes here
and in the next line...`;

// const cards = [
//   "/assets/Work/image (1).webp",
//   "/assets/Work/image (2).webp",
//   "/assets/Work/image (3).webp",
//   "/assets/Work/image (4).webp",
// ]

const cards = [
  {
    imageSrc: "/assets/Work/image (1).webp",
    title: `MedTracker approached us to create a great experience for their mobile app. We
started with the users and designed an intuitive UX design and UI design.`,
    text: "",
  },
  {
    imageSrc: "/assets/Work/image (2).webp",
    title: `We produced the people-success video for Indegene, featuring 19 interns who were
having a great career-start there.`,
    text: "",
  },
  {
    imageSrc: "/assets/Work/image (3).webp",
    title: `Vaishnavi Estate Coffee (VEC) is a top coffee grower from Coorg, India. They have
been growing coffee since 1928 in their estates. When VEC wanted to launch their
own brand of fresh-coffee powder, it was a given that we need to produce some
great visuals that capture the real side of the brand.`,
    text: "",
  },

  {
    imageSrc: "/assets/Work/image (4).webp",
    title: `UX & UI Design. Website design & development. Built on Vue-JS + Strapi Headless
CMS. API Integrations.`,
    text: "",
  },
];

// const cards2 = [
//   "/assets/Work/image (5).webp",
//   "/assets/Work/image (6).webp",
// ]

const cards2 = [
  {
    imageSrc: "/assets/Work/image (5).webp",
    title: `Medtech startup's mobile app helps people to manage their medicine intake and
health. To present the mobile app and its value to its target audience, MedTracker
asked us to produce a demo video.`,
    text: "",
  },
  {
    imageSrc: "/assets/Work/image (6).webp",
    title: `
When Vaishnavi Estate with its 100 years of legacy, launched its coffee brand, we
had to make sure it is perceived and accepted across various audience segments.
Nothing better than some short video content.`,
    text: "",
  },
];

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
          return (
            <div key={i} className="card">
              <div className="img">
                <img
                  loading="lazy"
                  src={val.imageSrc}
                  alt={val.imageSrc}
                  height={400}
                  width={400}
                />
              </div>
              <div className="text-container">
                <p className="text-36 text-600">{val.title}</p>
                <KnowMoreBtn lable="VIEW PROJECT" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="hero-section">
        <img
          style={{ objectFit: "cover" }}
          loading="eager"
          height={"960px"}
          width={"100%"}
          src="/assets/Work/image.webp"
          alt="Banner"
        />
        <div className="overlay">
          <pre className="text-84 text-700">{headingText}</pre>
          <h3 className="text-48 text-500">{subHeadingText}</h3>
          <pre className="text-32 text-500">{descriptionText}</pre>
          <KnowMoreBtn link={"/work"} lable="VIEW WORK" />
        </div>
      </div>
      <div className="card-section">
        {cards2.map((val, i) => {
          return (
            <div key={i} className="card">
              <div className="img">
                <img
                  loading="lazy"
                  src={val.imageSrc}
                  alt={val.imageSrc}
                  height={400}
                  width={400}
                />
              </div>
              <div className="text-container">
                <p className="text-36 text-600">{val.title}</p>
                <KnowMoreBtn lable="VIEW PROJECT" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="centered">
        <KnowMoreBtn link={"#"} lable="LOAD MORE PROJECTS" />
      </div>
    </div>
  );
};

export default WorkPage;
