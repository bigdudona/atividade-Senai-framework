import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

     constructor(private httpCliente: HttpClient ) { }

     getProdutos(): Observable<any> {
        return this.httpCliente.get("http://localhost:3000/produtos")
  
     }

}

 
