import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  id: string = "1aIrNBObXq_OnCWL3pfEII7CAEVvPFu3C";
  isloading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isloading = false;
    }, 5000)
  }

}
