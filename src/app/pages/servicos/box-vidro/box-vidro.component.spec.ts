import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxVidroComponent } from './box-vidro.component';

describe('BoxVidroComponent', () => {
  let component: BoxVidroComponent;
  let fixture: ComponentFixture<BoxVidroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxVidroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxVidroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
