import React from 'react'
import "./style.scss";
import ImageComp from '@/Components/Image';

const Safe_Tree_Page = () => {
    return (
        <div className='Safe_Tree_Page'>
            <div className="section-1">
                <h1 className="text-84 text-600">SafeTree</h1>
                <h2 className="text-60 text-600">Digital</h2>
            </div>
            <div className="description">
                <p className='time'>Web Experience Design & Development 2022</p>
                <p className='txt text-28'>
                    UX & UI Design. Website design & development. Built on Vue-JS + Strapi Headless
                    CMS. API Integrations.
                </p>
            </div>
            <div className="grid">
                <ImageComp src={"/Work/Safe_Tree/tree (2).webp"} height={"auto"} width={"auto"} />
                <ImageComp src={"/Work/Safe_Tree/tree (1).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="centered">
                <h3 style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    How do you stand-out in a crowded insurance-sales market?
                    How do you make it easier for the user to find the right
                    insurance? Do we reduce the number of pages? Many
                    questions we had when SafeTree asked us to design the digital
                    experience.
                </h3>
            </div>
            <div className="hero-image">
                <ImageComp height={"auto"} width={"100%"} src={"/Work/Safe_Tree/tree (1).gif"} />
            </div>
            <div className="hero-image">
                <ImageComp height={"auto"} width={"100%"} src={"/Work/Safe_Tree/tree (2).gif"} />
            </div>
            <div className="description">
                <h3 style={{ justifySelf: "center" }} className='time text-60 text-600'>
                    The Approach
                </h3>
                <p className='txt'>
                    Our UX design approach was to simplify the process for the user in
                    finding the right product or solution, through a visually guided
                    step-by-step approach. We reduced the number of "inputs" required.
                    Instead of traditional "dropdown" selection and other methods, we
                    went for a clickable-icon-driven experience.
                </p>
            </div>
            <div style={{ marginBottom: "5rem" }} className="description py-0">
                <p style={{ justifySelf: "center", gridColumn: "span 2" }} className='txt text-60 text-600'></p>
                <h3 className='time text-60 text-600'>
                    And it worked.
                </h3>
            </div>
        </div>
    )
}

export default Safe_Tree_Page