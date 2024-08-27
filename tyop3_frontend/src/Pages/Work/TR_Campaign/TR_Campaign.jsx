import React from 'react'
import "./style.scss";
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';

const TR_Campaign_Page = () => {
    return (
        <div className='TR_Campaign_Page'>
            <ProjectHead
                title="Toni Rossi"
                category="Campaign Services"
                date="Green Shoes Campaign 2018-19"
                description="ToniRossi - a fast-growing fashion-footwear brand - is known for its sustainable methods
of shoe making.
Campaign concept
Photography
Art Direction
Production
Design
Execution" />
            <div className="grid">
                <GsapImage src={"/Work/TR-Camp/tr (1).webp"} height={"auto"} width={"auto"} />
                <div className="text-container">
                    <h3 className='text-48 text-600'>Shoes loved by nature.</h3>
                    <p className='text-28 pt'>
                        ToniRossi produces high-quality leather with zero effluents. With manufacturing practices meeting highest-international standards and certifications, each pair of ToniRossi shoes is a testimony to “responsible fashion”.
                    </p>
                </div>
                <GsapImage src={"/Work/TR-Camp/tr (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/TR-Camp/tr (3).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/TR-Camp/tr (4).webp"} height={"auto"} width={"auto"} />
                <GsapImage src={"/Work/TR-Camp/tr (5).webp"} height={"auto"} width={"auto"} />
            </div>
        </div>
    )
}

export default TR_Campaign_Page