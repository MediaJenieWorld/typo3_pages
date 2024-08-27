import React from 'react'
import "./style.scss";
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const Happilo_Page = () => {
    return (
        <div className='Happilo_Page'>
            <ProjectHead
                title="Happilo"
                category="Campaign Services"
                date="Happilo - Social Media 2017"
                description="Being a new brand, we knew, Happilo had to leverage social media to grow. We setup
            the social media channels, produced content and managed the pages to build the social
            community." />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Happilo/Happilo (6).webp"} />
                <GsapImage transitionStyle={{ x: "100%" }} height={"auto"} width={"100%"} src={"/Work/Happilo/Happilo (9).webp"} />
                <GsapImage transitionStyle={{ x: "-100%" }} height={"auto"} width={"100%"} src={"/Work/Happilo/Happilo (10).webp"} />
            </div>
            <div className="grid">
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Happilo/Happilo (11).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Happilo/Happilo (12).webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Happilo/Happilo (13).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Happilo/Happilo (14).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="hero-image">
                <GsapImage transitionStyle={{ x: "100%" }} height={"auto"} width={"100%"} src={"/Work/Happilo/Happilo (15).webp"} />
                <GsapImage transitionStyle={{ x: "-100%" }} height={"auto"} width={"100%"} src={"/Work/Happilo/Happilo (16).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Happilo/Happilo (17).webp"} />
            </div>
            <div className="grid">
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Happilo/Happilo (18).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Happilo/Happilo (19).webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Happilo/Happilo (20).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "-100%" }} src={"/Work/Happilo/Happilo (21).webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Happilo/Happilo (22).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Happilo/Happilo (23).webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Happilo/Happilo (24).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Happilo/Happilo (25).webp"} height={"auto"} width={"auto"} />
            </div>

            <div className="grid col-3">
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Happilo/Happilo (1).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "-100%" }} src={"/Work/Happilo/Happilo (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Happilo/Happilo (3).webp"} height={"auto"} width={"auto"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Happilo_Page