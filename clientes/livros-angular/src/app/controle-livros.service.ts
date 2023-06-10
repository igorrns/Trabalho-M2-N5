import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça Java', resumo: 'Resumo do Use a Cabeça Java', autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java como programar', resumo: 'Resumo do livrco Java como programar', autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Core Java for the impatient', resumo: 'Resumo do Livro Core Java for the impatient', autores: ['Cay Hortsmann'] }
  ];

  constructor() { }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = Math.max(...this.livros.map((livro) => livro.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

}
