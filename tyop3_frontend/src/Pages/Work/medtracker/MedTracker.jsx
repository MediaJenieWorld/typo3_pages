import React from 'react'
import "./style.scss";
import LineSplitter from '@/Components/Gsap/Line_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import Gsap_iframe from '@/Components/Gsap/Iframe';

const MedtrackerPage = () => {
    return (
        <div className='MedtrackerPage'>
            <ProjectHead
                title="MedTracker"
                category="Content Production"
                date="MedTracker - 2020"
                description="Medtech startup's mobile app helps people to manage their medicine intake and health. To present the mobile app and its value to its target audience, MedTracker asked us to produce a demo video."
            />
            <div className="hero-image">
                <Gsap_iframe
                    src="https://www.youtube.com/embed/0DBgKh8EBIg"
                    title="MedTracker AD"
                    transitionStyle={{ y: "100%" }}
                />
            </div>
            <div className="centered">
                <div style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    <LineSplitter>
                        Product demo videos need not be screen-shot based. That is
                        why we decided to take the storytelling route to present
                        MedTracker app demo.
                    </LineSplitter>
                </div>
            </div>
        </div>
    )
}

export default MedtrackerPage