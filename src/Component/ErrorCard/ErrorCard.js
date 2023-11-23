import "./ErrorCard.css"


const ErrorCard = (props) => {
    console.log(props.dataError)

    return(
         <div className="errorContainer"> 
            <div className="errorContainer_inner">
                <div className="errorTitleDiv">Invalid Input</div>
                <div className="errorMsgDiv">{props.errormsg}
                <button onClick={props.setCancle}>Okay</button>
                </div>
            </div>
         </div>
    )
}

export default ErrorCard;