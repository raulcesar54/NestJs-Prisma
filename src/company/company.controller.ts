import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto).catch((e) => {
      console.log();
      throw new NotFoundException(e.message);
    });
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
