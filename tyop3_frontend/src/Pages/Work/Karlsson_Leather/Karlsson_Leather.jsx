import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import LineSplitter from '@/Components/Gsap/Line_Ani';

const Gloria_Coffee_Page = () => {
    return (
        <div className='Gloria_Coffee_Page'>
            <ProjectHead
                title="Gloria Jeans Coffee"
                category="Digital"
                date="Gloria Jeans Coffee - India 2021-22"
                description="Website design & development."
            />
            <div className="grid float left">
                <GsapImage src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} transitionStyle={{ y: "100%" }} width={"auto"} />
            </div>

            <div className="grid float right">
                <GsapImage src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} width={"auto"} />
            </div>

            <div className="description">
                <div style={{ justifySelf: "center", gridColumn: "span 3" }} className='time padding py-0 text-42 text-600'>
                    <LineSplitter>
                        For Gloria Jeans Coffee - India launch -, we designed &
                        developed the website.
                    </LineSplitter>
                </div>
                <p className='txt  py-0'></p>
            </div>
            <div className="grid">
                <GsapImage src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="hero-image">
                <GsapImage height={"auto"} width={"100%"} src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} />
            </div>
        </div>
    )
}

export default Gloria_Coffee_Page