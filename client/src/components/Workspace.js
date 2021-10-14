import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Top5Item from './Top5Item.js'
import { GlobalStoreContext } from '../store'
/*
    This React component lets us edit a loaded list, which only
    happens when we are on the proper route.
    
    @author McKilla Gorilla
*/
function Workspace() {
    const { store } = useContext(GlobalStoreContext);
    const [ id, setId ] = useState("");
    store.history = useHistory();

    // if (store.currentList) {
    //     let currentId = store.currentList._id;
    //     setId(currentId);
    // }
    // useEffect(() => {
    //     const data = window.localStorage.getItem("currentListId");
    //     setId(JSON.parse(data));
    //     // store.setCurrentList(id);
    // }, []);
    // useEffect(() => {
    //     window.localStorage.setItem("currentListId", JSON.stringify(id));
    // });

    let editItems = "";
    if (store.currentList) {
        editItems = 
            <div id="edit-items">
                {
                    store.currentList.items.map((item, index) => (
                        <Top5Item 
                            id={'top5-item-' + (index+1)}
                            key={'top5-item-' + (index+1)}
                            text={item}
                            index={index} 
                        />
                    ))
                }
            </div>;
    }
    return (
        <div id="top5-workspace">
            <div id="workspace-edit">
                <div id="edit-numbering">
                    <div className="item-number">1.</div>
                    <div className="item-number">2.</div>
                    <div className="item-number">3.</div>
                    <div className="item-number">4.</div>
                    <div className="item-number">5.</div>
                </div>
                {editItems}
            </div>
        </div>
    )
}

export default Workspace;