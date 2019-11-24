// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Twitter } from '../models/twitter.model';

// Section 2
export const ADD_TWITTER = '[TWITTER] Add';
export const REMOVE_TWITTER = '[TWITTER] Remove';

// Section 3
export class AddTwitter implements Action {
    readonly type = ADD_TWITTER;
    constructor(public payload: Twitter) { console.log(payload, this.type, 'payload'); }
}

export class RemoveTwitter implements Action {
    readonly type = REMOVE_TWITTER;

    constructor(public payload: number) { }
}

// Section 4
export type Actions = AddTwitter | RemoveTwitter