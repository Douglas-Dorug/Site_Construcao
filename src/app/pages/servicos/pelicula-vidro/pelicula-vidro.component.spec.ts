import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaVidroComponent } from './pelicula-vidro.component';

describe('PeliculaVidroComponent', () => {
  let component: PeliculaVidroComponent;
  let fixture: ComponentFixture<PeliculaVidroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaVidroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaVidroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
