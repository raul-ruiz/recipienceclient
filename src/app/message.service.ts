import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MessageComponent } from './message/message.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable()
export class MessageService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string, type: string): Observable<boolean> {

      let dialogRef: MatDialogRef<MessageComponent>;

      dialogRef = this.dialog.open(MessageComponent);

      dialogRef.componentInstance.title = title;
      dialogRef.componentInstance.message = message;
      switch (type)
      {
        case 'E': {
          dialogRef.componentInstance.iconname = 'error';
          break;
        }

        case 'I': {
          dialogRef.componentInstance.iconname = 'info';
          break;
        }

      }

      return dialogRef.afterClosed();
  }

}
