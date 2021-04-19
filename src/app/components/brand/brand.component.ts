import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  // brand1:any = {id:1 , brandName:'Audi' }
  // brand2:any = {id:2 , brandName:'BMW' }
  // brand3:any = {id:3 , brandName:'Jeep' }
  // brand4:any = {id:4 , brandName:'Jaguar' }
  // brand5:any =  {id:5 , brandName:'Nissan' }

  // brands=[ this.brand1 , this.brand2, this.brand3, this.brand4, this.brand5 ]; //diziye attık hepsini..

  brands: Brand[] = [];
  currentBrand: Brand;
  dataLoaded = false;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
