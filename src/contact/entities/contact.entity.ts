import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// export class Content {

    @Entity()
    export class Contact {
        @PrimaryGeneratedColumn()
        id: number;
      
        @Column()
        name: string;
      
        @Column()
        email: string;
      
        @Column()
        phone: number;
      
        @Column()
        message: string;
      
        @Column({ default: true })
        isActive: boolean;
}
