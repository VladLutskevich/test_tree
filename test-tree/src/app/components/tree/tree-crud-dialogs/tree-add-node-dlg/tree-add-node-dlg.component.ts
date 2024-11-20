import { Component, Inject, model, OnInit } from '@angular/core';
import { TreeService } from '../../../../services/tree.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-tree-add-node-dlg',
    templateUrl: './tree-add-node-dlg.component.html',
    styleUrls: ['./tree-add-node-dlg.component.scss'],
})
export class TreeAddNodeDlgComponent implements OnInit {

  name = model('');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    public dialogRef: MatDialogRef<TreeAddNodeDlgComponent>,
  ) {}

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
