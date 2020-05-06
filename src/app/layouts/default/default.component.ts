import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  host: {
    "(window:click)": "closeSidebar($event)"
  }
})
export class DefaultComponent implements OnInit {

  constructor() { }

  isOpened: boolean = false;

  ngOnInit(): void {
  }

  sideBarToggler($event): void {
    $event.stopPropagation();
    this.isOpened = !this.isOpened;
  }

  closeSidebar($event) {
    console.log($event);
    this.isOpened = false;
  }

}
