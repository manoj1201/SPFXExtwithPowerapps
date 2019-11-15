
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { UrlQueryParameterCollection } from '@microsoft/sp-core-library';
import Iframe from 'react-iframe';
require('./ModalDialogReference.scss')
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  } from "@microsoft/sp-webpart-base"; 
  const CloseModal = () => (
    <Icon iconName="ChromeClose" className="ms-IconExample" style={{fontWeight : "bold"}}  />
  );
export interface IModalWindowState {
  showModal: boolean;
  id: number;

}
export interface IModalWindowProps{
  id:number;
  close:any;
  showModal: boolean;

}
export default class ModalWindow extends React.Component<IModalWindowProps,IModalWindowState> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal,
      id: props.id
     
    };
  }
 
  componentWillReceiveProps(nextProps,prevState){
    if(nextProps.id !== prevState.id){
      this.setState({
        id:nextProps.id,
        showModal: nextProps.showModal
       
      })
    }
    
  }

  public render(): JSX.Element {
    var libraryUrl = window.location.href;
    libraryUrl= libraryUrl.toLowerCase()
    let fields="";
     let headertext =""
      headertext ="Audit Report Relase Form"
       fields = "https://web.powerapps.com/webplayer/iframeapp?source=iframe&screenColor=rgba(104,101,171,1)&appId=/providers/Microsoft.PowerApps/apps/8a7896aa-ff75-4bdf-b297-399d6785aec3&Input=" + this.state.id ;     
    return (
      <div>

      <Modal 
     isOpen={this.state.showModal}
     onDismiss={this._closeModal}
     isBlocking={true}
     containerClassName="ms-modal-container">
      <div className="ms-modal-head">
        <span className="ms-modal-headerTitle">{headertext}</span> 
     
        <DefaultButton onClick={this._closeModal}  className="CloseButton"  ><CloseModal/></DefaultButton>
      </div>
        <div id="subtitleId" className="ms-modal-body">
          <Iframe url={fields}
            width="1024px" height="550px"
            position="relative"
            allowFullScreen>
          </Iframe>
        </div>
      </Modal>
    </div>
    );
  }

  private _showModal = (): void => {
    // renderOnDom()
    this.setState({ showModal: true });
  };

  private _closeModal = (): void => {
    this.props.close()
    this.setState({ showModal: false });
  };
}

