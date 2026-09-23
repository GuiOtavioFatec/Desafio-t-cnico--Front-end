import { Link } from 'react-router'

function Alunos() {
  return (
    <div className="pagina-alunos">
      <h1>Gerenciamento de Alunos</h1>

      <p>Escolha uma das opções:</p>

      <div className="opcoes-alunos">
        <Link to="/alunos/listar">
          Listar alunos
        </Link>

        <Link to="/alunos/cadastrar">
          Cadastrar novo aluno
        </Link>
      </div>

      <Link to="/">
        Voltar para a página inicial
      </Link>
    </div>
  )
}

export default Alunos