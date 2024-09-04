import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss";
import KnowMoreBtn from '@/Components/KnowMoreBtn';
import ServiceHead from '../Common/ServiceHead';
import GetServices from '../Common/GetServices';
const designServices = [
    {
        title: "Brand Design Services",
        description: "Translate your branding strategy into high-impact designs to create or reshape your brand. From developing strategy to taking your brand design from idea to your audience, we take total-ownership of project, while working closely with you.",
        technologies: "Brand Identity | Package | Environment | Brand Materials"
    },
    {
        title: "Experience design",
        description: "Make your brand experience memorable - online or offline - for your customers, through experience design services. Backed by our user research, insights, science and design practices, we design digital and physical experiences for your brand.",
        technologies: "UX & UI | Digital Experience | Retail"
    },
    {
        title: "Communication Design",
        description: "We merge design, content, communication strategy and audience insights to craft effective and unique communication materials for your brand.",
        technologies: "Presentations & Decks | Brochures & Catalogues | Emailer | Social Media | Print"
    },
    {
        title: "Advertising & Marketing",
        description: "We strategize, design and produce highly creative & effective advertising and marketing assets for your brand.",
        technologies: "Ad Creatives - print/ digital | Campaigns | Copywriting"
    }
];



const Design_Page = () => {
    return (
        <div className='Design_Page Common_Style'>
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <ServiceHead
                    heading="Design"
                    subHeading="Insight-driven design services, to keep your brand stand out & outperform the competition."
                    para="We blend customer insights, behaviour science, applied psychology, anthropology and design thinking with various design practices."
                />
            </div>
            <GetServices services={designServices} />
            <div className="getInTouch">
                <h3 className='text-60 heading'>
                    Want to know more?
                </h3>
                <KnowMoreBtn link={"/contact"} label='Get in touch' />
            </div>
        </div>
    )
}

export default Design_Page
