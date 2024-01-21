import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export class DialogData {
  link : string = '';
}

@Component({
  selector: 'app-leaving-modal',
  templateUrl: './leaving-modal.component.html',
  styleUrl: './leaving-modal.component.css'
})
export class LeavingModalComponent {
  
  constructor(
    public dialogRef : MatDialogRef<LeavingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    no() {
      this.dialogRef.close();
    }

    followLink() {
      window.location.href = this.data.link;
      this.dialogRef.close();
    }
}
