import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho, produtos } from '../produtos/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';

@Component({
  selector: 'app-produto-destaque',
  templateUrl: './produto-destaque.component.html',
  styleUrls: ['./produto-destaque.component.css']
})
export class ProdutoDestaqueComponent implements OnInit {
  produto:IProduto = produtos[1]
  quantidade:number = 1;

  produtos = [
    produtos[2],
    produtos[3],
    produtos[11],
    produtos[7],
    produtos[6],
  ]

  private interval:any;
  public seconds = 2159;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacao: NotificacaoService,
  ) {}


  ngOnInit(): void {
      this.startCountdown()
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000); // Atualiza a cada segundo
  }

  segundosMinutos(): string[] {
    let minutos = Math.floor(this.seconds / 60);
    let segundos = this.seconds % 60;

    // Adicione um zero à esquerda se os minutos ou segundos forem menores que 10
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos.toString();
    const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos.toString();

    return [minutosFormatados, segundosFormatados];
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
