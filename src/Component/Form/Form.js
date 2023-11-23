import ErrorCard from "../ErrorCard/ErrorCard";
import "./Form.css"
import { useState } from "react";


const Form = (props ) => {

    const [isInputValid, setIsInputValid] = useState(true);

    const [errorMsg, setErrorMsg] = useState( "")

    let username = "";
    let userage = 0 ;
    const usernameHandler = (e) => {
        username = e.target.value;
    }

    const ageHandler = (e) => {
       userage =  e.target.value;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(username.length > 0 && userage > 0){
            let temp = {
                userName: username, age:userage
            }
            props.importData(temp);
        }
        else if(userage <= 0 && username.length > 0){
            setErrorMsg("Negative age is not valid enrty")
            setIsInputValid(false);
        }
        else{
            setErrorMsg("Please entry correct userName and userAge")
            setIsInputValid(false);
        }
    }


    const formVar =  <div className="formContainer">
    <form onSubmit={ submitHandler}>
        <div className="usernameContainer">
            <label>UserName</label>
            <input onChange={ usernameHandler } type="text" id="usernameInput" name="username"  />
        </div>

        <div className="ageContainer">
            <label>Age</label>
            <input onChange={ageHandler} type="number" id="ageInput" name="age" />
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
        {isInputValid ? formVar : <> <ErrorCard errormsg = {errorMsg} setCancle ={ cancleHandler }/> {formVar}</>}
        </>
    )
}

export default Form;