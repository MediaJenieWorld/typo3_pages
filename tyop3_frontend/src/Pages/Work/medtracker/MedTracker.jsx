import ImageComp from '@/Components/Image'
import React from 'react'
import "./style.scss";

const Medtracker = () => {
    return (
        <div className='Medtracker'>
            <div className="section-1">
                <h1 className="text-84 text-600"> MedTrac&shy;ker UI</h1>
                <h2 className="text-60 text-600">
                    Digital
                </h2>
            </div>
            <div className="description">
                <p className='time'>
                    UX & UI - Mobile App 2020
                </p>
                <p className='txt'>
                    MedTracker approached us to create a great experience for their mobile app. We started
                    with the users and designed an intuitive UX design and UI design.
                </p>
            </div>
            <div className="hero-image">
                <ImageComp height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack.webp"} />
                <ImageComp height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack (3).webp"} />
                <ImageComp height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack (4).webp"} />
            </div>
            <div className="padding">
                <p>UX & UI for MedTracker was a challenge. We had to make this easy-to-use for elderly users as well as care-givers. And when there are many medications to be managed for a single user, the UI must be intuitive to avoid confusions.</p>
            </div>
            <div className="hero-image">
                <ImageComp height={"auto"} width={"100%"} src={"/Work/MedTracker/medtrack (1).webp"} />
            </div>

        </div>
    )
}

export default Medtracker