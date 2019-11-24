/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitterListService } from './twitter-list.service';

describe('Service: TwitterList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterListService]
    });
  });

  it('should ...', inject([TwitterListService], (service: TwitterListService) => {
    expect(service).toBeTruthy();
  }));
});
