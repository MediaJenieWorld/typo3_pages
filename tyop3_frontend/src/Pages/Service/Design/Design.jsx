import CoverPageImage from '@/Components/CoverPage'
import React from 'react'
import "./style.scss";
import KnowMoreBtn from '@/Components/KnowMoreBtn';
import ImageComp from '@/Components/Image';


const Design_Page = () => {
    return (
        <div className='Design_Page'>
            <CoverPageImage src={"/assets/Service/service-hero.webp"} />
            <div className="section-1">
                <h1 className="text-84 text-600">Design</h1>
                <h3 className="text-42 text-600">
                    Insight-driven design services, to keep your brand stand out & outperform the competition.
                </h3>
                <p className='text-28'>
                    We blend customer insights, behaviour science, applied psychology, anthropology and design thinking with various design practices.
                </p>
            </div>

            <div className="section-3 mt ">
                <div className="text-center-wrapper">
                    <div className="top">
                        <h2 className="text-72 text-600">
                            Brand Design Services
                        </h2>
                        <p className='text-28'>
                            Translate your branding strategy into high-impact designs to create or reshape your brand. From developing strategy to taking your brand design from idea to your audience, we take total-ownership of project, while working closely with you.
                        </p>
                    </div>
                    <div className="bottom">
                        <h2 className="text-32 text-600 pt">
                            Brand Identity | Package | Environment | Brand Materials
                        </h2>
                    </div>
                </div>
            </div>

            <div className="section-3 ">
                <div className="text-center-wrapper">
                    <div className="top">
                        <h2 className="text-72 text-600">
                            Experience design
                        </h2>
                        <p className='text-28'>
                            Make your brand experience memorable - online or offline - for your customers, through experience design services. Backed by our user research, insights, science and design practices, we design digital and physical experiences for your brand.
                        </p>
                    </div>
                    <div className="bottom">
                        <h2 className="text-32 text-600 pt">
                            UX & UI | Digital Experience | Retail
                        </h2>
                    </div>
                </div>
            </div>


            <div className="section-3 ">
                <div className="text-center-wrapper">
                    <div className="top">
                        <h2 className="text-72 text-600">
                            Communication Design
                        </h2>
                        <p className='text-28'>
                            We merge design, content, communication strategy and audience insights to craft effective and unique communication materials for your brand.
                        </p>
                    </div>
                    <div className="bottom">
                        <h2 className="text-32 text-600 pt">
                            Presentations & Decks | Brochures & Catalogues | Emailer | Social Media | Print
                        </h2>
                    </div>
                </div>
            </div>

            <div className="section-3 mb">
                <div className="text-center-wrapper">
                    <div className="top">
                        <h2 className="text-72 text-600">
                            Advertising & Marketing
                        </h2>
                        <p className='text-28'>
                            We strategize, design and produce highly creative & effective advertising and marketing assets for your brand.   </p>
                    </div>
                    <div className="bottom">
                        <h2 className="text-32 text-600 pt">
                            Ad Creatives - print/ digital | Campaigns | Copywriting
                        </h2>
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

export default Design_Page
