import { Component, OnInit } from '@angular/core';
import { Province } from '../province';

@Component({
  selector: 'app-care-area',
  templateUrl: './care-area.component.html',
  styleUrls: ['./care-area.component.css']
})
export class CareAreaComponent implements OnInit {

  provinces: Province[] = [
    {id: 1 ,province: 'จังหวัดทั้งหมด'},
    {id: 2 ,province: 'ราชบุรี'},
    {id: 3 ,province: 'นนทบุรี'},
    {id: 4 ,province: 'เพชรบุรี'},
    {id: 5 ,province: 'กรุงเทพ'},
    {id: 6 ,province: 'สุพรรณบุรี'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
