import { Component, OnInit } from '@angular/core';
import { IProduto } from './produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtoService : ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      if (descricao) {
        this.produtos = this.produtos?.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return
      }
    this.produtos = this.produtoService.getAll();
    })
  }

}
