import { useContext } from 'react'
import { GlobalStoreContext, tps } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();

    let enabledButtonClass = "top5-button";

    // UNDO BUTTON FOOL PROOFING
    let undoButtonClass;
    if (store.currentList) {
        if (tps.hasTransactionToUndo() && !store.isItemEditActive) {
            undoButtonClass = "top5-button";
        }
        else {
            undoButtonClass = "top5-button-disabled";
        }
    }
    else {
        undoButtonClass = "top5-button-disabled";
    }

    // REDO BUTTON FOOL PROOFING
    let redoButtonClass;
    if (store.currentList) {
        if (tps.hasTransactionToRedo() && !store.isItemEditActive) {
            redoButtonClass = "top5-button";
        }
        else {
            redoButtonClass = "top5-button-disabled";
        }
    }
    else {
        redoButtonClass = "top5-button-disabled";
    }
    // CLOSE BUTTON FOOL PROOFING
    let closeButtonClass;
    if (store.currentList && !store.isItemEditActive) {
        closeButtonClass = "top5-button";
    }
    else {
        closeButtonClass = "top5-button-disabled"
    }

    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        history.push("/");
        store.closeCurrentList();
    }
    let editStatus = false;
    if (store.isListNameEditActive) {
        editStatus = true;
    }
    return (
        <div id="edit-toolbar">
            <div
                disabled={editStatus}
                id='undo-button'
                onClick={handleUndo}
                className={undoButtonClass}>
                &#x21B6;
            </div>
            <div
                disabled={editStatus}
                id='redo-button'
                onClick={handleRedo}
                className={redoButtonClass}>
                &#x21B7;
            </div>
            <div
                disabled={editStatus}
                id='close-button'
                onClick={handleClose}
                className={closeButtonClass}>
                &#x24E7;
            </div>
        </div>
    )
}

export default EditToolbar;