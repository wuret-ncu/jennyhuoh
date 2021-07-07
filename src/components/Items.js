import React from 'react';

function Data(props) {
    return(
        <div className="itemList">
            <div><input type="checkbox" /></div>
            <div>{props.name}</div>
            <div><button>Edit</button></div>
            <div><button>Delete</button></div>
        </div>
    );
}

export default function Items(props) {
    const dataList = props.name.map(items => 
        <Data key={items.id} name={items.name} />)
    // const dataList = props.item.map(value => 
    //     <Data key={value.name} name={value.name} />)
    
    return(
        <div className="itemListBox">
            {dataList}
        </div>
    );
}