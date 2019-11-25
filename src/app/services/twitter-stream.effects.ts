import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TwitterListService } from '../services/twitter-list.service';
import * as TwitterActions from '../actions/twitter.actions';

@Injectable()

export class TwitterStreamEffects {
  channel = 'pubnub-twitter';

  // loadTwitterStream$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType('[TWITTER] Add'),
  //     mergeMap(() => this.twitterListService.getAll()
  //       .pipe(
  //         map(data => { return new TwitterActions.AddTwitter(data) }),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private twitterListService: TwitterListService
  ) { }

}