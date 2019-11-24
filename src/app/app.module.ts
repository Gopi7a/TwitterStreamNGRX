import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/twitter.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterListComponent } from './twitter-list/twitter-list.component';
import { PubNubAngular } from 'pubnub-angular2';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { TableModule } from 'primeng/table';

import { TwitterStreamEffects } from './services/twitter-stream.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      TwitterListComponent,
      ReadComponent,
      CreateComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      TableModule,
      StoreModule.forRoot({
         twitter: reducer
      }),
      EffectsModule.forRoot([TwitterStreamEffects]),

      AppRoutingModule
   ],
   providers: [PubNubAngular],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
