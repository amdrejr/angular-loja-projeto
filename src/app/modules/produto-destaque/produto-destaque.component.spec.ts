import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDestaqueComponent } from './produto-destaque.component';

describe('ProdutoDestaqueComponent', () => {
  let component: ProdutoDestaqueComponent;
  let fixture: ComponentFixture<ProdutoDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoDestaqueComponent]
    });
    fixture = TestBed.createComponent(ProdutoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
