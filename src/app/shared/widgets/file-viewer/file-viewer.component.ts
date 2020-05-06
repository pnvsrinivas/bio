import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss']
})
export class FileViewerComponent implements OnInit {

  @Input() id: string;
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/viewer?srcid=${this.id}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`);
  }

  isIframeLoaded() {
    console.log("iframe loaded...");
    console.log(document.getElementsByClassName('ndfHFb-c4YZDc-Wrql6b'));
  }

}
