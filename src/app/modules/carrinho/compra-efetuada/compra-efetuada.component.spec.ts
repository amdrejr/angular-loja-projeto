import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEfetuadaComponent } from './compra-efetuada.component';

describe('CompraEfetuadaComponent', () => {
  let component: CompraEfetuadaComponent;
  let fixture: ComponentFixture<CompraEfetuadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraEfetuadaComponent]
    });
    fixture = TestBed.createComponent(CompraEfetuadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
