import React from 'react'
import "./style.scss";
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';

const Vivekananda_Yoga_Page = () => {
    return (
        <div className='Vivekananda_Yoga_Page'>
            <ProjectHead
                title="Vivekananda Yoga"
                category="Campaign Services"
                date="Vivekananda - 2022"
                description="Leading yoga & wellness brand from Bangalore wanted to promote yoga courses across
India. We planned, designed and executed the digital media campaign." />
            <div className="grid">
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Vivekananda_Yoga/cover.webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Vivekananda_Yoga/yoga (3).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/Vivekananda_Yoga/yoga (1).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Vivekananda_Yoga/yoga (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Vivekananda_Yoga/yoga (4).webp"} height={"auto"} width={"auto"} />

            </div>
        </div>
    )
}

export default Vivekananda_Yoga_Page