import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFiltroLateralComponent } from './grid-filtro-lateral.component';

describe('GridFiltroLateralComponent', () => {
  let component: GridFiltroLateralComponent;
  let fixture: ComponentFixture<GridFiltroLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFiltroLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFiltroLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
