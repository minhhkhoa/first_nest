import {
  Controller,
  Get,
  // HttpCode,
  // Post,
  Redirect,
  Param,
  Query,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interface';

type dataResponse = {
  message: string;
  data?: Cat[];
};

//- định nghĩa một controller với đường dẫn /cats
@Controller('cats')
export class CatController {
  //- inject service vào controller thông qua constructor (dependency injection)
  constructor(private appService: CatService) {}

  //- định nghĩa một phương thức GET với đường dẫn /cats
  //- khi có request GET tới /cats, phương thức này sẽ được gọi
  @Get('sleep') //- đường dẫn cuối cùng sẽ là /cats/sleep
  getCatsSleep(): dataResponse {
    if (this.appService.findAllCats()) {
      return {
        message: 'Successw',
        data: this.appService.findAllCats(),
      };
    } else {
      return {
        message: 'No data',
      };
    }
  }

  //-Redirect
  @Get('eat') //- đường dẫn cuối cùng sẽ là /cats/eat
  @Redirect('http://localhost:3000/cats/sleep/xc', 302) //- chuyển hướng đến đường dẫn khác
  getCatsEat(): { url: string; statusCode: number } | string {
    const a = true;
    if (a) {
      return { url: 'http://localhost:3000/cats/sleep/xcddd', statusCode: 302 }; //-Các giá trị trả về sẽ ghi đè lên bất kỳ đối số nào được truyền cho @Redirect()
    }
    return 'false';
  }

  @Get('createCat') //- đường dẫn cuối cùng sẽ là /cats/createCat
  // @Header('Cache-Control', 'no-store') //-
  // @HttpCode(204) //- ép trả về status code 204
  createCat() {
    this.appService.create({ name: 'Cat 4', age: 4, breed: 'Breed 4' });
  }
  //-Path parameters
  @Get('detail/:ida') //- đường dẫn cuối cùng sẽ là /cats/1
  findCat(@Param('ida') id: string): string {
    console.log('params: ', id);
    return `This action returns a #${id} cat`;
  }

  //-Query string
  @Get()
  filterCats(
    @Query('name') nameCat: string,
    @Query('age') ageCat: number,
  ): string {
    console.log('Name: ', nameCat);
    console.log('Age: ', ageCat);
    return `This action returns a cat with name: ${nameCat} and age: ${ageCat}`;
  }
}
