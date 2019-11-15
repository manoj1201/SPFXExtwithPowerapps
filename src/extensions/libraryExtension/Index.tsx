// A file is required to be in the root of the /src directory by the TypeScript compiler
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ModalWindow from './ModalDialogReference';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';

export default class Index extends BaseDialog{
    public id =null;
    public showModal = null;
    constructor(props){
        super();
        this.id = props.id;
        this.showModal = props.showModal;
    }
    public render(): void {
        ReactDOM.render(<ModalWindow
         id={this.id}
         close={ this.close }
         showModal={this.showModal}  />, this.domElement);
      }   
}
