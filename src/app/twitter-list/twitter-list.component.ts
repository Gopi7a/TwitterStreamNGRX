import { TwitterListService } from '../services/twitter-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-list',
  templateUrl: './twitter-list.component.html',
  styleUrls: ['./twitter-list.component.css']

})
export class TwitterListComponent implements OnInit {

  constructor(private twitterListService: TwitterListService) {
  }

  ngOnInit() {
  }

}
