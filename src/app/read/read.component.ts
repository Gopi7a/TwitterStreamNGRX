import { Twitter } from './../models/twitter.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as TwitterActions from './../actions/twitter.actions';
import { TwitterListService } from '../services/twitter-list.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  // Section 1
  twitter: Observable<Twitter[]>;
  getTwitterList: any;
  getList: any;
  // Section 2
  constructor(private store: Store<AppState>, private twitterListService: TwitterListService) {
    this.twitterListService.getAll().subscribe((data) => {
      this.getTwitterList = data;
    });
    this.store.dispatch(new TwitterActions.AddTwitter(this.getTwitterList))

    this.getList = this.store.select((state) => {
      // console.log(state, 'state');
      return state.twitter[1];
    });

    this.getList.subscribe(data => {
      this.twitter = data;
    });
  }

  delTwitter(index) {
    this.store.dispatch(new TwitterActions.RemoveTwitter(index))
  }

  ngOnInit() {
  }

  getKey(val) {
    console.log(val, 'fsfs')
  }

}
