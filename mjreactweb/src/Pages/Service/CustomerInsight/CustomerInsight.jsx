import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss";
import KnowMoreBtn from '@/Components/KnowMoreBtn';
import ServiceHead from '../Common/ServiceHead';
import { StaggeredLine } from '@/Components/Gsap/LineIntoWords';


const CustomerInsight_Page = () => {
    return (
        <div className='CustomerInsight_Page Common_Style'>
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <ServiceHead
                    heading="Customer Insights"
                    subHeading="Valuable & actionable insights driven by research, behaviour science, data science, applied psychology, anthropology and business intelligence."
                    para="Take informed decisions backed by customer insights, to transform your customer experience at all touch points."
                />
            </div>
            <StaggeredLine duration={2} layerCSS_Style={{ opacity: 0 }} transitionStyle={{ opacity: 1 }} initX='100%' initY='0%'>
                <div className="section-3 mt mb">
                    <div className="text-center-wrapper">
                        <div className="top">
                            <h2 className="text-72 text-600">
                                Services & Capabilities
                            </h2>
                            <ul className='text-28'>
                                <li>
                                    Research - User / Market / Product
                                </li>
                                <li>
                                    Customer Insights - Market/ Behaviour
                                </li>
                                <li>
                                    Data Science
                                </li>
                                <li>
                                    Behaviour Science
                                </li>
                                <li>
                                    Applied Psychology
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <h2 className="text-48 text-600">
                                Applications
                            </h2>
                            <p className='text-28'>
                                Marketing | Sales | Communication | Product Design | User Experience | Customer Retention
                            </p>
                        </div>
                    </div>
                </div>
            </StaggeredLine>

            <div className="getInTouch">
                <h3 className='text-60 heading'>
                    Want to know more?
                </h3>
                <KnowMoreBtn link={"/contact"} label='Get in touch' />
            </div>
        </div>
    )
}

export default CustomerInsight_Page
