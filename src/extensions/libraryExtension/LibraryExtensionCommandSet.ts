import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,RowAccessor,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';
import Index from './Index';
import * as strings from 'LibraryExtensionCommandSetStrings';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ILibraryExtensionCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'LibraryExtensionCommandSet';

export default class LibraryExtensionCommandSet extends BaseListViewCommandSet<ILibraryExtensionCommandSetProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized LibraryExtensionCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    var Libraryurl = this.context.pageContext.list.title;
    if (compareOneCommand) {
      
      // This command should be hidden unless exactly one row is selected.
      compareOneCommand.visible = (event.selectedRows.length === 1 && (Libraryurl == "AuditReport"));
    }
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
      if (event.selectedRows.length > 0) {
        // Check the selected rows
        event.selectedRows.forEach((row: RowAccessor, index: number) => {
            const dialog = new Index({ id: row.getValueByName('ID'), showModal: true})
          dialog.show().then(() => {
          });
        
        });
    }
      default:
        throw new Error('Unknown command');
    }
  }
}
