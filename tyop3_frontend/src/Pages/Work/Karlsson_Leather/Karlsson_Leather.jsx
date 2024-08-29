import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import LineSplitter from '@/Components/Gsap/Line_Ani';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const Karlsson_Leather_Page = () => {
    return (
        <div className='Karlsson_Leather_Page'>
            <ProjectHead
                title="Karlsson Leather"
                category="Digital"
                date="Karlsson - 2022"
                description="Karlsson Leather is a luxury bespoke leather furniture brand. We designed and developed websites for Indian and UAE markets."
            />
            <div className="grid float left">
                <GsapImage src={"/Work/Karlsson_Leather/kl (1).jpg"} height={"auto"} transitionStyle={{ x: "100%" }} width={"auto"} />
            </div>

            <div className="grid float right">
                <GsapImage src={"/Work/Karlsson_Leather/kl (5).webp"} height={"auto"} width={"auto"} />
            </div>

            <div className="description">
                <div style={{ justifySelf: "center", gridColumn: "span 3" }} className='time padding py-0 text-42 text-600'>
                    <LineSplitter>
                        Luxury bespoke leather furniture brand deserves a bespoke website. So we crafted one that captures the brand's essence.
                    </LineSplitter>
                </div>
                <p className='txt  py-0'></p>
            </div>
            <div className="grid">
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Karlsson_Leather/kl (1).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Karlsson_Leather/kl (2).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Karlsson_Leather/kl (4).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Karlsson_Leather/kl (3).webp"} />
            </div>
            <div className="description">
                <div className='time'></div>
                <div style={{ color: "rgba(25, 27, 29, 0.6)" }} className='txt text-28 py-0'>
                    <LineSplitter>
                        Easy to navigate. User-friendly. Clean. Classy. Few words to describe the website we made for Karlsson.
                    </LineSplitter>
                </div>
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Karlsson_Leather_Page