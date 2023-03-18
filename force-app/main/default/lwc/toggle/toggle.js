import { LightningElement, api } from 'lwc';

export default class Toggle extends LightningElement {

    @api
    label = "";

    toggle = false;

    handleToggle(){
        this.toggle = ! this.toggle;
        return this.toggle;
    }

    sendEvent(){
        this.handleToggle();
        const event = new CustomEvent('send', {detail: this.toggle});
        this.dispatchEvent(event);
    }
}