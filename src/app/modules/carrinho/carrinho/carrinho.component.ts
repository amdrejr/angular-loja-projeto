import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { IProdutoCarrinho } from '../../produtos/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itens:IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itens = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  removerItem(produto:IProdutoCarrinho) {
    this.carrinhoService.removerItem(produto)
    this.itens = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itens.reduce((prev, curr) => (prev + curr.preco * curr.quantidade), 0);
    console.log(this.itens);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  finalizarCompra() {
    this.router.navigate(['carrinho','compra-finalizada']);
    this.itens=[];
    localStorage.clear();
    console.log('finalizado');
  }
}
