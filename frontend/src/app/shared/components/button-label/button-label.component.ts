import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-label',
  templateUrl: './button-label.component.html',
  styleUrls: ['./button-label.component.css']
})
export class ButtonLabelComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
