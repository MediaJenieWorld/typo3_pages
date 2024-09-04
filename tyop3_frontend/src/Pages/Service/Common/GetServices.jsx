import { StaggeredLine } from '@/Components/Gsap/LineIntoWords'
import React from 'react'

const GetServices = ({ services = [] }) => {
    return (
        <>
            {services.map((service, index) => (
                <StaggeredLine duration={2} layerCSS_Style={{ opacity: 0 }} transitionStyle={{ opacity: 1 }} initX='100%' initY='0%'>
                    <div className={`${index == 0 && "mt"} ${index == services.length - 1 && "mb"}  section-3`} key={index}>
                        <div className="text-center-wrapper">
                            <h2 className="text-72 text-600">
                                {service.title}
                            </h2>
                            <p className="text-28">
                                {service.description}
                            </p>
                            {service.technologies && (
                                <p className="mt text-28 text-600">
                                    {service.technologies}
                                </p>
                            )}
                        </div>
                    </div>
                </StaggeredLine>
            ))}
        </>
    )
}

export default GetServices