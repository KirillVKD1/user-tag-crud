import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { UserResDto } from "src/users/users.dto"

export class Tag {
    @ApiProperty({
        type: String,
        description: 'Tag name',
    })
    name: string

    @ApiProperty({
        type: Number,
        description: 'Sort order',
        default: 0
    })
    sortOrder: number
}

export class UpdateTag {
    @ApiPropertyOptional({
        type: String,
        description: 'Tag name',
    })
    name?: string

    @ApiPropertyOptional({
        type: Number,
        description: 'Sort order',
        default: 0
    })
    sortOrder?: number
}

export class CreateTagRes extends Tag {
    @ApiProperty()
    id: number
}

export class Meta {
    @ApiProperty()
    offset: number

    @ApiProperty()
    length: number

    @ApiProperty()
    quantity: number
}

export class GetTagRes extends Tag {
    @ApiProperty({
        type: () => UserResDto
    })
    creator: UserResDto
}

export class GetTagsRes {
    @ApiProperty({
        type: [GetTagRes]
    })
    data: GetTagRes[]

    @ApiProperty({
        type: Meta
    })
    meta: Meta
}
