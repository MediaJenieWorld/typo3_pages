import CoverPageImage from "@/Components/CoverPage";
import React from "react";
import "../Common/style.scss";
import KnowMoreBtn from "@/Components/KnowMoreBtn";

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
                <h1 className="text-84 text-600">Content Services</h1>
                <h3 className="text-42 text-600">
                    Clear, impactful & creative content
                </h3>
                <p className="text-28">
                    We design & produce clear, impactful and creative content that is engaging.
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

export default Content_Services_Page;
