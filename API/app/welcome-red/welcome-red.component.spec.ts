import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeRedComponent } from './welcome-red.component';

describe('WelcomeRedComponent', () => {
  let component: WelcomeRedComponent;
  let fixture: ComponentFixture<WelcomeRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
