import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import LineSplitter from '@/Components/Gsap/Line_Ani';

const MedtrackerUiPage = () => {
    return (
        <div className='MedtrackerUiPage'>

            <ProjectHead
                title="MedTrac&shy;ker UI"
                category="Digital"
                date="UX & UI - Mobile App 2020"
                description="MedTracker approached us to create a great experience for their mobile app. We started
                    with the users and designed an intuitive UX design and UI design."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack (3).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack (4).webp"} />
            </div>
            <div className="padding">
                <div className='p'>
                    <LineSplitter>
                        UX & UI for MedTracker was a challenge. We had to make this easy-to-use for elderly users as well as care-givers. And when there are many medications to be managed for a single user, the UI must be intuitive to avoid confusions.
                    </LineSplitter>
                </div>
            </div>
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack (1).webp"} />
            </div>

        </div>
    )
}

export default MedtrackerUiPage