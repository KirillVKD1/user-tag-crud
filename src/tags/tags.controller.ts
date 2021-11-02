import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tag')
export class TagsController {
  constructor(private readonly tagsService: TagsService) { }

  @Get()
  getTags() {
    return this.tagsService.getTags();
  }

  @Get(':id')
  getTag(@Param('id') id: string) {
    return this.tagsService.getTag(+id);
  }

  @Post()
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.createTag(createTagDto);
  }


  @Patch(':id')
  updateTag(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.updateTag(+id, updateTagDto);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: string) {
    return this.tagsService.deleteTag(+id);
  }
}
