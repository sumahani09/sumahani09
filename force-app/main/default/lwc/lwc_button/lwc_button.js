import { LightningElement } from 'lwc';

export default class Lwc_button extends LightningElement {
    
    name='suma';
    
    handlesubmit(event){
        alert('This is first lwc component');
    }

}