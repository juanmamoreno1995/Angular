import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cosas',
  templateUrl: './cosas.component.html',
  styleUrls: ['./cosas.component.css']
})
export class CosasComponent implements OnInit {
  @Input() nombreCosa;
  constructor() { }

  ngOnInit() {
  }

}
