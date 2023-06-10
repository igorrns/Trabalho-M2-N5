import Livro from '../modelo/Livro';

const livros: Livro[] = [
    new Livro(1, 1, 'Use a Cabeça Java', 'Resumo do Use a Cabeça Java', ['Bert Bates', 'Kathy Sierra']),
    new Livro(2, 2, 'Java como programar', 'Resumo do livrco Java como programar', ['paul Deitel', 'Harvey Deitel']),
    new Livro(3, 3, 'Core Java for the impatient', 'Resumo do Livro Core Java for the impatient', ['Cay Hortsmann']),
];

class ControleLivros {
    obterLivros(): Livro[] {
        return livros;
    }

    incluir(livro: Livro): void {
        const maxCodigo = Math.max(...livros.map((livro) => livro.codigo));
        livro.codigo = maxCodigo + 1;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex((livro) => livro.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default new ControleLivros();

