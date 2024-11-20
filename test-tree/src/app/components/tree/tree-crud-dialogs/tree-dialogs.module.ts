import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TreeAddNodeDlgComponent } from './tree-add-node-dlg/tree-add-node-dlg.component';
import { TreeRenameNodeDlgComponent } from './tree-rename-node-dlg/tree-rename-node-dlg.component';
import { TreeDeleteNodeDlgComponent } from './tree-delete-node-dlg/tree-delete-node-dlg.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [TreeAddNodeDlgComponent, TreeRenameNodeDlgComponent, TreeDeleteNodeDlgComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [TreeAddNodeDlgComponent, TreeRenameNodeDlgComponent, TreeDeleteNodeDlgComponent],
})
export class TreeDialogsModule { }
