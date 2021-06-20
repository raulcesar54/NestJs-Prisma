import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneCompany(cnpj: string) {
    return this.prisma.commpany.findFirst({
      where: { cnpj },
    });
  }

  async create(createCompanyDto: CreateCompanyDto) {
    const verifyCnpj = await this.findOneCompany(createCompanyDto.cnpj);

    if (!createCompanyDto.avatar) {
      throw Error('Avatar is required');
    }
    if (!createCompanyDto.name) {
      throw Error('Name is required');
    }
    if (!createCompanyDto.cnpj) {
      throw Error('Cnpj is required');
    }
    if (verifyCnpj) {
      throw Error('Company already registered');
    }

    return this.prisma.commpany.create({
      data: {
        cnpj: createCompanyDto.cnpj,
        name: createCompanyDto.name,
        avatar: createCompanyDto?.avatar,
      },
    });
  }

  async findAll() {
    return await this.prisma.commpany.findMany();
  }

  async findOne(id: number) {
    const findCompany = await this.prisma.commpany.findFirst({
      where: { id },
    });
    if (!findCompany) {
      throw Error('Company not found');
    }
    return findCompany;
  }

  async update(id: number, createCompanyDto: UpdateCompanyDto) {
    const findCompany = await this.prisma.commpany.findFirst({
      where: { id },
    });
    if (!findCompany) {
      throw Error('Company not found');
    }
    return this.prisma.commpany.update({
      where: { id },
      data: {
        avatar: createCompanyDto.avatar,
        name: createCompanyDto.name,
      },
    });
  }

  async remove(id: number) {
    const findCompany = await this.prisma.commpany.findFirst({
      where: { id },
    });
    if (!findCompany) {
      throw Error('Company not found');
    }
    await this.prisma.commpany.delete({ where: { id } });
    return '';
  }
}
