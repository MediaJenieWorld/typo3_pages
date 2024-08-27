import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss";
import KnowMoreBtn from '@/Components/KnowMoreBtn';
import ImageComp from '@/Components/Image';


const Consulting_Page = () => {
    return (
        <div className='Consulting_Page'>
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <h1 className="text-84 text-600">Strategy & Consulting</h1>
                <h3 className="text-42 text-600">
                    We develop strategies based on insights driven by data and science.
                </h3>
                <p className='text-28'>
                    Our methodology combines data science, behaviour science, applied psychology, business intelligence & design thinking, to gain insights into what influences human behaviour & resulting experiences.
                </p>
            </div>

            <div className="section-3 mt">
                <div className="text-center-wrapper">
                    <h2 className="text-72 text-600">
                        Customer Experience Consulting
                    </h2>
                    <p className="text-28">
                        When products & services are commoditised, you need to focus on Customer Experience (CX) to differentiate and grow your brand. Having a well designed strategy for your CX require expertise in user behaviour, data science, applied psychology, anthropology and design thinking. We help innovative companies and brands in delivering better Customer Experience using our consulting and strategy services.
                    </p>
                </div>
            </div>
            <div className="section-3">
                <div className="text-center-wrapper">
                    <h2 className="text-72 text-600">
                        Branding & Creative Consulting
                    </h2>
                    <p className="text-28">
                        To have a partner who can take ownership of your branding & creative strategy lets you focus on your other core areas. By blending research, data science, behaviour insights, customer behaviour and design thinking, we develop branding & creative strategy to achieve your business goals.
                    </p>
                </div>
            </div>
            <div className="section-3 mb">
                <div className="text-center-wrapper">
                    <h2 className="text-72 text-600">
                        Digital Marketing Consulting
                    </h2>
                    <p className="text-28">
                        Digital marketing is beyond “tactics” like social media ads. To have a successful digital marketing campaign, you need a long-term strategy that looks at the marketing & branding at a holistic level. Our digital marketing strategy service brings together different practices like customer-insights, digital solutions, design, content-strategy and managed services.
                    </p>
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

export default Consulting_Page