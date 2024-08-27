import React from 'react'
import "./style.scss";
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const VE_Campaign_Page = () => {
    return (
        <div className='VE_Campaign_Page'>
            <ProjectHead
                title="Vaishnavi Estate Coffee"
                category="Campaign Services"
                date="Vaishnavi - 2022"
                description="We set up and managed the social media channels of Vaishnavi Estate Coffee. As part
of this service, we produced Instagram visuals, reels, shorts and other interesting
content." />
            <div className="grid">
                <GsapImage src={"/Work/VEC_Campaign/VC (11).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/VEC_Campaign/VC (2).webp"} height={"auto"} width={"auto"} />

                <GsapImage src={"/Work/VEC_Campaign/VC (12).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/VEC_Campaign/VC (13).webp"} height={"auto"} width={"auto"} />

                <GsapImage src={"/Work/VEC_Campaign/VC (14).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/VEC_Campaign/VC (15).webp"} height={"auto"} width={"auto"} />

                <GsapImage src={"/Work/VEC_Campaign/VC (16).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/VEC_Campaign/VC (1).jpg"} height={"auto"} width={"auto"} />

                <GsapImage src={"/Work/VEC_Campaign/VC (2).jpg"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/VEC_Campaign/VC (1).webp"} height={"auto"} width={"auto"} />

                <GsapImage src={"/Work/VEC_Campaign/VC (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/VEC_Campaign/VC (3).webp"} height={"auto"} width={"auto"} />

                <GsapImage src={"/Work/VEC_Campaign/VC (4).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/VEC_Campaign/VC (5).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="hero-image">
                <GsapImage transitionStyle={{ x: "100%" }} height={"auto"} width={"100%"} src={"/Work/VEC_Campaign/VC (6).webp"} />
            </div>
            <div className="grid col-3">
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/VEC_Campaign/VC (11).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "-100%" }} src={"/Work/VEC_Campaign/VC (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/VEC_Campaign/VC (11).webp"} height={"auto"} width={"auto"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default VE_Campaign_Page