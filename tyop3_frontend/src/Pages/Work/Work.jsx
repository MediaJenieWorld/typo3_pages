/* eslint-disable react/prop-types */
import "./style.scss";
import ScrollToTop from "@/Components/ScrollTop";

const headingText = `Digital Experience Transformation`;

const subHeadingText = "for a US based tech consulting firm";
const descriptionText = `3 line description of the client/ project etc goes here
and in the next line...`;

const WorkPage = () => {

  const cards = projects()

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
          if (i >= 4) return
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
                <KnowMoreBtn link={val?.link || "#"} lable="VIEW PROJECT" />
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
          <pre className="text-84 text-700">Gloria Jeans Coffee</pre>
          <h3 className="text-48 text-500">For Gloria Jeans Coffee - India launch -, we designed & developed the website.</h3>
          {/* <pre className="text-32 text-500">{descriptionText}</pre> */}
          <KnowMoreBtn link={"/work/Gloria_Coffee"} lable="VIEW WORK" />
        </div>
      </div>
      <div className="card-section">
        {cards.map((val, i) => {
          if (i < 4) return
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
                <KnowMoreBtn link={val?.link || "#"} lable="VIEW PROJECT" />
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


function projects() {
  return [
    {
      imageSrc: "/assets/Work/image (1).webp",
      title: `MedTracker approached us to create a great experience for their mobile app. We
started with the users and designed an intuitive UX design and UI design.`,
      text: "",
      link: "/work/Medtracker"
    },
    {
      imageSrc: "/assets/Work/appleBees (1).jpg",
      title: `Web Solutions.We designed & developed the website for AppleBees' India launch.`,
      text: "",
      link: "/work/AppleBees"
    },

    {
      imageSrc: "/assets/Work/image (3).webp",
      title: `VEC Photography, We wanted to capture the honest and down-to-earth side of the brand. Nothing can be better than capturing the real people behind this terrific coffee. The images are not touched-up, but true and grounded. Just like these people and the coffee they grow.`,
      text: "",
      link: "/work/VEC_Photography"
    },

    {
      imageSrc: "/assets/Work/image (4).webp",
      title: `SafeTree
Digital, UX & UI Design. Website design & development. Built on Vue-JS + Strapi Headless
CMS. API Integrations.`,
      text: "",
      link: "/work/Safe_Tree"
    },
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
      link: "/work/VE_Coffee",
    },
  ];

}