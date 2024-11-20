import { Component, Inject, OnInit } from '@angular/core';
import { TreeService } from '../../../../services/tree.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-tree-delete-node-dlg',
    templateUrl: './tree-delete-node-dlg.component.html',
    styleUrls: ['./tree-delete-node-dlg.component.scss'],
})
export class TreeDeleteNodeDlgComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string},
    public dialogRef: MatDialogRef<TreeDeleteNodeDlgComponent>,
  ) {}

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
