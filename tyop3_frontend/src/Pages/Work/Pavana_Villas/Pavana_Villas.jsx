import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const Pavana_Villas_Page = () => {
    return (
        <div className='Pavana_Villas_Page'>
            <ProjectHead
                title="Pavana Valley Villas"
                category="Design"
                date="Pavana Valley - 2018"
                description="Communication design for luxury villa project brand from Lonavla, Maharashtra."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Pavana_Valley/cover.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Pavana_Valley/Villas (1).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Pavana_Valley/Villas (2).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Pavana_Valley/Villas (3).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Pavana_Valley/Villas (4).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Pavana_Valley/Villas (5).webp"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Pavana_Villas_Page