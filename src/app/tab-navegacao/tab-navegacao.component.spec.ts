import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavegacaoComponent } from './tab-navegacao.component';

describe('TabNavegacaoComponent', () => {
  let component: TabNavegacaoComponent;
  let fixture: ComponentFixture<TabNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNavegacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
