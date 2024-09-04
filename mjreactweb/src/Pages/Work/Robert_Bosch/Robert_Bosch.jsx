import React from 'react'
import "./style.scss";
import LineSplitter from '@/Components/Gsap/Line_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';
import GsapImage from '@/Components/Gsap/Image_Ani';

const Robert_Bosch_Page = () => {
    return (
        <div className='Robert_Bosch_Page'>
            <ProjectHead
                title="Robert Bosch"
                category="Content Production"
                date="Photography / Imagery - 2010"
                description="Robert Bosch - Bangalore, wanted to produce exclusive people visuals for its
communication and website, featuring its employees. We managed the end-to-end
production, from planning to final visuals."    />
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
            <div className="grid">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Robert_Bosch/bosch (13).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Robert_Bosch/bosch (1).webp"} />
            </div>
            <div className="grid col-3">
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (9).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (7).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (12).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="grid col-3">
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (3).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (10).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="grid col-3">
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (4).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (5).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (6).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="grid col-3">
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (7).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (8).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Robert_Bosch/bosch (11).webp"} height={"auto"} width={"auto"} />
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Robert_Bosch_Page