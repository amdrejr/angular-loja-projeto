import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./modules/produtos/produtos.module').then(m => m.ProdutosModule) },
  {path: '', redirectTo: 'produto-destaque', pathMatch:'full' },
  { path: 'carrinho', loadChildren: () => import('./modules/carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'produto-destaque', loadChildren: () => import('./modules/produto-destaque/produto-destaque.module').then(m => m.ProdutoDestaqueModule)},
  {path: 'contato', loadChildren: () => import('./modules/contato/contato.module').then(m => m.ContatoModule)},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
