import Form from "./Form/Form";
import ItemList from "./ItemList/ItemList";
import "./Project.css"
import { useState } from "react";

const Project = ( ) => {

    const dataDummy = [
        {userName:"Amit", age: 25},
        {userName:"Aans", age: 28}
    ]

    const [data, setData] = useState(dataDummy);

    function formImportedData( importedData) {
        setData( (preData) => {
            return [importedData, ...preData];
        })
    }

    return( 
        <div className="projectContainer">
            <Form  importData = {formImportedData }/>
            <div className="itemListContainer">
                {data.map( (item) => {
                    return  <ItemList key={Math.random()} userData = {item}/>
                })}
                
            </div>
        </div>
    )
}

export default Project;