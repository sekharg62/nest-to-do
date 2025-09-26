import { Controller, Get } from '@nestjs/common';
import { EvService } from './ev.service';

@Controller('ev')
export class EvController {
    constructor(private readonly evservice: EvService) { }
    @Get()
    getUrl() {
        return this.evservice.getDbUrl()
    }
}
