import { IsString } from 'amala'

export default class UUID {
  @IsString()
  uuid!: string
}
