export class Hero {
  id: number;
  name: string;
  cpf: string;
  age: number;
  nationality: string;
  hasSpecialPower: boolean;
  specialPower: string;

  constructor(hero: any) {
    this.id = hero.id;
    this.name = hero.name;
    this.cpf = hero.cpf;
    this.age = hero.age;
    this.nationality = hero.nationality;
    this.hasSpecialPower = hero.hasSpecialPower;
    this.specialPower = hero.specialPower;
  }
}
