import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {

    @ApiProperty()
    bookimage: string;

    @ApiProperty()
    bookname:string

    
    @ApiProperty()
    bookprice: string;

    @ApiProperty()
    bookitems: string;
    
    @ApiProperty()
    isActive: boolean;

}
