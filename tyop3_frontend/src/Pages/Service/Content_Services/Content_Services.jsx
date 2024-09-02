import CoverPageImage from "@/Components/CoverPage";
import React from "react";
import "../Common/style.scss";
import KnowMoreBtn from "@/Components/KnowMoreBtn";
import ServiceHead from "../Common/ServiceHead";
import GetServices from "../Common/GetServices";

const services = [
    {
        title: "Content Strategy",
        description: `Our content strategy service takes your business goals & objectives and align with your
user’s needs. It helps in planning, clarifying and connecting the content-tactics to
meaningful purpose of your brand.`,
        technologies: `Content Audit & Inventory | Challenges & Gaps
Objectives & Goals | User Research | Creation Plan & Tactics
Ownership & Governance | Standards & Guidelines
Creative Guidelines | Production Plan | CMS/ System | Maintenance`,
    },
    {
        title: "Content Production",
        description: `We help you translate your content strategy, creation plan & content requirement into highly engaging and impactful content, through professional content production services.`
    },
    {
        title: "Copywriting",
        description: `Crisp. Clear. Emotionally Engaging. Persuasive. To the point.
Copywriting for your marketing & communication needs.`
    },
    {
        title: "Photography",
        description: `Visual storytelling for your brand.`,
        technologies: "Creative Photography | Product Photography | People Photography"
    },
    {
        title: "Videos",
        description: `Professional video production by a crew with film & advertising background.`,
        technologies: `Ad films | Brand films | Corporate Films | Documentary | Product Demo Videos
People & Success Story Videos | Motion Graphics Videos`
    },
]
const Content_Services_Page = () => {
    return (
        <div className="Content_Services_Page Common_Style">
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <ServiceHead
                    heading="Content Services"
                    subHeading="Clear, impactful & creative content"
                    para="We design & produce clear, impactful and creative content that is engaging."
                />
            </div>
            <GetServices services={services} />
            <div className="getInTouch">
                <h3 className="text-60 heading">Want to know more?</h3>
                <KnowMoreBtn link={"/contact"} label="Get in touch" />
            </div>
        </div>
    );
};

export default Content_Services_Page;
