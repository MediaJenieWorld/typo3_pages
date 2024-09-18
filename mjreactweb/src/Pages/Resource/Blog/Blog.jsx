/* eslint-disable react/prop-types */
import ImageComp from "@/Components/Image";
import "./style.scss";


const cards = [
  {
    imageSrc: "/assets/Resource/image.webp",
    title: "", text: ""
  },
  {
    imageSrc: "/assets/Resource/image (1).webp",
    title: "", text: ""
  },
]

const ResourceBlogPage = () => {

  return (
    <div className="ResourceBlogPage">
      <div className="section-1">
        <h4 className="text-32 text-600">Resources | Blog</h4>
        <pre className="text-60 text-600">
          {`Increasing Customer Satisfaction And
Loyalty Through CX`}
        </pre>
      </div>
      <div className="hero-image">
        <ImageComp style={{ objectFit: "cover" }} src={"/Resource/image-12.webp"} height={"500px"} width={"100%"} />
      </div>
      <div className="blog-info">
        <p className="text-28 text-400">
          How can we create an exceptional customer experience that keeps our customers coming back for more?
          This question reverberates through boardrooms, executive meetings, and strategy sessions across businesses worldwide. In an era where customers wield unprecedented power, the answer lies in mastering Customer Experience (CX).
          CX is the total of emotions, perceptions, and interactions that customers associate with your company. From that first website visit to post-purchase support, every encounter leaves a mark. And here’s the kicker: CX directly impacts your bottom line.
        </p>

        <h3 className="text-48 text-600 mt-2">Why CX Matters: The Numbers Speak</h3>
        <p className="text-28 text-400">Companies that prioritize CX outperform their competitors. According to a Gartner study, 81% of companies expect to compete primarily based on CX by 2024.
          Loyal customers spend more, refer others, and stick around. Graph Digital reports that improving CX leads to better relationships, exceeding customer needs, and ultimately, loyalty. Satisfied customers are 2.4 times more likely to stay loyal to your brand.
          A well-crafted CX strategy can recoup inactive customers and reduce churn. Happy customers stay longer, spend more, and become your brand ambassadors.</p>

        <ImageComp className="mt-2" style={{ objectFit: "cover" }} src={"/Resource/image-12.webp"} height={"300px"} width={"100%"} />

        <h3 className="text-48 text-600 mt-2">Building a Winning CX Strategy</h3>
        <p className="text-28 text-400">
          Creating an exceptional Customer Experience (CX) isn’t a shot in the dark but is the result of a meticulously crafted strategy that reflects your business and makes an impact on customers. Let’s take a look at the key steps to form a winning CX approach:</p>
        <h3 className="text-48 text-600 mt-2">
          Customer Journey Mapping To Visualize Touchpoints and Pain Points
        </h3>
        <p className="text-28 text-400">
          Why It Matters: Imagine having a GPS for your customers’ interactions with your brand. That’s precisely what customer journey mapping does. It charts the entire voyage of your customers from discovery to post-purchase, revealing every pause, stop and detour they take.
          <br />
          <br />
          The Impact: Companies that map their customer journeys are 2.5 times more likely to exceed revenue goals. By identifying pain points (those pesky roadblocks that frustrate customers), you can pave smoother paths.
          <br />
          <br />
          Actionable Insight: Understand where customers drop off, where they linger, and where they rave about your service. Armed with this knowledge, optimize touchpoints and eliminate bottlenecks.
        </p>
        <h3 className="text-48 text-600 mt-2">
          Summary
        </h3>
        <p className="text-28 text-400">
          Creating an exceptional Customer Experience (CX) isn’t a shot in the dark but is the result of a meticulously crafted strategy that reflects your business and makes an impact on customers. Let’s take a look at the key steps to form a winning CX approach:
        </p>

        <h3 className="text-48 text-600 mt-2 mb-1">
          Author
        </h3>
        <ImageComp style={{ objectFit: "cover" }}
          src={"/Resource/image-12.webp"} height={"230px"} width={"230px"} />
        <h3 className="text-36 text-600">
          Name
        </h3>
        <h4 className="text-28 text-400">
          Designation
        </h4>
      </div>

      <hr />

      <div className="others">
        <h3 className="text-48 text-600  mb-2">
          You May Also Like
        </h3>
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
              </div>
            </div>)
          })}
        </div>
      </div>

    </div>
  );
};



export default ResourceBlogPage;
