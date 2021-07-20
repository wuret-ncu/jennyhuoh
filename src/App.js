import React from 'react';
// import Items from './components/Items';
import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Data(props) {
  return(
    <div className="itemList">
        <div>{props.name}</div>
        <div><button>Edit</button></div>
    </div>
  );
}
export default function App() {
  const [item, setItem] = useState([
    {name:"讀書", completed: false, id: "i1"},
    {name:"寫作業", completed: false, id: "i2"},
    {name:"畫畫", completed: false, id: "i3"}
  ])
  const [value, setValue] = useState('');
  const onClickAdd = () => {
    let newItem = [...item, {name:value, completed: false, id:nanoid()}];
    setItem(newItem);
  }
  const onClickDelete = (id) => {
    setItem(item.filter(item => item.id !== id));
  }
  const onChangeCheckbox =(id) => {
    let num = item.findIndex(items => items.id === id);
    let newItem = item;
    newItem[num].completed = !newItem[num].completed;
    setItem(newItem);
    console.log(item);
  }
  let dataList = item.map(items => 
    <div className="list" key={items.id}>
      <div><input type="checkbox" checked={items.completed} onChange={() =>onChangeCheckbox(items.id)}/></div>
      <Data name={items.name} />
      <button onClick={() => onClickDelete(items.id)}>Delete</button>
    </div>)
  console.log(item);
  return(
      <div className="container">
        <p className="title">To Do List</p>
          <input type="text" onChange={(e) => setValue(e.target.value)}/>
          <span><button onClick={onClickAdd}>Add</button></span>

        <Nav />
        <div className="itemListBox">
            {dataList}
        </div>
        {/* <Items name={item} /> */}
      </div>    
    );
}    
