import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  // color1:any = {id:1 , colorName:'Blue' }
  // color2:any = {id:2 , colorName:'Red' }
  // color3:any = {id:3 , colorName:'Green' }
  // color4:any = {id:4 , colorName:'Grey' }
  // color5:any =  {id:5 , colorName:'Purple' }

  // colors:Color[]=[ this.color1 , this.color2, this.color3, this.color4, this.color5 ];

  colors: Color[] = [];
  currentColor:Color;
  dataLoaded = false;

  // colorResponseModel:ColorResponseModel=
  // {
  //   data: this.colors,
  //   message:"",
  //   success:true
  // };

  constructor(
    private colorService: ColorService //http client türünde nesne istiyorum demiş oluyosun
  ) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColor(color:Color)
  { 
    this.currentColor=color;
  }  

  getCurrentColorClass(color:Color)
  {
    if(color==this.currentColor)
    {
       return "list-group-item active"
    }else{
      return "list-group-item"
    }
  } 

  

}
