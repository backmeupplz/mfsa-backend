import { Controller, Get } from 'amala'

@Controller('/')
export default class RootController {
  @Get('/')
  async root() {
    return 'Nothing to see here, move along'
  }
}
