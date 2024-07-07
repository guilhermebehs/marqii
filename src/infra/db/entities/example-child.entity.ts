import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExampleEntity } from './example.entity';

@Entity({ name: 'example_child' })
export class ExampleChildEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ExampleEntity, (example) => example.childs)
  example: ExampleEntity;
}
