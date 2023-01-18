import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { Food } from './models/food.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/switchMap';
import { tap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers : HttpHeaders;
 
  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    
   }

  addUser(data){
    return this.http.post('http://localhost/sia/backend/api/addUser.php', data, {responseType: 'text'});
  }

  logUser(data){
    return this.http.post('http://localhost/sia/backend/api/login.php', data)
    .timeout(59000)
    .map(res => res);
  }
  prodList() :Observable<Food[]>{
    return this.http.get<Food[]>('http://localhost/sia/backend/api/products.php');
    }

  prodList2() :Observable<Food[]>{
      return this.http.get<Food[]>('http://localhost/sia/backend/api/product2.php');
    }
  
  prodList3() :Observable<Food[]>{
      return this.http.get<Food[]>('http://localhost/sia/backend/api/product3.php');
    }

  prodID(id : number): Observable<Food>{
    return this.http.get<Food>('http://localhost/sia/backend/api/getProducts.php?id='+id);
    }

  getUser(id : number){
      return this.http.get('http://localhost/sia/backend/api/getUser.php?id='+id);
  }

  updateUser(id , data){
    return this.http.put('http://localhost/sia/backend/api/updateProfile.php?id='+id,data, {responseType: 'text'});
  }

  cashIn(id , data){
    return this.http.put('http://localhost/sia/backend/api/cashIn.php?id='+id,data, {responseType: 'text'});
  }

  getCash(id){
    return this.http.get('http://localhost/sia/backend/api/cashIn.php?id='+id);
  }

// For Admin's CRUD
  getAdmin(){
    return this.http.get('http://localhost/sia/backend/api/getAdmin.php');
  }

  getUsers(){
    return this.http.get('http://localhost/sia/backend/api/getUsers.php');
  }

  getStaffs(){
    return this.http.get('http://localhost/sia/backend/api/getStaffs.php');
  }

  getRequest(){
    return this.http.get('http://localhost/sia/backend/api/getRequest.php');
  }

  delStaffs(id){
    return this.http.delete('http://localhost/sia/backend/api/getStaffs.php?id='+id);
  }

  delUser(id){
    return this.http.delete('http://localhost/sia/backend/api/getUsers.php?id='+id);
  }

  delAdmin(id){
    return this.http.delete('http://localhost/sia/backend/api/getAdmin.php?id='+id);
  }

  update(id , data){
    return this.http.put('http://localhost/sia/backend/api/update.php?id='+id,data, {responseType: 'text'});
  }

  verify(id , data){
    return this.http.put('http://localhost/sia/backend/api/verify.php?id='+id,data, {responseType: 'text'});
  }

// For Staff's CRUD

//Chocolate Bars
  getBars(){
    return this.http.get('http://localhost/sia/backend/api/getBars.php');
  }

  getSingleBars(id){
    return this.http.get('http://localhost/sia/backend/api/getSingleBar.php?id='+id);
  }

  delBars(id){
    return this.http.delete('http://localhost/sia/backend/api/getBars.php?id='+id);
  }

  addBars(data){
    return this.http.post('http://localhost/sia/backend/api/getBars.php', data, {responseType: 'text'});
  }

  updateBars(id, data){
    return this.http.put('http://localhost/sia/backend/api/getBars.php?id='+id, data, {responseType: 'text'});
  }

//Chocolate Blocks 

  getBlocks(){
    return this.http.get('http://localhost/sia/backend/api/getBlocks.php');
  }

  getSingleBlocks(id){
    return this.http.get('http://localhost/sia/backend/api/getSingleBlocks.php?id='+id);
  }

  delBlocks(id){
    return this.http.delete('http://localhost/sia/backend/api/getBlocks.php?id='+id);
  }

  addBlocks(data){
    return this.http.post('http://localhost/sia/backend/api/getBlocks.php', data, {responseType: 'text'});
  }

  updateBlocks(id, data){
    return this.http.put('http://localhost/sia/backend/api/getBlocks.php?id='+id, data, {responseType: 'text'});
  }

//Chocolate Boxes

  getBoxes(){
    return this.http.get('http://localhost/sia/backend/api/getBoxes.php');
  }

  getSingleBoxes(id){
    return this.http.get('http://localhost/sia/backend/api/getSingleBoxes.php?id='+id);
  }

  delBoxes(id){
    return this.http.delete('http://localhost/sia/backend/api/getBoxes.php?id='+id);
  }

  addBoxes(data){
    return this.http.post('http://localhost/sia/backend/api/getBoxes.php', data, {responseType: 'text'});
  }

  updateBoxes(id, data){
    return this.http.put('http://localhost/sia/backend/api/getBoxes.php?id='+id, data, {responseType: 'text'});
  }

}

 

