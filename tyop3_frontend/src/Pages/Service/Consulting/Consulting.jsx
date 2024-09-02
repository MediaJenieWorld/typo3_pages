import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss";
import KnowMoreBtn from '@/Components/KnowMoreBtn';
import ServiceHead from '../Common/ServiceHead';
import GetServices from '../Common/GetServices';

const consultingServices = [
    {
        title: "Customer Experience Consulting",
        description: "When products & services are commoditised, you need to focus on Customer Experience (CX) to differentiate and grow your brand. Having a well designed strategy for your CX require expertise in user behaviour, data science, applied psychology, anthropology and design thinking. We help innovative companies and brands in delivering better Customer Experience using our consulting and strategy services."
    },
    {
        title: "Branding & Creative Consulting",
        description: "To have a partner who can take ownership of your branding & creative strategy lets you focus on your other core areas. By blending research, data science, behaviour insights, customer behaviour and design thinking, we develop branding & creative strategy to achieve your business goals."
    },
    {
        title: "Digital Marketing Consulting",
        description: "Digital marketing is beyond “tactics” like social media ads. To have a successful digital marketing campaign, you need a long-term strategy that looks at the marketing & branding at a holistic level. Our digital marketing strategy service brings together different practices like customer-insights, digital solutions, design, content-strategy and managed services."
    }
];


const Consulting_Page = () => {
    return (
        <div className='Consulting_Page'>
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <ServiceHead
                    heading="Strategy & Consulting"
                    subHeading="We develop strategies based on insights driven by data and science."
                    para=" Our methodology combines data science, behaviour science, applied psychology, business intelligence & design thinking, to gain insights into what influences human behaviour & resulting experiences."
                />
            </div>
            <GetServices services={consultingServices} />
            <div className="getInTouch">
                <h3 className='text-60 heading'>
                    Want to know more?
                </h3>
                <KnowMoreBtn link={"/contact"} label='Get in touch' />
            </div>
        </div>
    )
}

export default Consulting_Page