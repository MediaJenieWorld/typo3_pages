import React from 'react'
import "./style.scss";
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';
import LineSplitter from '@/Components/Gsap/Line_Ani';
import ProjectFooter from '@/Components/ProjectFooter.jsx/ProjectFooter';

const Safe_Tree_Page = () => {
    return (
        <div className='Safe_Tree_Page'>
            <ProjectHead
                title="SafeTree"
                category="Digital"
                date="Web Experience Design & Development 2022"
                description="UX & UI Design. Website design & development. Built on Vue-JS + Strapi Headless
                    CMS. API Integrations."
            />
            <div className="grid">
                <GsapImage src={"/Work/Safe_Tree/tree (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/Safe_Tree/tree (1).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="centered">
                <div style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    <LineSplitter>
                        How do you stand-out in a crowded insurance-sales market?
                        How do you make it easier for the user to find the right
                        insurance? Do we reduce the number of pages? Many
                        questions we had when SafeTree asked us to design the digital
                        experience.
                    </LineSplitter>
                </div>
            </div>
            <div className="hero-image">
                <GsapImage transitionStyle={{ x: "100%" }} height={"auto"} width={"100%"} src={"/Work/Safe_Tree/tree (1).gif"} />
            </div>
            <div className="hero-image">
                <GsapImage transitionStyle={{ x: "-100%" }} height={"auto"} width={"100%"} src={"/Work/Safe_Tree/tree (2).gif"} />
            </div>
            <div className="description">
                <div style={{ justifySelf: "center" }} className='time text-60 text-600'>
                    <LineSplitter>
                        The Approach
                    </LineSplitter>
                </div>
                <div className='p txt'>
                    <LineSplitter>
                        Our UX design approach was to simplify the process for the user in
                        finding the right product or solution, through a visually guided
                        step-by-step approach. We reduced the number of "inputs" required.
                        Instead of traditional "dropdown" selection and other methods, we
                        went for a clickable-icon-driven experience.
                    </LineSplitter>
                </div>
            </div>
            <div style={{ marginBottom: "5rem" }} className="description py-0">
                <p style={{ justifySelf: "center", gridColumn: "span 2" }} className='txt text-60 text-600'></p>
                <div className='time text-60 text-600'>
                    <LineSplitter>
                        And it worked.
                    </LineSplitter>
                </div>
            </div>
            <ProjectFooter />
        </div>
    )
}

export default Safe_Tree_Page