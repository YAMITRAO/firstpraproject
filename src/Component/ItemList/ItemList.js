import "./ItemList.css"


const ItemList = ( props) => {


    return(
        <div className="itemContainer">
            <div>{props.userData.userName}</div>
            <div>{props.userData.collegeName}</div>
            <div>Age {props.userData.age}</div>
        </div>
    )
}

export default ItemList;