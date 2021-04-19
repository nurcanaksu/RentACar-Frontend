import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors: Color[] = [];
  apiUrl = 'https://localhost:44322/api/colors/getall';
  constructor(private httpClients: HttpClient) {} 

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClients.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
 