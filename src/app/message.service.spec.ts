import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './messageservice.service';

describe('MessageserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
