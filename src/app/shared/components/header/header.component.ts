import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Input() isOpened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar($event): void {
    console.log($event.target.style);
    this.toggleSidebarForMe.emit($event);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
