import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {
  @Input() visits;
  constructor(private http: HttpClient, private ruta: Router) { }

  ngOnInit() {
    console.log(this.visits)
  }

}
