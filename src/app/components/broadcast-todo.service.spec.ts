import { TestBed } from '@angular/core/testing';

import { BroadcastTodoService } from './broadcast-todo.service';

describe('BroadcastTodoService', () => {
  let service: BroadcastTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
