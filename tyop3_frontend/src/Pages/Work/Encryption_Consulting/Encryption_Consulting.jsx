import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';

const Encryption_Consulting_Page = () => {
    return (
        <div className='Encryption_Consulting_Page'>
            <ProjectHead
                title="Encryption Consulting – USA"
                category="Campaign Services"
                date="Digital Campaigns - EC 2019-21"
                description="Digital marketing for US-headquartered consulting firm, specializing in encryption."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Encryption_Consulting/EC (2).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Encryption_Consulting/EC (3).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/Encryption_Consulting/EC (4).webp"} />
            </div>
        </div>
    )
}

export default Encryption_Consulting_Page