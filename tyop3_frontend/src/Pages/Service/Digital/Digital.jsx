import CoverPageImage from "@/Components/CoverPage";
import React from "react";
import "../Common/style.scss";
import KnowMoreBtn from "@/Components/KnowMoreBtn";

const services = [
    {
        title: "Digital Experience",
        description: ` Having a great digital-experience touch point starts with your users.
We understand your business goals & objectives and design the digital experience
solution that address them. We bring together user-research, human behaviour and user
interaction design to create highly intuitive & user friendly digital assets. From a simple
website to generate leads to advanced websites with virtual realty and AI driven
services, we create what is right for your business.`,
        technologies:
            " Business Analysis | User Research | Consulting | Digital Experience Design",
    },
    {
        title: "Websites",
        description:
            "Super-fast, secure, adaptive to any screens, user-friendly and content rich. We build websites that are easier to use. Let it be a static single-pager or a complex large website driven by CMS and integrated with different systems.",
        technologies: "WordPress | Drupal | Hugo | Strapi | ReactJS | VueJS",
    },
    {
        title: "E-commerce",
        description:
            "We provide end-to-end support in building e-commerce websites. From user-experience design to coding, product photography & content, payment gateway integration, CRM/other tool integrations, we will support you with the right e-com solution.",
        technologies:
            "Shopify | WooCommerce | Custom Product Catalogue Photography | Product Demo Videos | SEO Optimized Product Content",
    },
    {
        title: "VR/AR Websites",
        description:
            "Take your customers to an exciting immersive virtual experience with our VR/AR websites. We build websites where users can enter 3D / AR experiences directly on the browser, without any new app.",
        technologies: "3D Web Experience | AR | VR",
    },
    {
        title: "Web Applications",
        description:
            "We design & build web applications and web products, which are scalable & easy to use.",
        technologies:
            "System design & architecture | UX & UI | Development ReactJS | NodeJS | Python | Php | MongoDB | Postgres | AWS | Google Firebase",
    },
    {
        title: "AI Smart Search",
        description:
            "Is our website search unable to find the right information? Still getting “no results” found, when you can see your category or product right there? Move to our AI Smart Search. A search similar to Google, powered by AI. Get a super-fast, smart and accurate search option in your website, to deliver quicker and accurate results to your visitors.",
    },
    {
        title: "AI Conversational Chatbots",
        description: `Gone are the days when chatbots give you fixed options to click on and interact.
Today, your user wants to “converse” with your bot/ assistant on the website.
Our AI conversational chatbot can hande natural language queries from your users, and
assist them with the right information and tasks.`,
    },
    {
        title: "Mobile Apps",
        description: `Take your app from idea to market with our mobile-app development services. From
UX-UI to prototyping and complete design/ development, we can build hybrid apps for
ios & android.`,
    },
    {
        title: "Digital Products & Platforms",
        description: `To deliver a great customer experience, you need the right systems in place. We help in
implementing digital products & platforms to manage different processes & data.`,
        technologies: `Customer Data Platform (CDP) | Digital Asset Management (DAM) | CRM | CMS
Marketing Automation | Self-help Portals
AI & ML | Robotic Process Automation (RPA)`,
    },
];

const Digital_Page = () => {
    return (
        <div className="Digital_Page Common_Style">
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <h1 className="text-84 text-600">Digital</h1>
                <h3 className="text-42 text-600">
                    Make your digital experience, memorable, efficient & result-oriented.
                </h3>
                <p className="text-28">
                    We bring user experience design, behaviour insights, design,
                    technology and coding to create the right digital solution for your
                    brand.{" "}
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

export default Digital_Page;
