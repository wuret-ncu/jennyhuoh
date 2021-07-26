import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store';
import Nav from '../components/Nav';
import Add from '../images/btn-add.png';
import Delete from '../images/btn-delete.png';
import { ADD_ITEM,
         CHANGE_COMPLETED,
         REMOVE_ITEM } from '../utils/constants';

function List(props) {
    const { state: { list: { listItems } }, dispatch } = useContext(StoreContext);

    const onChangeCheckbox = (id) => {
        let n = listItems.findIndex(lists => lists.id === id);
        let newItems = listItems;
        newItems[n].completed = !newItems[n].completed;
        dispatch({
            type: CHANGE_COMPLETED,
            payload: newItems
        })
    }
    const onClickDelete = (id) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    }

    return(
        <div key={props.id} className="listBox">
            <div className="list-left">
                <input 
                    className="list-checkbox" 
                    type="checkbox" 
                    defaultChecked={props.completed} 
                    onChange={() => onChangeCheckbox(props.id)}/>
                <div className="list-label">{props.name}</div>
            </div>
            <img src={Delete} alt="" className="list-delete" onClick={() => onClickDelete(props.id)} />
        </div>
    );
}

export default function TodoList() {
    const { state: { list: { listItems }, clicked }, dispatch } = useContext(StoreContext);
    const [value, setValue] = useState('')
    const [showList, setShowList] = useState(listItems.map(lists => <List key={lists.id} id={lists.id} completed={lists.completed} name={lists.name} />))

    useEffect(() => {
        if(clicked === 1) {
            let list1 = listItems.filter((x) => x.completed === false);
            let f = list1.map(lists => <List id={lists.id} completed={lists.completed} name={lists.name} />);
            setShowList(f);
        }else if(clicked === 2) {
            let list2 = listItems.filter((x) => x.completed === true);
            let t = list2.map(lists => <List id={lists.id} completed={lists.completed} name={lists.name} />);
            setShowList(t);
        }else if(clicked === 0) {
            setShowList(showList);
        }
    }, [clicked])

    const onClickAdd = () => {
            dispatch({
                type: ADD_ITEM,
                payload: {name: value, completed: false, id: nanoid()}
            })
    }

    return(
        <div className="container">
            <div className="card">
                <div className="card-titleBox">
                    <div className="card-title">Todo List</div>
                </div>
                <div className="addBox">
                    <input type="text" className="add-input" onChange={(e) => setValue(e.target.value)}/>
                    <img src={Add} className="add-btn" alt="" onClick={onClickAdd} />
                </div>
                <Nav buttons={[{label:"全部", id:0}, {label:"未完成", id:1}, {label:"已完成", id:2}]}/>
                <div className="list-bg">
                  {showList}  
                </div>
            </div>
            <Link to="/" className="btn-logout">Logout</Link>
        </div>
    );
}