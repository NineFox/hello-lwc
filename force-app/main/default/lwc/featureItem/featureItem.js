import { LightningElement, api } from 'lwc';

export default class FeatureItem extends LightningElement {
    @api
    label = "";

    @api
    icon = "";
}