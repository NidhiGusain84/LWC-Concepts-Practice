import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api message;

    @api convertToUpperCase(input) {
        return input.toUpperCase();
    }

    handleChange(event){
        let input = event.target.value;
       const childCompEvent = new CustomEvent('childevent', {
        detail: input
       });
       this.dispatchEvent(childCompEvent);
    }

    clickHandler(){
        this.refs.grandChild.userInput = this.message;
    
    }
}