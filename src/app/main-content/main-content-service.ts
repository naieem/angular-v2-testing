import {
  Injectable
} from '@angular/core';
import {
  PEOPLES
} from './mock-data';

@Injectable()
export class PeopleService {
  getPeoples() {
    return PEOPLES;
  }
}
