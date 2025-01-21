import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  email: string = "";
  password: string = "";
  password_confirm: string = "";



  constructor(private navController: NavController,) {


  }

  ngOnInit() {
  }

  register(form: NgForm) {
    console.log('form:', form.value);
    console.log(form.valid);
    console.log(form.invalid);



    if (form.invalid) {

      this.navController.navigateBack('/home')

    }

  }

}
