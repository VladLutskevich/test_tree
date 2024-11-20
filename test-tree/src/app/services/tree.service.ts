import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { treeGuid, TreeNode } from '../models/tree.model';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class TreeService {

  constructor(private httpClient: HttpClient) { }

  getTree(): Observable<TreeNode>{
    return this.httpClient.post<TreeNode>(baseUrl + `/api.user.tree.get?treeName=${treeGuid}`, {});
  }

  addNode(parentNodeId: number, nodeName: string): Observable<any>{
    return this.httpClient.post(baseUrl + `/api.user.tree.node.create?treeName=${treeGuid}&parentNodeId=${parentNodeId}&nodeName=${nodeName}`, {});
  }

  renameNode(nodeId: number, newNodeName: string): Observable<any>{
    return this.httpClient.post(baseUrl + `/api.user.tree.node.rename?treeName=${treeGuid}&nodeId=${nodeId}&newNodeName=${newNodeName}`, {});
  }

  deleteNode(nodeId: number): Observable<any>{
    return this.httpClient.post(baseUrl + `/api.user.tree.node.delete?treeName=${treeGuid}&nodeId=${nodeId}`, {});
  }

}
