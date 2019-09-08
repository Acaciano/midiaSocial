import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-twitter',
  templateUrl: './label-twitter.component.html',
  styleUrls: ['./label-twitter.component.css']
})
export class LabelTwitterComponent implements OnInit {

  @Input() tweet:string;
  @Input() img:string;
  @Input() user:string;
  @Input() date:string;

  constructor() { }

  ngOnInit() {
  }

}
