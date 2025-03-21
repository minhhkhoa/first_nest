import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

//- đánh dấu class này là một service
@Injectable()
export class CatService {
  private readonly cats: Cat[] = [
    {
      name: 'Cat 1',
      age: 1,
      breed: 'Breed 1',
    },
    {
      name: 'Cat 2',
      age: 2,
      breed: 'Breed 2',
    },
    {
      name: 'Cat 3',
      age: 3,
      breed: 'Breed 3',
    },
  ];
  findAllCats(): Cat[] {
    return this.cats;
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }
}
