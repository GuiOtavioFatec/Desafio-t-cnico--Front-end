import { useState } from 'react'
import { Link } from 'react-router'

function CadastroAluno({ alunos, aoCadastrar }) {
  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [email, setEmail] = useState('')
 

  function cadastrarAluno(evento) {
    evento.preventDefault()
    setMensagemSucesso('')
    const novoAluno = {
      nome,
      matricula,
      email,
    }

    aoCadastrar(novoAluno)
    setNome('')
    setMatricula('')
    setEmail('')
  }

  return (
    <main className="pagina-alunos">
      <h1>Cadastrar novo aluno</h1>

      <form className="formulario-aluno" onSubmit={cadastrarAluno} noValidate>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(evento) => {
            setNome(evento.target.value)
          }}
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(evento) => {
            setEmail(evento.target.value)
          }}
        />

        <label htmlFor="matricula">Matricula</label>
        <input
          id="matricula"
          type="text"
          value={matricula}
          onChange={(evento) => {
            setMatricula(evento.target.value)
          }}
        />

        <button type="submit">Cadastrar aluno</button>
      </form>

      <Link to="/alunos">Voltar para Gerenciamento de Alunos</Link>
    </main>
  )
}

export default CadastroAluno