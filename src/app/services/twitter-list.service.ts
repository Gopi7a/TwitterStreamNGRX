import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TwitterListService {
  public channel = 'pubnub-twitter';
  constructor(private pubnub: PubNubAngular) {
    this.pubnub.init({
      subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
    });
    this.pubnub.subscribe({
      channels: [this.channel],
      triggerEvents: true,
      withPresence: true,
      autoload: 100
    });
  }

  getAll() {
    return of(this.pubnub.getMessage(this.channel));
  }

}
