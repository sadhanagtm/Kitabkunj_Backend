import { ApiProperty } from "@nestjs/swagger";


export class CreateContactDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email:string;

    
    @ApiProperty()
    phone: number;

    @ApiProperty()
    message: string;
    
    @ApiProperty()
    isActive: boolean;

    
}
