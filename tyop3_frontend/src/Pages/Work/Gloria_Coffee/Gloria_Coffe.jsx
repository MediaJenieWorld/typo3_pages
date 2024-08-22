import React from 'react'
import "./style.scss";
import ImageComp from '@/Components/Image';

const Gloria_Coffee_Page = () => {
    return (
        <div className='Gloria_Coffee_Page'>
            <div className="section-1">
                <h1 className="text-84 text-600">Gloria Jeans Coffee</h1>
                <h2 className="text-60 text-600">Digital</h2>
            </div>
            <div className="description">
                <p className='time'>Gloria Jeans Coffee - India 2021-22</p>
                <p className='txt text-28'>
                    Website design & development.
                </p>
            </div>
            <div style={{ justifyContent: "flex-start" }} className="grid float">
                <ImageComp src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} width={"auto"} />
            </div>

            <div style={{ justifyContent: "flex-end" }} className="grid float">
                <ImageComp src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} width={"auto"} />
            </div>

            <div className="description">
                <h3 style={{ justifySelf: "center", gridColumn: "span 3" }} className='time padding py-0 text-42 text-600'>
                    For Gloria Jeans Coffee - India launch -, we designed &
                    developed the website.
                </h3>
                <p className='txt  py-0'></p>
            </div>
            <div className="grid">
                <ImageComp src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} width={"auto"} />
                <ImageComp src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} height={"auto"} width={"auto"} />
            </div>
            <div className="hero-image">
                <ImageComp height={"auto"} width={"100%"} src={"/Work/GloriaCoffee/GloriaCoffee (3).webp"} />
            </div>
        </div>
    )
}

export default Gloria_Coffee_Page