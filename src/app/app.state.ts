import { Twitter } from './models/twitter.model';

export interface AppState {
    readonly twitter: Twitter[];
}