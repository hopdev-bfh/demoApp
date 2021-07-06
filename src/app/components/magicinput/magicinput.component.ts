import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-magicinput',
  templateUrl: './magicinput.component.html',
  styleUrls: ['./magicinput.component.css']
})
export class MagicinputComponent implements OnInit {

  magicNumber: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
