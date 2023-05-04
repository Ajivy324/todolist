import React, {useState} from 'react'

const Display1 = (props) => {
    const [item, setItem] = useState("");


    const handleChecked = (i) => {
        const updatedItem = props.currentItem.map((item,index)=>{
            if(i === index ){
                item.complete = !item.complete;
            }
            return item;
        })
        props.setCurrentItem(updatedItem);
        }

    const handleItemDelete = (i) => {
        const filterItems = props.currentItem.filter((item, index) => {
            return index !== i
        });
        console.log(filterItems)
        

        props.setCurrentItem(filterItems);

    }
    return (

        <div>
            <ul >
                {
                props.currentItem.map( (item, index) => 
                    <li key={ index } ><span >{ item.text }</span>
                    <input checked={item.complete} type='checkbox' onChange={(e) => handleChecked(index) } />
                    <button style={{margin: "5px"}} className='btn btn-dark' onClick={(e) => {handleItemDelete(index);}}>Delete</button></li>
                )
                }
            </ul>
        </div>
    )
}

export default Display1