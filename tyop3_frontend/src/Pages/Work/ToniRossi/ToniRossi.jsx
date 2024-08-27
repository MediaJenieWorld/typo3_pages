import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const ToniRossie_page = () => {
    return (
        <div className='ToniRossie_page'>
            <ProjectHead
                title="ToniRossi Catalogue"
                category="Design"
                date="ToniRossi - 2022"
                description="Fast-growing leather footwear brand."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/tonirossi/cover.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/tonirossi/tonirossi (2).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/tonirossi/tonirossi (3).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/tonirossi/tonirossi (1).webp"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default ToniRossie_page