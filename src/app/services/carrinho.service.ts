import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from '../modules/produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obterCarrinho ():IProdutoCarrinho[] {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  obterTotalItensCarrinho ():number {
    const carrinho = this.obterCarrinho();
    let total = 0;
    carrinho.forEach(item => total+=item.quantidade)
    return total;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    const indice = this.itens.findIndex((item) => item.id === produto.id);
    if (indice !== -1) {
      // Se o produto já existe no carrinho, atualize-o
      this.itens[indice].quantidade += produto.quantidade;
    } else {
      // Se o produto não existe no carrinho, adicione-o
      this.itens.push(produto);
    }
    // Atualize o carrinho no armazenamento local
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    console.log(produto);
  }

  removerItem(produto: IProdutoCarrinho) {
    this.itens = this.itens.filter(item => produto.id !== item.id)
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
