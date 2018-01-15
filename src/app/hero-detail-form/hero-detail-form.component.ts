import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';


interface ValidationResult {
  [key: string]: boolean;
}

@Component({
  selector: 'app-hero-detail-form',
  templateUrl: './hero-detail-form.component.html',
  styleUrls: ['./hero-detail-form.component.css']
})
export class HeroDetailFormComponent implements OnInit {
  
  heroVm: Hero;
  heroForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const routeID = this.route.snapshot.params.id;
    if (routeID) {
      this.heroService.getHero(routeID)
        .subscribe(hero => {
          this.heroVm = new Hero(hero);
          this.buildForm();
        },
        err => {
          console.log(err);
        });
    } else {
      this.heroVm = new Hero({});
      this.buildForm();
    }
  }

  buildForm() {
    this.heroForm = this.fb.group({
      name: [this.heroVm.name, Validators.required],
      age: [this.heroVm.age, Validators.required],
      cpf: [this.heroVm.cpf, Validators.compose([Validators.required, this.validateCPF])],
      nationality: [this.heroVm.nationality, Validators.required],
      specialPower: [this.heroVm.specialPower, Validators.required],
      email: [this.heroVm.email, Validators.compose([Validators.email, Validators.required]) ],
    });
  }

  changeHasPower() {
    const special_power = this.heroForm.get('specialPower');
    if (!this.heroVm.hasSpecialPower) {
      special_power.setValidators(null);
    } else {
      special_power.setValidators(Validators.required);
    }
    special_power.updateValueAndValidity();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.heroVm)
      .subscribe(() => this.goBack());
  }


  validateCPF(control: AbstractControl): ValidationResult {
    let strCPF = control.value;
    var Soma;
    var Resto;
    Soma = 0;
    if (!strCPF) return null;
    strCPF = strCPF.replace(/[\D]/g, '');
    if (strCPF == "00000000000" ||
      strCPF == "11111111111" ||
      strCPF == "22222222222" ||
      strCPF == "33333333333" ||
      strCPF == "44444444444" ||
      strCPF == "55555555555" ||
      strCPF == "66666666666" ||
      strCPF == "77777777777" ||
      strCPF == "88888888888" ||
      strCPF == "99999999999") return { "invalidCPF": true };
    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return { "invalidCPF": true };
    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return { "invalidCPF": true };
    return null;
  }

}
