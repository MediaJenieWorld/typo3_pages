import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';
import LineSplitter from '@/Components/Gsap/Line_Ani';

const VEC_Photography = () => {
    return (
        <div className='VEC_Photography'>
            <ProjectHead
                title="VEC Photography"
                category="Content Production"
                date="Vaishnavi Estate Coffee - 2022"
                description="Vaishnavi Estate Coffee (VEC) is a top coffee grower from Coorg, India. They have been
                    growing coffee since 1928 in their estates. When VEC wanted to launch their own brand
                    of fresh-coffee powder, it was a given that we need to produce some great visuals that
                    capture the real side of the brand."
            />
            <div className="grid">
                <GsapImage src={"/Work/VEC_Photography/vc-photo-03.webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/VEC_Photography/vc-photo-02.jpg"} height={"auto"} width={"auto"} />
            </div>
            <div className="description">
                <div className="time"></div>
                <div className='p txt padding py-0'>
                    <LineSplitter>
                        A legacy of around 100 years, 3 generations of coffee growers... Vaishnavi Estate is a dream-come-true for a coffee aficionado. They grow sustainable, shade-grown coffee, that is roasted & ground fresh, before packing.
                    </LineSplitter>
                </div>
            </div>
            <div className="hero-image">
                <GsapImage height={"auto"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-01.webp"} />
                <GsapImage transitionStyle={{ x: "100%" }} height={"auto"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-04.webp"} />
            </div>
            <div className="centered">
                <div style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    <LineSplitter>
                        The human side of sustainable, single-origin &
                        shade-grown coffee of Vaishnavi Estate.
                    </LineSplitter>
                </div>
            </div>

            <div className="description">
                <div className="time">
                    <GsapImage transitionStyle={{ y: "-100%" }} style={{ objectFit: "cover" }} height={"100%"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-05.jpg"} />
                </div>
                <div className="txt">
                    <GsapImage transitionStyle={{ y: "100%" }} style={{ objectFit: "cover" }} height={"100%"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-06.webp"} />
                </div>
            </div>
            <div className="description">
                <div className="time"></div>
                <div className='p txt padding py-0'>
                    <LineSplitter>
                        We wanted to capture the honest and down-to-earth side of the brand. Nothing can be better than capturing the real people behind this terrific coffee. The images are not touched-up, but true and grounded. Just like these people and the coffee they grow.
                    </LineSplitter>
                </div>
            </div>

        </div>
    )
}

export default VEC_Photography