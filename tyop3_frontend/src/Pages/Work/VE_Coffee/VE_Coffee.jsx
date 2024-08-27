import React from 'react'
import "./style.scss";
import LineSplitter from '@/Components/Gsap/Line_Ani';
import Gsap_iframe from '@/Components/Gsap/Iframe';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const VE_Coffee = () => {
    return (
        <div className='VE_Coffee'>
            <ProjectHead
                title="VE Coffee Videos"
                category="Content Production"
                date=" Video Production 2021-22"
                description="When Vaishnavi Estate with its 100 years of legacy, launched its coffee brand, we had to make sure it is perceived and accepted across various audience segments. Nothing better than some short video content."
            />
            <div style={{ paddingTop: "0px" }} className="description">
                <div className='txt p text-28'>
                    <LineSplitter>
                        - Concept
                    </LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>- Production</LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>
                        - Post Production
                    </LineSplitter>
                </div>
            </div>
            <div className="grid">
                <Gsap_iframe src={"https://www.youtube.com/embed/LUYcOxAWago"} title={"VC Caramel Iced Coffee"} />
                <Gsap_iframe src={"https://www.youtube.com/embed/8vVHkBEBzOM"} title={"VC Cocoa Coffee"} />
                <Gsap_iframe src={"https://www.youtube.com/embed/edP20bGPyWE"} title={"Experience Pure Coffee"} />
            </div>

            <div className="centered">
                <div style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    <LineSplitter>
                        There was a myth that "pure coffee" is boring and only good for
                        the traditional filter coffee. We produced a series of shorts and
                        reels on interesting coffee-recipes to counter this.
                    </LineSplitter>
                </div>
            </div>
            <div className="grid">
                <Gsap_iframe transitionStyle={{ x: "100%" }} src={"https://www.youtube.com/embed/N8Nvj1Qx36c"} title={"VC Caramel Iced Coffee"} />
                <Gsap_iframe transitionStyle={{ x: "100%" }} src={"https://www.youtube.com/embed/gfht3TibOQs"} title={"VC Cocoa Coffee"} />
                <Gsap_iframe transitionStyle={{ x: "100%" }} src={"https://www.youtube.com/embed/ELDQ_wUOxDM"} title={"Experience Pure Coffee"} />
            </div>

            <div className="description">
                <div style={{ justifySelf: "center" }} className='time text-60 text-600'>
                    <LineSplitter>Result?</LineSplitter>
                </div>
                <div className='txt p'>
                    <LineSplitter>
                        Some awesome recipe videos where Vaishnavi Estate Coffee powder is transforming into yummy coffee!
                    </LineSplitter>
                </div>
            </div>
            <ProjectFooter />
        </div>
    )
}

export default VE_Coffee