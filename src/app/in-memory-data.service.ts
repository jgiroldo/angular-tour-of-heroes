import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', age: 150, nationality:'Cubano', hasSpecialPower:'false', specialPower:''  },
      { id: 12, name: 'Narco', age: 150, nationality:'Alemao', hasSpecialPower:'true', specialPower:'invisibilidade' },
      { id: 13, name: 'Bombasto', age: 25, nationality:'Brasileiro', hasSpecialPower:'true', specialPower:'Corrupto' },
      { id: 14, name: 'Celeritas' , age: 200, nationality:'Argentino', hasSpecialPower:'false', specialPower:''},
      { id: 15, name: 'Magneta' , age: 111, nationality:'Cuban', hasSpecialPower:'false', specialPower:''},
      { id: 16, name: 'RubberMan' , age: 150, nationality:'Cuban', hasSpecialPower:'false', specialPower:''},
      { id: 17, name: 'Dynama' , age: 150, nationality:'Cuban', hasSpecialPower:'false', specialPower:''},
      { id: 18, name: 'Dr IQ' , age: 150, nationality:'Cuban', hasSpecialPower:'false', specialPower:''},
      { id: 19, name: 'Magma' , age: 150, nationality:'Cuban', hasSpecialPower:'false', specialPower:''},
      { id: 20, name: 'Tornado', age: 150, nationality:'Cuban', hasSpecialPower:'false', specialPower:'' }
    ];
    return {heroes};
  }
}
