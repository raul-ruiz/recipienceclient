import { Component } from '@angular/core';
import { MatDialogRef, MatIcon } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  public title: string;
  public message: string;
  public iconname: string;

  constructor(public dialogRef: MatDialogRef<MessageComponent>) {}
}
