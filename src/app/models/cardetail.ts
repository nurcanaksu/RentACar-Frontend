import { CarImage } from "./carImage";

export interface Cardetail{ //carDetailDto
    id:number;
    carName:string;
    brandID:number;
    colorID:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
    brandName:string;
    colorName:string;
    carImage: CarImage[];
}