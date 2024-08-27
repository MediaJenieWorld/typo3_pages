/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import "./style.scss";
// import ScrollToTop from "@/Components/ScrollTop";
import { getProjectsByPage } from "@/Utils/Work_Projects";

const WorkPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location?.search);

  const getId = queryParams.get('id') || 1
  const id = isNaN(getId) ? 1 : getId == 0 ? 1 : getId
  const nextPageId = new Number(id) + 1

  const cards = getProjectsByPage(id)
  console.log(cards);


  const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
    return (
      <button className={btnClass + " button"}>
        <a href={link || "#link"}>{lable}</a>
      </button>
    );
  };

  return (
    <div className="Work">
      {/* <ScrollToTop /> */}
      <div className="section-1">
        <h4 className="text-32 text-600">Our Work</h4>
        <pre className="text-60 text-600">
          {`Here is a sneak peak to our work across different industries and services.`}
        </pre>
      </div>

      {cards.length > 0 ? <div className="card-section">
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
                  onClick={() => window.location.replace(val?.link)}
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
      </div> : <div className="card-section">
        <h3
          style={{ color: "rgba(25, 27, 29, .6)" }}
          className="text-48 text-600">No More Projects</h3></div>}
      {cards.length >= 5 && <div className="hero-section">
        <img
          style={{ objectFit: "cover" }}
          loading="lazy"
          height={"960px"}
          width={"100%"}
          src={cards[4]?.imageSrc}
          alt="Banner"
        />
        <div className="overlay">
          <h1 className="text-84 text-700">{cards[4]?.title}</h1>
          <h3 className="text-48 text-500">{cards[4]?.text}</h3>
          {/* <pre className="text-32 text-500">{descriptionText}</pre> */}
          <KnowMoreBtn link={cards[4]?.link} lable="VIEW WORK" />
        </div>
      </div>}
      {cards.length > 5 && <div className="card-section">
        {cards.map((val, i) => {
          if (i < 5) return
          return (
            <div key={i} className="card">
              <div className="img">
                <img
                  onClick={() => window.location.replace(val?.link)}
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
      </div>}
      {cards.length >= 7 && <div className="centered">
        {id > 1 && <KnowMoreBtn link={`/work?id=${id - 1}`} lable="Previous Page" />}
        <KnowMoreBtn link={"#id"} lable={id} />
        <KnowMoreBtn link={`/work?id=${nextPageId}`} lable="Next Page" />
      </div>}
    </div>
  );
};

export default WorkPage;


