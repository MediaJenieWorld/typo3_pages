import TestimonialsSlider from "@/Components/Testomonials/Testimonial_Slider";
import "./style.scss";
import CoverPageImage from "@/Components/CoverPage";
import ScrollToTop from "@/Components/ScrollTop";

const fakeDes =
  "Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text.";
const fakeImgSrc = "/assets/sofa-4.jpg";

const fakeData = [
  {
    heading: "Consulting",
    description: fakeDes,
    imgSrc: "/assets/Service/image-10.webp",
    link: "no-link",
    description: `
    Research & Intelligence
    User Research
    Analytics
    Audience Insights
    Strategy
    Customer Experience
    Digital Media
    Branding & Communication
    Creative`,
  },
  {
    heading: "Design",
    description: `
Branding
Communication
Marketing`,
    imgSrc: "/assets/Service/image-9.webp",
    link: "no-link",
  },
  {
    heading: "Digital",
    description: `
UX Design
UI Design
Web > Websites | E-commerce | Web Apps
Mobile > Mobile Apps
Digital Media Services> Social Media Management | Digital Marketing | SEO
Marketing & Brand Campaigns
Tech-solutions
Cyber security
CRM
Content Management
Automation
Martech`,
    imgSrc: "/assets/Service/image-11.webp",
    link: "no-link",
  },
  {
    heading: "CX Services",
    description: fakeDes,
    imgSrc: "/assets/Service/image-10.webp",
    link: "no-link",
    description: `
CX Audit
RKYC
NPS/CSAT/CES
Content Experience
Framework
Tech Solutions
Conversational AI`,
  },
  {
    heading: "Production",
    description: `
Content & Copy Writing
Illustrations
Photography
Videos & Films
Audio
Print`,
    imgSrc: "/assets/Service/image-9.webp",
    link: "no-link",
  },
  {
    heading: `Marketing & Managed
Services`,
    description: `
Campaigns
Digital Marketing
SEO
CX Services for NPS/ CSAT/ CES/ Others
Customer Feedback Management
eXperience Process Enhancement
eXperience Review Framework
& More…`,
    imgSrc: "/assets/Service/image-11.webp",
    link: "no-link",
  },
];

const story = `Our Capabilities.
Our Services`;

const storyDes = `Description text paragraph can go here in 200 words. This can be multi-line text. Description text
paragraph can go here in 200 words. This can be multi-line text. `;

const ServicePage = () => {
  return (
    <div className="Service">
      <ScrollToTop />
      <CoverPageImage src={"/assets/Service/service-hero.webp"} />
      <div className="section-1">
        <pre className="text-84 text-600">{story}</pre>
        <pre className="text-28 text-600">
          {`We bring your brand & customers closer through great
Customer Experiences built on insights, strategy, design,
digital, content & managed services.

We help you:

- Go C2B (Customer to Business)
- “Really Know Your Customer” (RKYC), and listen to them.
- With data & insights driven strategies
- Business-process improvement.
- Design & implement CX solutions.
- Support you with managed services.`}
        </pre>
      </div>
      {/* <Container data={containerTwoContent()} /> */}
      <div className="section-2">
        <img loading="lazy" src="/assets/Service/main-hero.webp" alt="Banner" />
      </div>
      <div className="section-3">
        <h4 className="text-32 text-600">What we do?</h4>
        <h4 className="text-32 text-600">We bring your brand & customers closer through great customer experiences</h4>
        
        <pre className="text-60 text-600">
          {`Our services are spread across
5 areas & practices`}
        </pre>
      </div>
      <div className="section-4">
        {fakeData.map((val, i) => {
          return (
            <div className="card" key={i}>
              <ServiceProductCard data={val} />
            </div>
          );
        })}
      </div>
      <Container data={containerOneContent()} />

      <div className="testimonials">
        <h3
          style={{ color: "var(--purple)" }}
          className="text-32 text-700 text-container"
        >
          Testimonial
        </h3>
        <TestimonialsSlider data={testimonialData()}  />
      </div>
    </div>
  );
};

function ServiceProductCard({ data }) {
  const {
    heading = "Service heading",
    description = "description",
    link = "link",
    imgSrc = "imgSrc",
  } = data;

  return (
    <>
      <div className="left">
        <img
          loading="lazy"
          height={360}
          width={360}
          src={imgSrc || fakeImgSrc}
          alt={heading + " image"}
        />
      </div>
      <div className="right">
        <div className="top">
          <h3 className="text-60 text-600">{heading}</h3>
          <pre style={{ color: "#191B1D" }} className="text-500 text-28">
            {description || fakeDes}
          </pre>
        </div>
        <KnowMoreBtn btnClass="purple" lable="View Services" />
      </div>
    </>
  );
}

const Container = ({ data }) => {
  const { heading, descriptionHeading = "", description } = data;
  return (
    <div className="two-text-sections">
      <div className="left">
        <h2 className="text-42 text-700">{heading}</h2>
      </div>
      <div className="right">
        {descriptionHeading && (
          <pre className="text-32 text-600">{descriptionHeading}</pre>
        )}
        {description && (
          <pre className="description text-32 text-600">{description}</pre>
        )}
      </div>
    </div>
  );
};

function containerOneContent() {
  return {
    heading: ` Focus on the Customer-Experience-Journey of your brand.
        Not "Sales Journey".`,
    descriptionHeading: `We believe sales & growth of a brand are outcomes of great
customer experiences.
 
Is your brand offering a special experience to your
customers? How does your digital, marketing,
communication & content fit into that “great experience” of
your brand?
 
Are you measuring it? Monitoring it? Refining it?
 
Let's start with your users. Let's help you transform your
brand's customer experience.`,
  };
}

function containerTwoContent() {
  return {
    heading: `Transforming your brand & sales through CX solutions.`,
    descriptionHeading: `We bring your brand & customers closer through great
Customer Experiences built on insights, strategy, design,
digital, content & managed services.`,
    description: `We help you:
- Go C2B (Customer to Business)
- “Really Know Your Customer” (RKYC), and listen to them.
- With data & insights driven strategies
- Business-process improvement.
- Design & implement CX solutions.
- Support you with managed services.`,
  };
}

function KnowMoreBtn({ btnClass = "", link, lable = "KNOW MORE" }) {
  return (
    <button className={btnClass + " button"}>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
}


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
export default ServicePage;
