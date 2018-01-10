import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    $('#dater').bootstrapMaterialDatePicker({ weekStart : 0, time: false });
    $('#dater1').bootstrapMaterialDatePicker({ weekStart : 0, time: false });

  }
  
fromDate(){
  $('#dater').focus()
}
toDate(){
  $('#dater1').focus()
}
}
