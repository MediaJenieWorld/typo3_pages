import React from 'react'
import "./style.scss";
import GsapImage from '@/Components/Gsap/Image_Ani';
import ProjectHead from '@/Components/Gsap/ProjectHead';

const Restaurant_Brand_Page = () => {
    return (
        <div className='Restaurant_Brand_Page'>
            <ProjectHead
                title="Restaurant Brand"
                category="Content Production"
                date="Photography & Visuals - 2019"
                description={`When one of the top chefs and a serial entrepreneur joined hands to create a restaurant
brand, "authenticity" was the keyword. We were tasked with producing some visuals that
capture this essence, without making them look like stock photography.
, Concept

, Art Direction

, Photography & Production

, Design`} />
            <div className="grid">
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Restaurant_Brand/food (2).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Restaurant_Brand/food (3).webp"} height={"auto"} width={"auto"} />


                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Restaurant_Brand/food (4).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Restaurant_Brand/food (5).webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Restaurant_Brand/food (6).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ y: "100%" }} src={"/Work/Restaurant_Brand/food (7).webp"} height={"auto"} width={"auto"} />


                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Restaurant_Brand/food (8).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Restaurant_Brand/cover.webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Restaurant_Brand/food (9).webp"} height={"auto"} width={"auto"} />
                <GsapImage transitionStyle={{ x: "-100%" }} src={"/Work/Restaurant_Brand/food (10).webp"} height={"auto"} width={"auto"} />

                <GsapImage transitionStyle={{ x: "100%" }} src={"/Work/Restaurant_Brand/food (1).webp"} height={"auto"} width={"auto"} />


            </div>
        </div>
    )
}

export default Restaurant_Brand_Page