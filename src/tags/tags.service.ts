import { Injectable } from '@nestjs/common';
import { Tag, UpdateTag } from './tags.dto';

@Injectable()
export class TagsService {
  getTags() {
    return `This action returns all tags`;
  }

  getTag(id: number) {
    return `This action returns a #${id} tag`;
  }

  createTag(tag: Tag) {
    return 'This action adds a new tag';
  }

  updateTag(id: number, tag: UpdateTag) {
    return `This action updates a #${id} tag`;
  }

  deleteTag(id: number) {
    return `This action removes a #${id} tag`;
  }
}
