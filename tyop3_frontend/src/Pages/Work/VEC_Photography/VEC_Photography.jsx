import React from 'react'
import "./style.scss";
import ImageComp from '@/Components/Image';

const VEC_Photography = () => {
    return (
        <div className='VEC_Photography'>
            <div className="section-1">
                <h1 className="text-84 text-600">
                    VEC Photography</h1>
                <h2 className="text-60 text-600">
                    Content Production
                </h2>
            </div>
            <div className="description">
                <p className='time'>
                    Vaishnavi Estate Coffee - 2022
                </p>
                <p className='txt text-28'>
                    Vaishnavi Estate Coffee (VEC) is a top coffee grower from Coorg, India. They have been
                    growing coffee since 1928 in their estates. When VEC wanted to launch their own brand
                    of fresh-coffee powder, it was a given that we need to produce some great visuals that
                    capture the real side of the brand.
                </p>
            </div>
            <div className="grid">
                <ImageComp src={"/Work/VEC_Photography/vc-photo-03.webp"} height={"auto"} width={"auto"} />
                <ImageComp src={"/Work/VEC_Photography/vc-photo-02.jpg"} height={"auto"} width={"auto"} />
            </div>
            <div className="description">
                <div className="time"></div>
                <p className='txt padding py-0'>
                    A legacy of around 100 years, 3 generations of coffee growers... Vaishnavi Estate is a dream-come-true for a coffee aficionado. They grow sustainable, shade-grown coffee, that is roasted & ground fresh, before packing.
                </p>
            </div>
            <div className="hero-image">
                <ImageComp height={"auto"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-01.webp"} />
                <ImageComp height={"auto"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-04.webp"} />
            </div>
            <div className="centered">
                <h3 style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    The human side of sustainable, single-origin &
                    shade-grown coffee of Vaishnavi Estate.
                </h3>
            </div>

            <div className="description">
                <div className="time">
                    <ImageComp style={{ objectFit: "cover" }} height={"100%"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-05.jpg"} />
                </div>
                <div className="txt">
                    <ImageComp style={{ objectFit: "cover" }} height={"100%"} width={"100%"} src={"/Work/VEC_Photography/vc-photo-06.webp"} />
                </div>
            </div>
            <div className="description">
                <div className="time"></div>
                <p className='txt padding py-0'>
                    We wanted to capture the honest and down-to-earth side of the brand. Nothing can be better than capturing the real people behind this terrific coffee. The images are not touched-up, but true and grounded. Just like these people and the coffee they grow.
                </p>
            </div>

        </div>
    )
}

export default VEC_Photography