import { useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router'

function EditarAluno({ alunos, aoAlterar }) {
  const { id } = useParams()
  const navigate= useNavigate()

  const alunoEncontrado = alunos.find(
    (aluno) => aluno.id === Number(id)
  )

  const [nome, setNome] = useState(alunoEncontrado?.nome ?? '')
  const [matricula, setMatricula] = useState(alunoEncontrado?.matricula ?? '')
  const [email, setEmail] = useState(alunoEncontrado?.email ?? '')

  function alterarAluno(evento) {
    evento.preventDefault()

    const alunoAtualizado = {
      id: Number(id),
      nome,
      matricula,
      email,
    }

    aoAlterar(alunoAtualizado)

    alert('Aluno alterado com sucesso!')
    navigate('/alunos/listar')
  }

  if (!alunoEncontrado) {
    return (
      <main className="pagina-alunos">
        <h1>Aluno não encontrado</h1>

        <Link to="/alunos/listar">
          Voltar para a lista de alunos
        </Link>
      </main>
    )
  }

  return (
    <main className="pagina-alunos">
      <h1>Alterar alunos</h1>

      <form
        className="formulario-aluno"
        onSubmit={alterarAluno}
      >
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          required
        />

        <label htmlFor="matricula">Matricula</label>
        <input
          id="matricula"
          type="text"
          value={matricula}
          onChange={(evento) => setMatricula(evento.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />

        <button type="submit">
          Salvar alterações
        </button>
      </form>

      <Link to="/alunos/listar">
        Voltar para a lista de alunos
      </Link>
    </main>
  )
}

export default EditarAluno