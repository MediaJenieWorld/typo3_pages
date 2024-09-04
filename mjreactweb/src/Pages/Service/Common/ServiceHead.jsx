import { StaggeredLine } from '@/Components/Gsap/LineIntoWords'
import React from 'react'
import "./style.scss"

const ServiceHead = ({ heading, subHeading, para }) => {
    return (
        <>
            <div className="text-84 text-600">
                <StaggeredLine
                    defaultStyle={false}
                    duration={3}
                    delay={1}
                    layerCSS_Style={{ filter: "blur(4px)" }}
                    transitionStyle={{ filter: "blur(0px)" }}
                >       {heading}
                </StaggeredLine>
            </div>
            <div className="text-42 text-600">
                <StaggeredLine
                    duration={2}
                    delay={1.5}
                    initX='-100%' initY='0'
                    layerCSS_Style={{ opacity: 0 }}
                    transitionStyle={{ opacity: 1 }}
                >
                    {subHeading}
                </StaggeredLine>
            </div>
            <div className='text-28'>
                <StaggeredLine
                    duration={2}
                    delay={1.5}
                    initX='100%' initY='0'
                    layerCSS_Style={{ opacity: 0 }}
                    transitionStyle={{ opacity: 1 }}

                >
                    {para}
                </StaggeredLine>
            </div>
        </>
    )
}

export default ServiceHead