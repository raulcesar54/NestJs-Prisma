import { Injectable, Post } from '@nestjs/common';
import { CreateBookerDto } from './dto/create-booker.dto';
import { UpdateBookerDto } from './dto/update-booker.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookerService {
  constructor(private readonly prisma: PrismaService) {}

  createCompany(createBookerDto: CreateBookerDto) {
    return this.prisma.commpany.create({
      data: {
        cnpj: createBookerDto.cnpj,
        avatar: createBookerDto.avatar,
        name: createBookerDto.name,
      },
    });
  }

  findAll() {
    return this.prisma.commpany.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} booker`;
  }

  update(id: number, updateBookerDto: UpdateBookerDto) {
    return `This action updates a #${id} booker`;
  }

  remove(id: number) {
    return `This action removes a #${id} booker`;
  }
}
