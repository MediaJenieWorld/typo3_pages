import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const GsapImage = ({ height, width, src, alt, layerStyle = "#fff", transitionStyle = { x: "-100%" }, ...props }) => {
    let newAlt = alt || src
    let getSrc = src.includes("http") ? src : "/assets/" + src


    const handleLoad = () => {
        const img = document.querySelector(`[data-image-name="${getSrc}"]`)
        img.style.scale = "1.1"
        const layer = document.querySelector(` [data-layer-name="${getSrc}"]`)
        const delay = 0
        const duration = 5

        if (layer) {
            const trigger = {
                trigger: img,
                start: "top center",
                end: "bottom center",
                // markers: 1,
                // scrub: 1
            }
            // const imgTrigger = {
            //     trigger: img,
            //     start: "top 80%",
            //     end: "center center",
            //     // markers: 1,
            //     // scrub: 1
            // }
            gsap.to(layer, {
                scrollTrigger: trigger, duration, delay, ease: 'expo.out', ...transitionStyle,
            })

            gsap.to(img, {
                ease: 'expo.out',
                scrollTrigger: trigger, scale: 1,
                duration,
                delay
            })
        }
    };

    return (
        <div style={{
            overflow: "hidden", position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }} className="overflow-wrapper">
            <div
                data-layer-name={getSrc}
                style={{
                    position: "absolute",
                    height: "100%", width: "100%",
                    top: "0", left: "0",
                    backgroundColor: layerStyle, zIndex: 3
                }}
                className="colorLayer"></div>
            <img loading="lazy"
                onLoad={handleLoad}
                height={height} width={width} data-image-name={getSrc} src={getSrc} alt={newAlt} {...props} />
        </div>
    )
}

export default GsapImage