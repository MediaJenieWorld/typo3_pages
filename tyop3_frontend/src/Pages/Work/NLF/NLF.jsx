import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';

const NLF_Page = () => {
    return (
        <div className='NLF_Page'>
            <ProjectHead
                title="NLF"
                category="Design"
                date="NLF - 2022"
                description="Brand identity design for Namma Live Fish (NLF), a startup that brings fresh-live-fish from farm to home."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/NLF/cover.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/NLF/nlf (2).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/NLF/nlf (1).webp"} />
            </div>
        </div>
    )
}

export default NLF_Page