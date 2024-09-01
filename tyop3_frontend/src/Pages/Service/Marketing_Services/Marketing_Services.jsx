import CoverPageImage from "@/Components/CoverPage";
import React from "react";
import "../Common/style.scss";
import KnowMoreBtn from "@/Components/KnowMoreBtn";

const services = [
    {
        title: "Digital Marketing",
        description: `Our digital marketing practice uses a holistic & user-centric approach. From detailed
        user research, competition landscape, strategy development, infrastructure setup, to
        design & production of assets, setting up campaigns and managing them, we provide
        360-degree support in execution.`,
        technologies: `User Research & Insights | Competition Analysis | Communication Plan
Strategy | Tactics & Action Plan
`,
    },
    {
        title: "Infrastructure/ Marktech",
        description: `Digital Assets - ads/creatives/videos/landingpages/ blogs/ content etc
Campaign design, setup & management`,
        technologies: "Google PPC | Social Media | Emailing | Native | Whatsapp | Others"
    },
    {
        title: "SEO",
        description: `By creating high-value content rich web-pages, we drive inbound traffic from organic
search results, and higher rankings.`,
        technologies: "Search Strategy | Keyword Analysis | Content Development | On-page/offpage Optimization"

    },
    {
        title: "SMM",
        description: `Reachout to your audience - no matter of who they are or where they are - through
smart- social media marketing. We blend user-research, customer insights, marketing
strategy, content strategy, communication and campaign design to deliver Social Media
Marketing that delivers right ROI.
`,
        technologies: "Meta | Twitter | LinkedIn | YouTube | Others"
    }
]
const Marketing_Services_Page = () => {
    return (
        <div className="Marketing_Services_Page Common_Style">
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <h1 className="text-84 text-600">Marketing Services</h1>
                <h3 className="text-42 text-600">
                    Managed services in marketing
                </h3>
                <p className="text-28">
                    Build awareness, generate leads, increase sales and achieve more…
                </p>
            </div>

            {services.map((service, index) => (
                <div className={`${index == 0 && "mt"} ${index == services.length - 1 && "mb"}  section-3`} key={index}>
                    <div className="text-center-wrapper">
                        <h2 className="text-72 text-600">{service.title}</h2>
                        <p className="text-28">{service.description}</p>
                        {service.technologies && (
                            <p className="mt text-28 text-600">{service.technologies}</p>
                        )}
                    </div>
                </div>
            ))}
            <div className="getInTouch">
                <h3 className="text-60 heading">Want to know more?</h3>
                <KnowMoreBtn link={"/contact"} label="Get in touch" />
            </div>
        </div>
    );
};

export default Marketing_Services_Page;
