import { Twitter } from './../models/twitter.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as TwitterActions from './../actions/twitter.actions';
import { Observable } from 'rxjs';
import { TwitterListService } from '../services/twitter-list.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>, private twitterListService: TwitterListService) {
  }

  addTwitter(name, url) {
    // this.store.dispatch(new TwitterActions.AddTwitter({ name: name, url: url }))
  }

  ngOnInit() {
  }

}
