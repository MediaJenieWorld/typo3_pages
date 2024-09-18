import { generatePreAndNextProjects } from '@/Utils/Work_Projects'
import React from 'react'
import ImageComp from '../Image'
import "./style.scss"

const ProjectFooter = () => {
    const { prevProject, nextProject } = generatePreAndNextProjects(window?.location?.pathname)
    return (
        <div className='ProjectFooter'>
            {prevProject !== null &&
                <a href={prevProject.link} className="pre">
                    <ImageComp className="icon" height={50} width={"50px"} style={{ objectFit: "cover" }} prefixAssets={false} src={"/icons/arrow-left.svg"} />
                    <h3 className='heading text-48 text-600'>{prevProject.name}</h3>
                    <div className="layer"></div>
                    <ImageComp className="mainImg" height={200} width={"100%"} style={{ objectFit: "cover" }} prefixAssets={false} src={prevProject.imageSrc} />
                </a>}
            {nextProject !== null &&
                <a href={nextProject.link} className="next">
                    <ImageComp className="icon" height={50} width={"50px"}
                        style={{ objectFit: "cover" }} prefixAssets={false}
                        src={"/icons/arrow-right.svg"} />
                    <h3 className='heading text-48 text-600'>{nextProject.name}</h3>
                    <div className="layer"></div>
                    <ImageComp className="mainImg" height={200} width={"100%"} style={{ objectFit: "cover" }} prefixAssets={false} src={nextProject.imageSrc} />
                </a>}
        </div>
    )
}

export default ProjectFooter