import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
  ];

  constructor() { }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find((editora) => editora.codEditora === codEditora);
    return editora?.nome;
  }

}
