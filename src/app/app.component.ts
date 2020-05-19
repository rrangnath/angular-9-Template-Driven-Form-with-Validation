import { Component, VERSION } from '@angular/core';
import { Iemployee } from './employee'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string = 'This is Rangnath Mishra ';

    employee: Iemployee = {
    id:null,
    name:null,
    email:null,
    gender:null,
    phoneNumber:null,
    department:null,
    isActive:null
  }

  departments = [
    {id:1, name:'Help Desk'},
    {id:2, name:'HR'},
    {id:3, name:'IT'},
    {id:4, name:'Paroll'}
  ];

  saveEmployee(){
    // this.commonService._postEmployee(this.employee).subscribe((data:Iemployee) => {
    //     console.log(data);
    //      this.getNewemployee(); 
    //    },
    //    (error:any) => console.log(error)
    //    );
  }
}
