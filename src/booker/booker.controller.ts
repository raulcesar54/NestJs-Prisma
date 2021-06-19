import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookerService } from './booker.service';
import { CreateBookerDto } from './dto/create-booker.dto';
import { UpdateBookerDto } from './dto/update-booker.dto';

@Controller('booker')
export class BookerController {
  constructor(private readonly bookerService: BookerService) {}

  @Post()
  create(@Body() createBookerDto: CreateBookerDto) {
    return this.bookerService.create(createBookerDto);
  }

  @Get()
  findAll() {
    return this.bookerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookerDto: UpdateBookerDto) {
    return this.bookerService.update(+id, updateBookerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookerService.remove(+id);
  }
}
