import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import {
  CreateTagRes,
  GetTagRes,
  GetTagsRes,
  Tag,
  UpdateTag,
} from './tags.dto';
import { TagsService } from './tags.service';

@Controller('tag')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetTagsRes,
  })
  getTags() {
    return this.tagsService.getTags();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetTagRes,
  })
  getTag(@Param('id') id: string) {
    return this.tagsService.getTag(+id);
  }
  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateTagRes,
  })
  createTag(@Body() createTagDto: Tag) {
    return this.tagsService.createTag(createTagDto);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetTagRes,
  })
  updateTag(@Param('id') id: string, @Body() updateTagDto: UpdateTag) {
    return this.tagsService.updateTag(+id, updateTagDto);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: string) {
    return this.tagsService.deleteTag(+id);
  }
}
