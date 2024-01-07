import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {
  @Input() title : string | undefined;
  @Input() tiles : Tile[] = [{
    videoUrl : undefined,
    pageUrl: undefined,
    label: undefined,
    startTime: 0
  }];
  @Input() buttonText : string | undefined = undefined;
  hasButton: boolean = false;
  @Input() buttonFunction: () => void = () => {};
  
  ngOnInit() {
    this.hasButton = this.buttonText != undefined;
  }
}
