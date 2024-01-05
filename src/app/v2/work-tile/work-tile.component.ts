import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

declare global {
  class WorkTile {
    img : string | undefined;
    roles : Role[];
    dates : string | undefined;
    url: string | undefined;
    overlayText : string | undefined;
  }

  class Role {
    jobTitle : string | undefined;
    subTitle : string | undefined;
  }
}

@Component({
  selector: 'app-work-tile',
  templateUrl: './work-tile.component.html',
  styleUrls: ['./work-tile.component.css']
})
export class WorkTileComponent {
  @Input() workTile: WorkTile = {
    img : undefined,
    roles: [],
    dates: undefined,
    url: undefined,
    overlayText: undefined
  };
  shouldShowOverlay : boolean = false;

  showOverlay() {
    this.shouldShowOverlay = true;
  }

  hideOverlay() {
    this.shouldShowOverlay = false;
  }

  goToUrl() {
    if (this.workTile.url != undefined) {
      window.location.href = this.workTile.url;
    } else {
      console.error('attempted to navigate to a url that was undefined');
    }
  }
}
