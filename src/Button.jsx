import PropTypes from "prop-types"
const Button = ({buttonContent, nextContent})=>{

    return (
        <>
       <button>{buttonContent}</button>
       <button>{nextContent}</button>

       </>
       
)
}
// Button.defaultProps = {
//     buttonContent : "hello Mama",
//     nextContent : 22
// }

Button.PropTypes ={
    nextContent : PropTypes.string.isRequired
}

export default Button