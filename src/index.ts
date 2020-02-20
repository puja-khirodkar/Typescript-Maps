import { User } from './User';
import { CustomMap } from './CustomMap';
import { Company } from './Company';

const customMap = new CustomMap('map');

const user = new User();
customMap.addUserMarker(user);

const company = new Company();
customMap.addCompanyMarker(company);
