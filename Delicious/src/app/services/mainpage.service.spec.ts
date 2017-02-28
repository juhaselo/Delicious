/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainpageService } from './mainpage.service';

describe('MainpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainpageService]
    });
  });

  it('should ...', inject([MainpageService], (service: MainpageService) => {
    expect(service).toBeTruthy();
  }));
});
