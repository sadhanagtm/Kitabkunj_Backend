import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    email:string;

    @ApiProperty()
    password: string;
    
    @ApiProperty()
    phone: string;

    @ApiProperty()
    dateofbirth: Date;

    @ApiProperty()
    gender: string;
    
    @ApiProperty()
    isActive: boolean;

    
}
