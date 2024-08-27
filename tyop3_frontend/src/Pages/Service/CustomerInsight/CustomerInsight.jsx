import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss";
import KnowMoreBtn from '@/Components/KnowMoreBtn';
import ImageComp from '@/Components/Image';


const CustomerInsight_Page = () => {
    return (
        <div className='CustomerInsight_Page'>
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <h1 className="text-84 text-600">Customer Insights</h1>
                <h3 className="text-42 text-600">
                    Valuable & actionable insights driven by research, behaviour science, data science, applied psychology, anthropology and business intelligence.
                </h3>
                <p className='text-28'>
                    Take informed decisions backed by customer insights, to transform your customer experience at all touch points. </p>
            </div>

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
                            </li><li>
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
            <div className="getInTouch">
                <h3 className='text-60 heading'>
                    Want to know more?
                </h3>
                <KnowMoreBtn label='Get in touch' />
            </div>
            <div className="card-section">
                <h1 className='text-84 text-700 heading '>
                    Dive Deeper
                </h1>
                <div className="card">
                    <div className="img">
                        <ImageComp
                            loading="lazy"
                            src={"/Home/blue-ball.webp"}
                            alt={"/Home/blue-ball.webp"}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className="text-container">
                        <p className="text-36 text-600">Name of the work or project goes here in 2 lines</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <ImageComp
                            loading="lazy"
                            src={"/Home/blue-ball.webp"}
                            alt={"/Home/blue-ball.webp"}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className="text-container">
                        <p className="text-36 text-600">Name of the work or project goes here in 2 lines</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInsight_Page
