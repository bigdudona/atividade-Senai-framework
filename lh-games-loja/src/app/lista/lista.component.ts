import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public produtos: any[] = []

  constructor(private produtoService: ProdutoService){}
  
  ngOnInit(): void {
    this.listarProdutos();
  }


  listarProdutos() {
    this.produtoService.getProdutos().subscribe(
      produtosDaApi => {
        this.produtos=produtosDaApi
      }
    )
  }  
}
