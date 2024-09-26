import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("content")

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file:Express.Multer.File, @Body() createContentDto: CreateContentDto) {
    console.log(file)
    return this.contentService.create(createContentDto,"dsdsd");
  }

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.update(+id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentService.remove(+id);
  }
}
