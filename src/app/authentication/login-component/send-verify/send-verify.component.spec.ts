import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVerifyComponent } from './send-verify.component';

describe('SendVerifyComponent', () => {
  let component: SendVerifyComponent;
  let fixture: ComponentFixture<SendVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendVerifyComponent]
    });
    fixture = TestBed.createComponent(SendVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
