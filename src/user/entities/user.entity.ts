import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// export class Content {

    @Entity()
    export class User {
        @PrimaryGeneratedColumn()
        id: number;
      
        @Column()
        username: string;
      
        @Column()
        email: string;
      
        @Column()
        password: string;
      
        @Column()
        phone: string;

        @Column()
        dateofbirth: Date;

        @Column()
        gender: string;
      
        @Column({ default: true })
        isActive: boolean;
}
