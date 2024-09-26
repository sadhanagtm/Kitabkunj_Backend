
 //This is testimonial section
 
 
 import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;


  @Column()
  message: string;

  @Column({ default: true })
  isActive: boolean;

//   @OneToMany(type => Photo, photo => photo.user)
//   photos: Photo[];
}

