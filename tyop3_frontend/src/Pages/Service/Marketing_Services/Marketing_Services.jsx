import CoverPageImage from "@/Components/CoverPage";
import React from "react";
import "../Common/style.scss";
import KnowMoreBtn from "@/Components/KnowMoreBtn";
import GetServices from "../Common/GetServices";

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
                <ServiceHead
                    heading="Marketing Services"
                    subHeading="Managed services in marketing"
                    para="Build awareness, generate leads, increase sales and achieve more…" />
            </div>
            <GetServices services={services} />
            <div className="getInTouch">
                <h3 className="text-60 heading">Want to know more?</h3>
                <KnowMoreBtn link={"/contact"} label="Get in touch" />
            </div>
        </div>
    );
};

export default Marketing_Services_Page;
