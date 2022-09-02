import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHerosInformationComponent } from './movie-heros-information.component';

describe('MovieHerosInformationComponent', () => {
  let component: MovieHerosInformationComponent;
  let fixture: ComponentFixture<MovieHerosInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHerosInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHerosInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
