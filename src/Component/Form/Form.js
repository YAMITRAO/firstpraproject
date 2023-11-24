import ErrorCard from "../ErrorCard/ErrorCard";
import "./Form.css"
import { useState, useRef } from "react";
import ReactDOM  from "react-dom";


const Form = (props ) => {

    const [isInputValid, setIsInputValid] = useState(true);
    const [errorMsg, setErrorMsg] = useState( "");

    let enteredUserName = useRef();
    let enteredAge = useRef();
    let enteredCollege = useRef();

    // let username = "";
    // let userage = 0 ;
    // const usernameHandler = (e) => {
    //     username = e.target.value;
    // }

    // const ageHandler = (e) => {
    //    userage =  e.target.value;
    // }

    const submitHandler = (e) => {
        // console.log(enteredUserName.current.value);
        // console.log(enteredAge.current.value);
        let usernameentered = enteredUserName.current.value;
        let userageentered = Number(enteredAge.current.value);
        let usercollegeentered = enteredCollege.current.value;
        e.preventDefault();
        if(usernameentered.length > 0 && userageentered > 0 && usercollegeentered.length >0){
            let temp = {
                userName: usernameentered,collegeName:usercollegeentered, age:userageentered
            }
            props.importData(temp);
        }
        else if(userageentered <= 0 && usernameentered.length > 0){
            setErrorMsg("Negative age is not valid enrty")
            setIsInputValid(false);
        }
        else{
            setErrorMsg("Please entry correct userName and userAge")
            setIsInputValid(false);
        }
        enteredUserName.current.value = "";
        enteredAge.current.value ="";
        enteredCollege.current.value ="";
    }


    const formVar =  <div className="formContainer">
    <form onSubmit={ submitHandler}>
        <div className="usernameContainer">
            <label>UserName</label>
            <input  ref={enteredUserName} type="text" id="usernameInput" name="username"  />
        </div>

        <div className="collegeContainer">
            <label>College Name</label>
            <input  ref={enteredCollege} type="text" id="ageInput" name="age" />
        </div>

        <div className="ageContainer">
            <label>Age</label>
            <input  ref={enteredAge} type="number" id="ageInput" name="age" />
        </div>

        <div className="buttonContainer">
            <input type="submit" id="submitButton" value="Add Entry"/>
        </div>
    </form>
</div>

 function cancleHandler(){
    setIsInputValid(true);
 }


    return( 
        <>
        {isInputValid ? formVar : <> {ReactDOM.createPortal(<ErrorCard errormsg = {errorMsg} setCancle ={ cancleHandler }/>, document.getElementById('before_root'))} {formVar}</>}
        </>
    )
}

export default Form;