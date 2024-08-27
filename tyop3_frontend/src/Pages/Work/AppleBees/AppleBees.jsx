import React from 'react'
import "./style.scss";
import LineSplitter from '@/Components/Gsap/Line_Ani';
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const AppleBeesPage = () => {

    return (
        <div className='AppleBeesPage'>
            <ProjectHead
                title="AppleBees"
                category="Digital"
                date="AppleBees - India 2022"
                description="Web Solutions.We designed & developed the website for AppleBees' India launch."
            />
            <div className="grid">
                <GsapImage src={"/Work/AppleBees/appleBees (1).webp"} height={"auto"} transitionStyle={{ y: "100%" }} width={"auto"} />
                <GsapImage src={"/Work/AppleBees/appleBees (2).jpg"} height={"auto"} transitionStyle={{ y: "100%" }} width={"auto"} />
            </div>
            <div className="hero-image">
                <GsapImage height={"auto"} width={"100%"} transitionStyle={{ y: "100%" }} src={"/Work/AppleBees/appleBees (1).jpg"} />
            </div>
            <div className="centered">
                <div style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    <LineSplitter>
                        When the website is for an international brand like AppleBees, it
                        has to look as appealing & delicious as those yummy dishes
                        they serve! We have tried our best to do justice, even though
                        those lipsmacking food-pics were truly testing our focus!
                    </LineSplitter>
                </div>
            </div>
            <div className="description">
                <div style={{ justifySelf: "center" }} className='time text-60 text-600'>
                    <LineSplitter>
                        Crafted with
                        love.</LineSplitter></div>
                <div className='p txt padding py-0'>
                    <LineSplitter>
                        We wanted to capture the honest and down-to-earth side of the brand. Nothing can be better than capturing the real people behind this terrific coffee. The images are not touched-up, but true and grounded. Just like these people and the coffee they grow.
                    </LineSplitter>
                </div>
            </div>
            <ProjectFooter />
        </div>
    )
}

export default AppleBeesPage