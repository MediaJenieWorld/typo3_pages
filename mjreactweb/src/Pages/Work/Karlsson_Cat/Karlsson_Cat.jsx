import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const Karlsson_Catalogue_Page = () => {
    return (
        <div className='Karlsson_Catalogue_Page'>
            <ProjectHead
                title="Karlsson Catalogue"
                category="Design"
                date="Karlsson - 2022"
                description="Luxury bespoke leather furniture brand, Karlsson wanted a product catalogue to present its premium products."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Karlsson_Cat/cover.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Karlsson_Cat/karlsson (1).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Karlsson_Cat/karlsson (2).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Karlsson_Cat/karlsson (3).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Karlsson_Cat/karlsson (4).webp"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Karlsson_Catalogue_Page