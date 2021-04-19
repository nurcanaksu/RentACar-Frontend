import { BrandService } from "../services/brand.service";
import { Brand } from "./brand";

export interface Car {
    //carname i int yapıp tabloyu değiştireblirsin view designdan
    carName:string;
    brandID:number;
    brandName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    colorID:number;

   
}
