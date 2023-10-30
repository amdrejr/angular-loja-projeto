import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoDestaqueRoutingModule } from './produto-destaque-routing.module';
import { ProdutoDestaqueComponent } from './produto-destaque.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoDestaqueComponent
  ],
  imports: [
    CommonModule,
    ProdutoDestaqueRoutingModule,
    FormsModule
  ]
})
export class ProdutoDestaqueModule { }
