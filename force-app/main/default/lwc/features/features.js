import { LightningElement, api} from 'lwc';

export default class Features extends LightningElement {

    @api
    features = {};

    /**
     * @param {string} key
     * @param {string} label
     * @param {string} icon
     */
    set addItem({id, label, icon}){
        this.features.push({id ,icon, label});
    }

    sendDeleteEvent(){
        const event = new CustomEvent('delete');
        this.dispatchEvent(event);
    }
}