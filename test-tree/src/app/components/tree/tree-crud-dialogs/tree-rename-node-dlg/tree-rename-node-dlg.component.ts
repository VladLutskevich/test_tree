import { Component, inject, Inject, model, OnInit } from '@angular/core';
import { TreeService } from '../../../../services/tree.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-tree-rename-node-dlg',
    templateUrl: './tree-rename-node-dlg.component.html',
    styleUrls: ['./tree-rename-node-dlg.component.scss'],
})
export class TreeRenameNodeDlgComponent implements OnInit {

  data = inject<{id: number, name: string}>(MAT_DIALOG_DATA);
  name = model(this.data.name);

  constructor(
    public dialogRef: MatDialogRef<TreeRenameNodeDlgComponent>,
  ) {}

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
