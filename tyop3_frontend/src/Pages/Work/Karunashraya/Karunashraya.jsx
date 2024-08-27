import React from 'react'
import "./style.scss";
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';

const Karunashraya_Page = () => {
    return (
        <div className='Karunashraya_Page'>
            <ProjectHead
                title="Karunashraya"
                category="Campaign Services"
                date="Karunashraya - 2022"
                description="Bangalore Hospice Trust runs Karunashraya - the largest Palliative care hospital that offers Free care for all." />
            <div className="grid">
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/karunashraya/karunashraya (3).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/karunashraya/karunashraya (4).webp"} height={"auto"} width={"auto"} />
            </div>

            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/karunashraya/karunashraya (5).webp"} />
            </div>
            <div className="grid">
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/karunashraya/karunashraya (1).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/karunashraya/karunashraya (2).webp"} height={"auto"} width={"auto"} />
            </div>
        </div>
    )
}

export default Karunashraya_Page