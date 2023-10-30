import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade: number = 1;

  constructor(
    private route: ActivatedRoute,
    private sProdutos: ProdutosService,
    private notificacao: NotificacaoService,
    private carrinhoService: CarrinhoService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.produto = this.sProdutos.getOne(id);
    })
  }

  adicionarAoCarrinho() {
    this.notificacao.notificar(`${this.produto?.descricao} adicionado ao carrinho.`)
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
