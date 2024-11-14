import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSendComponent } from './mail-send.component';

describe('MailSendComponent', () => {
  let component: MailSendComponent;
  let fixture: ComponentFixture<MailSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailSendComponent]
    });
    fixture = TestBed.createComponent(MailSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
