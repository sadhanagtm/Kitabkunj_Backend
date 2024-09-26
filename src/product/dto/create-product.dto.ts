import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

    @ApiProperty()
    image:string

    
    @ApiProperty()
    name: string;


    @ApiProperty()
    message: string;
    
    @ApiProperty()
    isActive: boolean;

}
