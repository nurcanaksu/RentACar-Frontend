import { Component } from '@angular/core';
//datayı yönettiğim yer.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentacar';
  user:string="Nurcan" //user:string yazarsan tip güvenli olur bu kod.
  //product:any= {productId:1, productName:'bardak', categoryId:3, unitPrice:60} 
  //any her şey olabilir demek. {} obje demek2
  
  // brand1:any = {id:1 , brandName:'Audi' }
  // brand2:any = {id:2 , brandName:'BMW' }
  // brand3:any = {id:3 , brandName:'Jeep' }
  // brand4:any = {id:4 , brandName:'Jaguar' }
  // brand5:any =  {id:5 , brandName:'Nissan' } 

  // brands=[ this.brand1 , this.brand2, this.brand3, this.brand4, this.brand5 ]; //diziye attık hepsini..
}



//burda yazılan her şeyi app.component.html kullanır {{bu şekilde.}}
