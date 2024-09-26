
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookimage: string;

  @Column()
  bookname: string;

  @Column()
  bookprice: string;

  @Column()
  bookitems: string;

  @Column({ default: true })
  isActive: boolean;

//   @OneToMany(type => Photo, photo => photo.user)
//   photos: Photo[];
}

