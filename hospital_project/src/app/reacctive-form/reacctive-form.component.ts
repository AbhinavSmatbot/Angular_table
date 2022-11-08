import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reacctive-form',
  templateUrl: './reacctive-form.component.html',
  styleUrls: ['./reacctive-form.component.css']
})
export class ReacctiveFormComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      pcode: new FormControl(''),
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

}
