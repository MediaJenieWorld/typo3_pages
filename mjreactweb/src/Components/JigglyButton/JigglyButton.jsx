import "./JigglyButtonStyle.scss"
const JigglyButton = ({ label = "Know More", ...btnProps }) => {
    return (
        <button  {...btnProps} className='primary-button jigglyButton btn-yellow transition ease-in-out'>
            <span >{label}</span>
        </button>
    )
}

export default JigglyButton

