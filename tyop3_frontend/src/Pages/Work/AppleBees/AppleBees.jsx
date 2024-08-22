import React from 'react'
import "./style.scss";
import ImageComp from '@/Components/Image';

const AppleBeesPage = () => {
    return (
        <div className='AppleBeesPage'>
            <div className="section-1">
                <h1 className="text-84 text-600">AppleBees</h1>
                <h2 className="text-60 text-600">Digital</h2>
            </div>
            <div className="description">
                <p className='time'>
                    AppleBees- India 2022
                </p>
                <p className='txt text-28'>
                    Web Solutions.We designed & developed the website for AppleBees' India launch.
                </p>
            </div>
            <div className="grid">
                <ImageComp src={"/Work/AppleBees/appleBees (1).webp"} height={"auto"} width={"auto"} />
                <ImageComp src={"/Work/AppleBees/appleBees (2).jpg"} height={"auto"} width={"auto"} />
            </div>
            <div className="hero-image">
                <ImageComp height={"auto"} width={"100%"} src={"/Work/AppleBees/appleBees (1).jpg"} />
            </div>
            <div className="centered">
                <h3 style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    When the website is for an international brand like AppleBees, it
                    has to look as appealing & delicious as those yummy dishes
                    they serve! We have tried our best to do justice, even though
                    those lipsmacking food-pics were truly testing our focus!
                </h3>
            </div>
            <div className="description">
                <h3 style={{ justifySelf: "center" }} className='time text-60 text-600'>
                    Crafted with
                    love.
                </h3>
                <p className='txt padding py-0'>
                    We wanted to capture the honest and down-to-earth side of the brand. Nothing can be better than capturing the real people behind this terrific coffee. The images are not touched-up, but true and grounded. Just like these people and the coffee they grow.
                </p>
            </div>

        </div>
    )
}

export default AppleBeesPage