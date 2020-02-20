import faker from 'faker';
import { Mappable } from './customMap';

export class Company implements Mappable {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
    <h1>Company Name: ${this.companyName}
    <h3>Catch Phrase: ${this.catchPhase}
    `;
  }
}
