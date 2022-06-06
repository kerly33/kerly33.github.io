import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  search: String = "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  index() {
    this.router.navigate(['']);
  }

  comments() {
    this.router.navigate(['']);
  }

  contact() {
    this.router.navigate(['']);
  }
  
}
