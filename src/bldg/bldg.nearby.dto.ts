import { IsNumber } from "class-validator";


export class BldgNearbyBldgDto {

    @IsNumber()
    x: number;

    @IsNumber()
    y: number;

    @IsNumber()
    radius: number;
}