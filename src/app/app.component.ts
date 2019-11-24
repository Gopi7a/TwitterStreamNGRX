import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PubNubAngular]
})
export class AppComponent {
  title = 'no';
  constructor(pubnub: PubNubAngular) {
    pubnub.init({
      publishKey: 'pub-c-0ed6423a-5ac1-4db5-a717-f12896ec0933',
      subscribeKey: 'sub-c-856e1964-0e1c-11ea-9d22-32c7c2eb6eff'
    });
  }
}
