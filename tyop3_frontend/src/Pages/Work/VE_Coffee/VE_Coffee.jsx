import React from 'react'
import "./style.scss";

const VE_Coffee = () => {
    return (
        <div className='VE_Coffee'>
            <div className="section-1">
                <h1 className="text-84 text-600">
                    VE Coffee Videos</h1>
                <h2 className="text-60 text-600">
                    Content Production
                </h2>
            </div>
            <div className="description">

                <p className='time'>
                    Video Production 2021-22

                </p>
                <pre className='txt text-28'>
                    {`When Vaishnavi Estate with its 100 years of legacy, launched its coffee brand, we had to

make sure it is perceived and accepted across various audience segments. Nothing

better than some short video content.

- Concept

- Production

- Post Production`}
                </pre>
            </div>
            <div className="grid">
                <iframe width="296px" height="530px" src="https://www.youtube.com/embed/LUYcOxAWago" title="VC Caramel Iced Coffee" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="296px" height="530px" src="https://www.youtube.com/embed/8vVHkBEBzOM" title="VC Cocoa Coffee" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="296px" height="530px" src="https://www.youtube.com/embed/edP20bGPyWE" title="Experience Pure Coffee" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="centered">
                <h3 style={{ color: "#191b1d", width: "770px" }} className='text-42'>
                    There was a myth that "pure coffee" is boring and only good for
                    the traditional filter coffee. We produced a series of shorts and
                    reels on interesting coffee-recipes to counter this.
                </h3>
            </div>
            <div className="grid">
                <iframe width="296px" height="530px" src="https://www.youtube.com/embed/N8Nvj1Qx36c" title="VC Caramel Iced Coffee" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="296px" height="530px" src="https://www.youtube.com/embed/gfht3TibOQs" title="VC Cocoa Coffee" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="296px" height="530px" src="https://www.youtube.com/embed/ELDQ_wUOxDM" title="Experience Pure Coffee" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="description">

                <h3 style={{ justifySelf: "center" }} className='time text-60 text-600'>
                    Result?
                </h3>
                <p className='txt'>
                    Some awesome recipe videos where Vaishnavi Estate Coffee powder is transforming into yummy coffee!
                </p>
            </div>

        </div>
    )
}

export default VE_Coffee