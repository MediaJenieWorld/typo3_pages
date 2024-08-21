
// eslint-disable-next-line react/prop-types
const ImageComp = ({ height, width, src, alt, ...props }) => {
    let newAlt = alt || src
    let getSrc = src.includes("http") ? src : "/assets/" + src
    return (
        <img loading="lazy"
            height={height} width={width} src={getSrc} alt={newAlt} {...props} />
    )
}

export default ImageComp