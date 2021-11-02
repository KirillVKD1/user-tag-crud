import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  createTag(createTagDto: CreateTagDto) {
    return 'This action adds a new tag';
  }

  getTags() {
    return `This action returns all tags`;
  }

  getTag(id: number) {
    return `This action returns a #${id} tag`;
  }

  updateTag(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  deleteTag(id: number) {
    return `This action removes a #${id} tag`;
  }
}
