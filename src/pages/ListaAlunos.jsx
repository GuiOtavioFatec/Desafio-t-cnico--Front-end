import { Link } from 'react-router'

function ListaAlunos({ alunos, aoExcluir }) {
  function confirmarExclusao(aluno) {
    const confirmacao = window.confirm(
      `Deseja realmente excluir o aluno ${aluno.nome}?`
    )

    if (confirmacao) {
      aoExcluir(aluno.id)
    }
  }

    return (
    <main className="pagina-alunos">
      <h1>Lista de Alunos</h1>

      <ul className="lista-alunos">
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            <strong>{aluno.nome}</strong>
            <span>E-mail: {aluno.email}</span>
            <span>Matricula: {aluno.matricula}</span>
         
          <div className="acoes-aluno">
           <Link
                to={`/alunos/editar/${aluno.id}`}
                className="botao-alterar"
              >
                Alterar
              </Link>  
              <button
                type="button"
                className="botao-excluir"
                onClick={() => confirmarExclusao(aluno)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/alunos">Voltar para Gerenciamento de Alunos
      </Link>
    </main>
  )
}

export default ListaAlunos