import { Component } from '@angular/core';
import { User } from 'src/assets/user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital_project';
  // getdetails:string = '';
  // getAllData:Array<string> = [];
  // getList(){
  //   this.getAllData.push(this.getdetails);
  //   this.getdetails = '';
  // }

   topics = ['angular','react','array','vue'];
  userModel = new User('rob','test@gmail.com',6425939732,'','morning',true);

  constructor(private _enrollmentService: EnrollmentService){}

  getNamevalue(value:string){
    console.log('gatName',value);
    if(value == 'rahul'){
      console.log('rahul is good boy');
    }
  }
  getSelectvalue(value:string){
    console.log('gatName',value);
    if(value == 'react'){
      console.log('rahul is good boy');
      // this.toastr.error('rahul is good boy')
    }
  }

  onSubmit(){
    console.log('userModel',this.userModel);
    // console.log('sd',this.userModel.username)
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('!success',data),
      error => console.log('!error',error)
    )
  }









}
