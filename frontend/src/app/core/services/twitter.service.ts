import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TwitterResult } from '../models/twitterResult';

@Injectable()
export class TwitterService {

  constructor(private api: ApiService) {
  }

  public get(): Observable<TwitterResult> {
    return this.api.get(`/twitter`);
  }
}
