import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  

  cars:Car[]=[];
  apiUrl='https://localhost:44322/api/';
  constructor(private httpClient:HttpClient) { }
 
  getCars():Observable<ListResponseModel<Car>>
  {
    let newPath= this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>
  {
    let newPath=this.apiUrl + "cars/getbybrandid?id=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByColor(colorId:number):Observable<ListResponseModel<Car>>
  {
    let newPath=this.apiUrl + "cars/getbycolorid?id=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 


} 
