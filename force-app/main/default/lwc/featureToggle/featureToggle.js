import { LightningElement, api } from 'lwc';

export default class FeatureToggle extends LightningElement {

    @api
    label = "";

    @api
    initialToggle = false;

    toggle = false;

    connectedCallback(){
        this.toggle = this.initialToggle;
    }

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