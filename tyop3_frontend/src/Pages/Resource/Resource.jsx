/* eslint-disable react/prop-types */
import "./style.scss";
import ScrollToTop from "@/Components/ScrollTop";


const cards = [
  {
    imageSrc: "/assets/Resource/image.webp",
    title: "", text: ""
  },
  {
    imageSrc: "/assets/Resource/image (1).webp",
    title: "", text: ""
  },
  {
    imageSrc: "/assets/Resource/image (2).webp",
    title: "", text: ""
  },
  {
    imageSrc: "/assets/Resource/image (3).webp",
    title: "", text: ""
  },
  {
    imageSrc: "/assets/Resource/image (4).webp",
    title: "", text: ""
  },
  {
    imageSrc: "/assets/Resource/image (5).webp",
    title: "", text: ""
  },
]

const ResourcePage = () => {


  const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
    return (
      <button className={btnClass + " button"}>
        <a href={link || "#link"}>{lable}</a>
      </button>
    );
  };

  return (
    <div className="ResourcePage">
      <ScrollToTop />
      <div className="section-1">
        <h4 className="text-32 text-600">Our Work</h4>
        <pre className="text-60 text-600">
          {`Here is a sneak peak to our work across different industries and services.`}
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
              <p className="text-36 text-600">
                Increasing customer satisfaction and loyalty through customer experience.
              </p>
              <p className="text-28 text-400">
                How can we create an exceptional customer experience that keeps our customers coming back for more?
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



export default ResourcePage;
