import React from 'react'
import "./style.scss";
import LineSplitter from '@/Components/Gsap/Line_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';
import GsapImage from '@/Components/Gsap/Image_Ani';

const Ashok_Maanay_Page = () => {
    return (
        <div className='Ashok_Maanay_Page'>
            <ProjectHead
                title="Ashok Maanay"
                category="Content Production"
                date="Photography Production + Design 2014 - 16"
                description="One of the finest fashion designers, Ashok Maanay is known for his exquisite collection
apt for royals. For Bangalore Fashion Week, where he was presenting the collections,
we were tasked to produce a series of imagery and brochures. We worked with talents
like Ravi Awana - Gladrags Winner, and Raiza Wilson - Actress, to create some stunning visuals to present his outfits in all the grandeur."
            />
            <div style={{ paddingTop: "0px" }} className="description">
                <div className='txt p text-28'>
                    <LineSplitter>
                        - Concept
                    </LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>- Casting</LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>
                        - Pre Production
                    </LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>
                        - Art Direction
                    </LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>- Production</LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>
                        - Post Production
                    </LineSplitter>
                </div>
                <div className='txt p text-28'>
                    <LineSplitter>
                        - Design
                    </LineSplitter>
                </div>
            </div>
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Ashok_Maanay/cover.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Ashok_Maanay/am (1).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Ashok_Maanay/am (2).webp"} />
            </div>
            <div className="grid col-3">
                <GsapImage height={"auto"} width={"100%"} src={"/Work/Ashok_Maanay/am (3).webp"} />
                <GsapImage transitionStyle={{ y: "-100%" }} src={"/Work/Ashok_Maanay/am (4).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Ashok_Maanay/am (5).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="grid col-3">
                <GsapImage src={"/Work/Ashok_Maanay/am (6).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Ashok_Maanay/am (7).webp"} height={"auto"} width={"auto"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Ashok_Maanay_Page