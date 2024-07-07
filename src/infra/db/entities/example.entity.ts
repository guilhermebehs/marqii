import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExampleChildEntity } from './example-child.entity';

@Entity({ name: 'example' })
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birth: string;

  @OneToMany(() => ExampleChildEntity, (child) => child.example)
  childs: ExampleChildEntity[];
}
