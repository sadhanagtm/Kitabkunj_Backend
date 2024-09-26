import { ApiProperty } from "@nestjs/swagger";


export class CreateContentDto {
    @ApiProperty()
    bookimage: string;

    @ApiProperty()
    bookname:string

    
    @ApiProperty()
    bookprice: number;

    @ApiProperty()
    bookitems: number;
    
    @ApiProperty()
    isActive: boolean;

    
}
