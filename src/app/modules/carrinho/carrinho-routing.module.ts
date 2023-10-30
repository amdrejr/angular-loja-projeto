import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CompraEfetuadaComponent } from './compra-efetuada/compra-efetuada.component';

const routes: Routes = [
  {path: '', component: CarrinhoComponent},
  {path: 'compra-finalizada', component: CompraEfetuadaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
