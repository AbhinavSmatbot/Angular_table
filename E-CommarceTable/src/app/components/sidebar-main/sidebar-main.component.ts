import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.css']
})
export class SidebarMainComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  public activeData:string = 'send_message';
  getPage(msg:string):void{
   this.activeData = msg;
  //  if(this.activeData == 'view_message'){
  //   // alert('sdfdsfdsfsdfdsf')
  //  }
  }
}
