import ImageComp from '@/Components/Image'
import React from 'react'
import "./style.scss";

const MedtrackerPage = () => {
    return (
        <div className='MedtrackerPage'>
            <div className="section-1">
                <h1 className="text-84 text-600"> MedTracker</h1>
                <h2 className="text-60 text-600">Content Production</h2>
            </div>
            <div className="description">
                <p className='time'>
                    MedTracker - 2020
                </p>
                <p className='txt'>
                    Medtech startup's mobile app helps people to manage their medicine intake and health.
                    To present the mobile app and its value to its target audience, MedTracker asked us to
                    produce a demo video.
                </p>
            </div>
            <div className="hero-image">
                <iframe width="1154" height="649" src="https://www.youtube.com/embed/0DBgKh8EBIg" title="MedTracker AD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="centered">
                <h3 style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    Product demo videos need not be screen-shot based. That is
                    why we decided to take the storytelling route to present
                    MedTracker app demo.
                </h3>
            </div>
        </div>
    )
}

export default MedtrackerPage