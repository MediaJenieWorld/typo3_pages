import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const Toyoda_Brochure_Page = () => {
    return (
        <div className='Toyoda_Brochure_Page'>
            <ProjectHead
                title="Toyoda Brochure"
                category="Design"
                date="Toyoda - 2022"
                description="For TGSIN (Toyoda Gosei South India), we designed and produced the marketing brochure."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Toyoda/cover.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Toyoda/toyoda (1).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Toyoda/toyoda (2).webp"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Toyoda_Brochure_Page