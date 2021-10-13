import jsTPS_Transaction from "../common/jsTPS.js"

/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that updates the text
 * for a given item. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, initOldText, initNewText, initIndex) {
        super();
        this.store = initStore;
        this.oldText = initOldText;
        this.newText = initNewText;
        this.index = initIndex;
    }

    doTransaction() {
        this.store.editItem(this.newText, this.index);
    }
    
    undoTransaction() {
        this.store.editItem(this.oldText, this.index);
    }
}