import { LightningElement, track } from 'lwc';

export default class FeatureHome extends LightningElement {
    title = "Welcome to Lightning Web Components!";

    showFeatures = true;

    @track
    features = [];

    connectedCallback(){
      this.features.push({
        id: this.features.length,
        label: "Learn in the browser.",
        icon: "utility:edit"});
      this.features.push({
        id: this.features.length,
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh"
      });
      this.features.push({
        id: this.features.length,
        label: "Style your components with SLDS.",
        icon: "utility:brush"
      });
    }

    receiveToggleEvent(event){
        this.showFeatures = event.detail;
    }

    receiveDeleteEvent(event){
      this.features.pop();
      console.log(this.features);
    }
}