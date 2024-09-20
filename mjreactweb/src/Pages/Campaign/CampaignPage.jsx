import JigglyButton from "@/Components/JigglyButton/JigglyButton"
import "./styles.scss"
import { useEffect, useState } from "react"
import Connect_Form from "@/Components/Models/Form/Connect_Form"
import AOS from 'aos';
import 'aos/dist/aos.css';

const CampaignPage = () => {

    const [modelState, setModelState] = useState(false)

    useEffect(() => {
        AOS.init()
        if (document) {
            const link = document.createElement("link")
            link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            link.rel = "stylesheet"
            document.head.appendChild(link)
        }
    }, [])
    function stateToggler() {
        setModelState(true)
    }

    return (
        <div className="CampaignPage">
            <Connect_Form modelState={modelState} setModelState={setModelState} />
            <section className="banner pt-8 md:pt-10 lg:pt-12 relative z-10 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-10 lg:px-16 xl:px-30 2xl:px-40">
                    <div className="bnr-row flex flex-wrap">
                        <div className="bnr-lft-col w-full md:w-1/2 " data-aos-delay="800" data-aos="fade-right">
                            <div className="unsetBtn ">
                                CX Services</div>
                            <h1 className="text-3xl md:text-5xl md:leading-[1.2] font-semibold my-7">
                                Losing Customers?<br />
                                High CAC?<br />
                                Low Conversions?<br />
                                Low Satisfaction?
                            </h1>
                            <p className="text-base md:text-lg font-medium leading-7 mb-6">We help you solve these critical problems, through customer experience (CX) transformation.</p>
                            < JigglyButton onClick={stateToggler} />
                        </div>
                        <div className="bnr-right-col w-full md:w-1/2 " data-aos-delay="800" data-aos="fade-left">
                            <div className="bnr-img">
                                <img data-sizes="auto"
                                    className="w-100 lazyautosizes ls-is-cached lazyloaded" alt="man making rating icons" sizes="576px"
                                    src="/assets/Campaign/lady-with-sad-face.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counting-sec py-16 md-py-24 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-10 lg:px-16 xl:px-30 2xl:px-40">
                    <div className=" flex flex-wrap lg:flex-nowrap lg:justify-center gap-4 lg:gap-x-8 lg:gap-y-0 lg:items-center md:mx-4">
                        <div className="yellow-card-sngl flex flex-col justify-center text-center items-center bg-secondary px-4 md:px-0 h-40 md:w-72 md:h-56
                         aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <span className="text-3xl md:text-4xl mb-4">
                                <img data-sizes="auto" data-src="/assets/Campaign/reasons-for-churn.webp" data-srcset="/assets/Campaign/reasons-for-churn.webp 300w,
                      /assets/Campaign/reasons-for-churn.webp 600w,
                      /assets/Campaign/reasons-for-churn.webp 900w" className="w-12 lazyautosizes ls-is-cached lazyloaded" alt="smile icons" sizes="48px"
                                    srcSet="/assets/Campaign/reasons-for-churn.webp 300w,
                      /assets/Campaign/reasons-for-churn.webp 600w,
                      /assets/Campaign/reasons-for-churn.webp 900w" src="/assets/Campaign/reasons-for-churn.webp" />
                            </span>
                            <div className="text-2xl md:text-5xl font-semibold leading-13">150 + </div>
                            <div className="font-manrope text-sm font-medium leading-4 md:leading-8 text-center mt-2.5">Reasons for Churn</div>
                        </div>
                        <div className="yellow-card-sngl flex flex-col justify-center text-center items-center bg-secondary px-4 md:px-0 h-40 md:w-72 md:h-56 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
                            <span className="text-3xl md:text-4xl mb-4">
                                <img data-sizes="auto" data-src="/assets/Campaign/increase-in-cac-in-ecom.webp" data-srcset="/assets/Campaign/increase-in-cac-in-ecom.webp 300w,
                      /assets/Campaign/increase-in-cac-in-ecom.webp 600w,
                      /assets/Campaign/increase-in-cac-in-ecom.webp 900w" className="w-12 lazyautosizes ls-is-cached lazyloaded" alt="up bars icons" sizes="48px" srcSet="/assets/Campaign/increase-in-cac-in-ecom.webp 300w,
                      /assets/Campaign/increase-in-cac-in-ecom.webp 600w,
                      /assets/Campaign/increase-in-cac-in-ecom.webp 900w" src="/assets/Campaign/increase-in-cac-in-ecom.webp" />
                            </span>
                            <div className="text-2xl md:text-5xl font-semibold leading-13">200% +</div>
                            <div className="font-manrope text-sm font-medium leading-4 md:leading-8 text-center mt-2.5">Increase in CAC in ecom</div>
                        </div>
                        <div className="yellow-card-sngl flex flex-col justify-center text-center items-center bg-secondary px-4 md:px-0 h-40 md:w-72 md:h-56 aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000">
                            <span className="text-3xl md:text-4xl mb-4">
                                <img data-sizes="auto" data-src="/assets/Campaign/leads-do-not-convert.webp" data-srcset="/assets/Campaign/leads-do-not-convert.webp 300w,
                      /assets/Campaign/leads-do-not-convert.webp 600w,
                      /assets/Campaign/leads-do-not-convert.webp 900w" className="w-12 lazyautosizes ls-is-cached lazyloaded" alt="refresh icons" sizes="48px" srcSet="/assets/Campaign/leads-do-not-convert.webp 300w,
                      /assets/Campaign/leads-do-not-convert.webp 600w,
                      /assets/Campaign/leads-do-not-convert.webp 900w" src="/assets/Campaign/leads-do-not-convert.webp" />
                            </span>
                            <div className="text-2xl md:text-5xl font-semibold leading-13">75%+ </div>
                            <div className="font-manrope text-sm font-medium leading-4 md:leading-8 text-center mt-2.5">Leads do not convert</div>
                        </div>
                        <div className="yellow-card-sngl flex flex-col justify-center text-center items-center bg-secondary px-4 md:px-0 h-40 md:w-72 md:h-56 aos-init aos-animate" data-aos="fade-up" data-aos-duration="2500">
                            <span className="text-3xl md:text-4xl mb-1">
                                <img data-sizes="auto" data-src="/assets/Campaign/unhappy-customers-complain.webp" data-srcset="/assets/Campaign/unhappy-customers-complain.webp 300w,
                      /assets/Campaign/unhappy-customers-complain.webp 600w,
                      /assets/Campaign/unhappy-customers-complain.webp 900w" className="w-12 lazyautosizes ls-is-cached lazyloaded" alt="writing hand icons" sizes="48px" srcSet="/assets/Campaign/unhappy-customers-complain.webp 300w,
                      /assets/Campaign/unhappy-customers-complain.webp 600w,
                      /assets/Campaign/unhappy-customers-complain.webp 900w" src="/assets/Campaign/unhappy-customers-complain.webp" />
                            </span>
                            <div className="text-2xl md:text-5xl font-semibold leading-13">1 out of 26</div>
                            <div className="font-manrope text-sm font-medium leading-4 md:leading-8 text-center mt-1">Unhappy customers complain</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:py-32 py-8 bg-gradient-primary text-white relative overflow-hidden">
                <img data-sizes="auto" data-src="/assets/Campaign/white-curve-sec.webp" data-srcset="/assets/Campaign/white-curve-sec.webp 300w,
          /assets/Campaign/white-curve-sec.webp 600w,
          /assets/Campaign/white-curve-sec.webp 900w" className="absolute translate-x-center -top-1 md:top-0 w-40 h-8 left-1/2 -translate-x-2/4 invert-0 brightness-200 lazyautosizes ls-is-cached lazyloaded" alt="curve icon" sizes="160px" srcSet="/assets/Campaign/white-curve-sec.webp 300w,
          /assets/Campaign/white-curve-sec.webp 600w,
          /assets/Campaign/white-curve-sec.webp 900w" src="/assets/Campaign/white-curve-sec.webp" />
                <div className="container mx-auto px-4 sm:px-10 lg:px-16 xl:px-30 2xl:px-40">
                    <div className="column flex-none text-center lg:py-0 py-10">
                        <h2 className="fs-4 leading-tight md:leading-11 font-semibold mb-10 text-black aos-init" data-aos="fade-up">To identify the root causes of your customer churn, high CAC, low conversion and low satisfaction, and solve them. For this, we use our own CX framework, behaviour psychology, data analytics, and proprietary processes.</h2>
                    </div>
                    <div className="lg:flex lg:mt-6 lg:mb-0 mt-4 mb-10">
                        <div className="lg:w-5/12 flex justify-center aos-init" data-aos="fade-right">
                            <img data-sizes="auto" data-src="/assets/Campaign/hands-drops-sand.webp" className="w-100 lazyautosizes ls-is-cached lazyloaded" alt="hands drops sand" sizes="410px" src="/assets/Campaign/hands-drops-sand.webp" />
                        </div>
                        <div className="lg:column flex-none w-full lg:w-7/12 lg:ml-14 aos-init" data-aos="fade-left">
                            <div className="flex-none text-center lg:text-left">
                                <p className="text-lg md:text-xl mb-5 mt-2 lg:mt-6 font-manrope font-medium leading-7 text-black">Reduce Customer Churn</p>
                                <h3 className="fs-4 medium-fs-3 leading-tight md:leading-11 font-semibold mb-6 lg:max-w-xl text-black">Stop losing customers!</h3>
                                <p className="text-lg mb-4 lg:max-w-xl font-manrope font-medium leading-7 text-black">Did you know<br /> <span className="text-xl font-bold">There are more than 150 reasons for customer churn?</span></p>
                                <p className="text-lg mb-10 lg:max-w-xl font-manrope font-medium leading-7 text-black">We help you uncover the real reasons for customers leaving you, and design programs to fix it.</p>
                                < JigglyButton onClick={stateToggler} btnClass="  " />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:text-left lg:mt-16 lg:mb-0 mt-10 mb-10">
                        <div className="column w-full lg:w-6/12 text-center lg:text-left aos-init" data-aos="fade-right">
                            <div className="w-full">
                                <img data-sizes="auto" data-src="/assets/Campaign/burning-dollors.webp"
                                    src="/assets/Campaign/burning-dollors.webp" data-srcset="/assets/Campaign/burning-dollors.webp 300w,
                /assets/Campaign/burning-dollors.webp 600w,
                /assets/Campaign/burning-dollors.webp 900w" className="lazyload w-100 inline-block lg:hidden landing-offer-mobile md_m-0 -ml-6" alt="burning dollors in hand" />
                            </div>
                            <p className="text-lg md:text-xl mb-5 mt-2 lg:mt-6 font-manrope font-medium leading-7 text-black">Reduce Your CAC</p>
                            <h3 className="fs-4 medium-fs-3 leading-tight md:leading-11 font-semibold mb-6 lg:max-w-xl text-black">Still paying a high price for new customers?</h3>
                            <p className="text-lg mb-4 lg:max-w-xl font-manrope font-medium leading-7 text-black">Customer Acquisition Cost is increasing every year, across all industries. While the cost is important, you need to see if it is sustainable, considering the retention rate, LTV and other factors.</p>
                            <p className="text-lg mb-10 lg:max-w-xl font-manrope font-medium leading-7 text-black">We help you identify the root causes of high CAC, and reduce it to make it sustainable for your business.</p>
                            < JigglyButton onClick={stateToggler} btnClass="  " />
                        </div>
                        <div className="lg:column lg:flex lg:justify-center lg:w-6/12 hidden aos-init" data-aos="fade-left">
                            <img data-sizes="auto" data-src="/assets/Campaign/burning-dollors.webp" src="/assets/Campaign/burning-dollors.webp" data-srcset="/assets/Campaign/burning-dollors.webp 300w,
                /assets/Campaign/burning-dollors.webp 600w,
                /assets/Campaign/burning-dollors.webp 900w" className="lazyload w-100 hidden lg:inline-block" alt="burning dollors in hand" />
                        </div>
                    </div>
                    <div className="text-center"></div>
                    <div className="lg:flex justify-center lg:mt-16 lg:mb-0 mt-10 mb-10">
                        <div className="flex justify-center items-center w-full lg:w-6/12 aos-init" data-aos="fade-right">
                            <img data-sizes="auto" data-src="/assets/Campaign/boxes.webp" src="/assets/Campaign/boxes.webp" data-srcset="/assets/Campaign/boxes.webp 300w,
                /assets/Campaign/boxes.webp 600w,
                /assets/Campaign/boxes.webp 900w" className="lazyload w-100" alt="boxes in row" />
                        </div>
                        <div className="column flex-none w-full lg:w-6/12 lg:pl-24 text-center lg:text-left aos-init" data-aos="fade-left">
                            <p className="text-lg md:text-xl mb-5 mt-2 lg:mt-6 font-manrope font-medium leading-7 text-black">Increase your Sales Conversions</p>
                            <h3 className="fs-4 medium-fs-3 leading-tight md:leading-11 font-semibold mb-6 lg:max-w-xl text-black">Don't blame your sales team, for low conversions!</h3>
                            <p className="text-lg mb-4 lg:max-w-xl font-manrope font-medium leading-7 text-black">It is something else! <br /><span className="text-xl font-bold">Did you know more than 15 touch-points directly influence your sales- conversions?</span></p>
                            <p className="text-lg mb-10 lg:max-w-xl font-manrope font-medium leading-7 text-black">We help you uncover the gaps in conversion-journey, and correct them to improve your conversions.</p>
                            < JigglyButton onClick={stateToggler} btnClass="  " />
                        </div>
                    </div>
                    <div className="flex lg:text-left lg:mt-16 lg:mb-0 mt-10 mb-10">
                        <div className="column w-full lg:w-6/12 text-center lg:text-left aos-init" data-aos="fade-right">
                            <div className="w-full">
                                <img data-sizes="auto" data-src="/assets/Campaign/mother-and-daughter.webp" src="/assets/Campaign/mother-and-daughter.webp" data-srcset="/assets/Campaign/mother-and-daughter.webp 300w,
                /assets/Campaign/mother-and-daughter.webp 600w,
                /assets/Campaign/mother-and-daughter.webp 900w" className="lazyload w-100 inline-block lg:hidden landing-payment-mobile" alt="mother and daughter ratings" />
                            </div>
                            <p className="text-lg md:text-xl mb-5 mt-2 lg:mt-6 font-manrope font-medium leading-7 text-black">Increase Customer Satisfaction</p>
                            <h3 className="fs-4 medium-fs-3 leading-tight md:leading-11 font-semibold mb-6 lg:max-w-xl text-black">Reduce customer dissatisfaction. Increase loyalty.</h3>
                            <p className="text-lg mb-4 lg:max-w-xl font-manrope font-medium leading-7 text-black">More than half of your customers can switch to a competition after a single bad experience.</p>
                            <p className="text-lg mb-10 lg:max-w-xl font-manrope font-medium leading-7 text-black">Using data analytics and behaviour insights, we help you identify the real causes of low customer satisfaction. We help you fix it by improving touch-point experiences.</p>
                            < JigglyButton onClick={stateToggler} btnClass="  " />
                        </div>
                        <div className="lg:column lg:flex lg:justify-center lg:w-6/12 hidden ml-10 aos-init" data-aos="fade-left">
                            <img data-sizes="auto" data-src="/assets/Campaign/mother-and-daughter.webp" src="/assets/Campaign/mother-and-daughter.webp" data-srcset="/assets/Campaign/mother-and-daughter.webp 300w,
                /assets/Campaign/mother-and-daughter.webp 600w,
                /assets/Campaign/mother-and-daughter.webp 900w" className="lazyload w-100 hidden lg:inline-flex landing-payment-image" alt="mother and daughter ratings" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-28 bg-gradient-primary relative overflow-hidden">
                <img data-sizes="auto" data-src="/assets/Campaign/circle-left.webp"
                    src="/assets/Campaign/circle-left.webp" data-srcset="/assets/Campaign/circle-left.webp 300w,
            /assets/Campaign/circle-left.webp 600w,
            /assets/Campaign/circle-left.webp 900w" className="lazyload w-56 z-10 hidden md:block absolute left-0 top-0" alt="bg circle left" />
                <div className="container mx-auto px-4 sm:px-10 lg:px-16 xl:px-30 2xl:px-40">
                    <h2 className="fs-4 text-center leading-tight md:leading-11 font-semibold mb-10 md:w-2/3 mx-auto text-black aos-init" data-aos="fade-up">What Makes MediaJenie Your Ideal CX Partner?</h2>
                    <div className="lg:flex gap-x-7 text-center">
                        <div className="w-full lg:w-1/4 md:mt-4 bg-white rounded-md pt-9 pb-7 px-6 shadow-xsmall  mt-7 md:mt-0 aos-init" data-aos="fade-up" data-aos-duration="500">
                            <img data-sizes="auto" data-src="/assets/Campaign/goal.webp"
                                src="/assets/Campaign/goal.webp"
                                data-srcset="/assets/Campaign/goal.webp 300w,
                /assets/Campaign/goal.webp 600w,
                /assets/Campaign/goal.webp 900w" className="lazyload mx-auto mb-7 w-14 h-14" alt="customer goal icon" />
                            <p className="text-xl font-medium leading-8 text-black">Customer Focused</p>
                            <p className="text-base leading-6 font-medium mt-4">Our analysis and solutions are focused on your customer-experience.</p>
                        </div>
                        <div className="w-full lg:w-1/4 md:mt-4 bg-white rounded-md pt-9 pb-7 px-6 shadow-xsmall  mt-7 md:mt-0 aos-init" data-aos="fade-up" data-aos-duration="1000">
                            <img data-sizes="auto" data-src="/assets/Campaign/monitor.webp"
                                src="/assets/Campaign/monitor.webp"
                                data-srcset="/assets/Campaign/monitor.webp 300w,
                /assets/Campaign/monitor.webp 600w,
                /assets/Campaign/monitor.webp 900w" className="lazyload mx-auto mb-7 w-14 h-14" alt="data screen icon" />
                            <p className="text-xl font-medium leading-8 text-black">Data Driven</p>
                            <p className="text-base leading-6 font-medium mt-4">We take data analytics seriously. Your data, our data, other data...Lets analyse.</p>
                        </div>
                        <div className="w-full lg:w-1/4 md:mt-4 bg-white rounded-md pt-9 pb-7 px-6 shadow-xsmall  mt-7 md:mt-0 aos-init" data-aos="fade-up" data-aos-duration="1500">
                            <img data-sizes="auto" data-src="/assets/Campaign/insight.webp" src="/assets/Campaign/insight.webp" data-srcset="/assets/Campaign/insight.webp 300w,
                /assets/Campaign/insight.webp 600w,
                /assets/Campaign/insight.webp 900w" className="lazyload mx-auto mb-7 w-14 h-14" alt="men data icon" />
                            <p className="text-xl font-medium leading-8 text-black">Psychological Insights</p>
                            <p className="text-base leading-6 font-medium mt-4">Most decisions by human beings are emotional. So psychological insights are critical.</p>
                        </div>
                        <div className="w-full lg:w-1/4 md:mt-4 bg-white rounded-md pt-9 pb-7 px-6 shadow-xsmall  mt-7 md:mt-0 aos-init" data-aos="fade-up" data-aos-duration="2000">
                            <img data-sizes="auto" data-src="/assets/Campaign/rating.webp" src="/assets/Campaign/rating.webp" data-srcset="/assets/Campaign/rating.webp 300w,
                /assets/Campaign/rating.webp 600w,
                /assets/Campaign/rating.webp 900w" className="lazyload mx-auto mb-7 w-14 h-14" alt="men rating icon" />
                            <p className="text-xl font-medium leading-8 text-black">15+ Years</p>
                            <p className="text-base leading-6 font-medium mt-4">Reliable. Proven track record. High-referral from clients. Highly rated.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-16">
                        < JigglyButton onClick={stateToggler} btnClass="  " />
                    </div>
                </div>
                <img data-sizes="auto" data-src="/assets/Campaign/circle-right.webp" src="/assets/Campaign/circle-right.webp" data-srcset="/assets/Campaign/circle-right.webp 300w,
          /assets/Campaign/circle-right.webp 600w,
          /assets/Campaign/circle-right.webp 900w" className="lazyload w-56 z-10 hidden md:block absolute right-0 bottom-0" alt="bg circle icon" />
            </section>
            <footer className="footer-wrap py-10 md:py-16 lg:py-20 relative z-10 overflow-hidden bg-black">
                <div className="container mx-auto px-4 sm:px-10 lg:px-16 xl:px-30 2xl:px-40">
                    <div className="footer-top max-w-screen-lg mx-auto  pb-8 md:pb-16">
                        <h4 className="text-lg md:text-4xl font-semibold md:font-medium text-white text-center mb-6">Feedback management services to track, monitor and measure customer experience.</h4>
                        <p className="text-base md:text-lg text-white text-center">Management of NPS, CES, CSAT and Other Surveys.</p>
                    </div>
                    {/* <div className="footer-bottom max-w-screen-lg mx-auto pt-8 md:pt-16">
                        <div className="footer-logo text-center mb-6">
                            <a href="https://www.mediajenie.com/" className="inline-block w-28 mx-auto h-12 md:h-max">
                                <img data-sizes="auto" data-src="/assets/Campaign/mj-logo-white.webp" src="/assets/Campaign/mj-logo-white.webp" data-srcset="/assets/Campaign/mj-logo-white.webp 300w,
                  /assets/Campaign/mj-logo-white.webp 600w,
                  /assets/Campaign/mj-logo-white.webp 900w" className="lazyload w-full max-h-full object-cover" alt="mediajenie footer logo" />
                            </a>
                        </div>
                        <p className="text-sm :text-base text-slate-400 text-center">All copyrights to MediaJenie, Bangalore, India</p>
                    </div> */}
                </div>
            </footer>


        </div>
    )
}

export default CampaignPage