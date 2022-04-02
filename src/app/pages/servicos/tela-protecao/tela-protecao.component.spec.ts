import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaProtecaoComponent } from './tela-protecao.component';

describe('TelaProtecaoComponent', () => {
  let component: TelaProtecaoComponent;
  let fixture: ComponentFixture<TelaProtecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaProtecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaProtecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
