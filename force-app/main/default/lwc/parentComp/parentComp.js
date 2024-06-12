import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    inputValue;
    childInput;

    handleChange(event){
       this.inputValue = this.refs.child.convertToUpperCase(event.target.value);
    }

    handleChildEvent(event){
        this.childInput = event.detail;
    }
}