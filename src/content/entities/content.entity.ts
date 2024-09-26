import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// export class Content {

    @Entity()
    export class Content {
        @PrimaryGeneratedColumn()
        id: number;
      
        @Column()
        bookimage: string;
      
        @Column()
        bookname: string;
      
        @Column()
        bookprice: number;
      
        @Column()
        bookitems: number;
      
        @Column({ default: true })
        isActive: boolean;
}
