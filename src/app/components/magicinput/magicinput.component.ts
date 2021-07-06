import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-magicinput',
  templateUrl: './magicinput.component.html',
  styleUrls: ['./magicinput.component.css']
})
export class MagicinputComponent implements OnInit {

  @Input() withPipe: string | undefined;

  magicNumber: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
