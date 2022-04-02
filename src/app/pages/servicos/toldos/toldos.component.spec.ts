import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToldosComponent } from './toldos.component';

describe('ToldosComponent', () => {
  let component: ToldosComponent;
  let fixture: ComponentFixture<ToldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToldosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
