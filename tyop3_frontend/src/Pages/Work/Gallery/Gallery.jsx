import ImageComp from "@/Components/Image";
import "./style.scss";
import CoverPageImage from "@/Components/CoverPage";

const Work_Gallery_Page = () => {
    const images = [
        "/Work/Gallery/image (1).png",
        "/Work/Gallery/image (2).png",
        "/Work/Gallery/image (3).png",
        "/Work/Gallery/image (4).png",
        "/Work/Gallery/image (5).png",
    ];
    const images2 = [
        "/Work/Gallery/image (1).png",
        "/Work/Gallery/image (2).png",
        "/Work/Gallery/image (3).png",
        "/Work/Gallery/image (4).png",
        "/Work/Gallery/image (5).png",
    ];

    const cards = [
        "Home/blue-ball.webp",
        "Home/red-rays.webp",
        "Home/blue-particle.webp",
    ]

    const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
        return (
            <button className={btnClass + " button"}>
                <a href={link || "#link"}>{lable}</a>
            </button>
        );
    };

    return (
        <div className="Work_Gallery_Page">
            <CoverPageImage src={"/assets/Work/Gallery/cover.png"} />
            <div className="section-1">
                <h4 className="text-32 text-600">Our Work</h4>
                <pre className="text-60 text-600">
                    {`Digital Media Production
Vaishnavi Estate Coffee`}
                </pre>
            </div>
            <div className="image-gallery">
                {images.map((val, i) => {
                    return (
                        <ImageComp
                            loading="lazy"
                            src={val}
                            height="400"
                            width="300"
                            alt="img"
                            key={i}
                        />
                    );
                })}
            </div>
            <div className="section-3">
                <div className="text-center-wrapper">
                    <h2 className="text-72 text-600">Services we handled</h2>
                    <p className="text-28">
                        Description text paragraph can go here in 200 words. This can be
                        multi-line text. Description text paragraph can go here in 200
                        words. This can be multi-line text. Description text paragraph can
                        go here in 200 words. This can be multi-line text. Description text
                        paragraph can go here in 200 words. This can be multi-line text.
                    </p>
                </div>
            </div>
            <div className="image-gallery">
                {images2.map((val, i) => {
                    return (
                        <ImageComp
                            loading="lazy"
                            src={val}
                            height="400"
                            width="300"
                            alt="img"
                            key={i}
                        />
                    );
                })}
            </div>
            <div className="section-1">
                <h4 className="text-32 text-600">Related Projects</h4>
                <pre className="text-60 text-600">
                    {`You may be interested in....`}
                </pre>
            </div>
            <div className="cards-section">
                {cards.map((val, i) => {
                    return (<div key={i} className="card">
                        <ImageComp
                            src={val}
                            alt={val}
                            height={400}
                            style={{ objectFit: "cover", filter: "brightness(.7)" }}
                            width={400}
                        />
                        <div className="text-container">
                            <p className="text-24 text-600">CATEGORY</p>
                            <div className="bottom">
                                <p className="text-36 text-600">
                                    Introduction line heading or value proposition goes here in 4
                                    lines.
                                </p>
                                <KnowMoreBtn />
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Work_Gallery_Page;