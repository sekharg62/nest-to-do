import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config'

@Injectable()
export class EvService {
    constructor(private configureservice:ConfigService){ }
        getDbUrl(){
            return this.configureservice.get<string>('DATABASE_URL')
        }
   
}
