import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteBarComponent } from './frete-bar.component';

describe('FreteBarComponent', () => {
  let component: FreteBarComponent;
  let fixture: ComponentFixture<FreteBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
