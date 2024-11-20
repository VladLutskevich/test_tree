import { Component, OnInit, Signal, signal } from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { TreeNode } from '../../models/tree.model';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { map, Observable, startWith, Subject, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TreeDialogsModule } from './tree-crud-dialogs/tree-dialogs.module';
import { TreeAddNodeDlgComponent } from './tree-crud-dialogs/tree-add-node-dlg/tree-add-node-dlg.component';
import { MatDialog } from '@angular/material/dialog';
import { TreeRenameNodeDlgComponent } from './tree-crud-dialogs/tree-rename-node-dlg/tree-rename-node-dlg.component';
import { TreeDeleteNodeDlgComponent } from './tree-crud-dialogs/tree-delete-node-dlg/tree-delete-node-dlg.component';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss'],
    standalone: true,
    imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule, TreeDialogsModule],
})
export class TreeComponent implements OnInit {

  refreshTree$: Subject<void> = new Subject();

  tree$: Observable<TreeNode[]>;

  dataSource: Signal<TreeNode[]>;

  selectedNodeId = signal(0);

  childrenAccessor = (node: TreeNode) => node.children ?? [];
  hasChild = (node: TreeNode) => !!node.children && node.children.length > 0;

  constructor(
    private treeService: TreeService,
    private dialog: MatDialog,
  ) {
    this.tree$ = this.refreshTree$.pipe(
      startWith(undefined),
      switchMap(() => this.treeService.getTree().pipe(map(res => {
        res.name = 'Root';
        return [res];
      })))
    );
    this.dataSource = toSignal(this.tree$, {initialValue: []});
  }

  ngOnInit(): void {
  }

  selectNode(id: number){
    this.selectedNodeId.set(id);
  }

  addNode(event: Event, id: number){
    event.stopPropagation();
    let dialogRef = this.dialog.open(TreeAddNodeDlgComponent, {
      data: { id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.treeService.addNode(id, result).subscribe(res => {
          this.refreshTree$.next();
        });
      }
    });
  }

  renameNode(event: Event, id: number, name: string){
    event.stopPropagation();
    let dialogRef = this.dialog.open(TreeRenameNodeDlgComponent, {
      data: { id, name },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.treeService.renameNode(id, result).subscribe(res => {
          this.refreshTree$.next();
        });
      }
    });
  }

  deleteNode(event: Event, id: number, name: string){
    event.stopPropagation();
    let dialogRef = this.dialog.open(TreeDeleteNodeDlgComponent, {
      data: { id, name },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.treeService.deleteNode(id).subscribe(res => {
          this.refreshTree$.next();
        });
      }
    });
  }

}
