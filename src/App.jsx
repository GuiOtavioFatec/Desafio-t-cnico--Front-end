import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardModulo'

//alunos
import Alunos from './pages/Alunos'
import ListaAlunos from './pages/ListaAlunos'
import CadastroAluno from './pages/CadastroAluno'
import alunosIniciais from './data/aluno'
import EditarAluno from './pages/EditarAluno'

//chamados
import Chamados from './pages/Chamados'
import ListaChamados from './pages/ListaChamados'
import CadastroChamado from './pages/CadastroChamado'
import chamadosIniciais from './data/chamado'
import EditarChamado from './pages/EditarChamado'

function App() {
  const [mostrarModulos, setMostrarModulos] = useState(true)

  const [modulos] = useState([
    {
      id: 1,
      titulo: 'Gerenciamento de Alunos',
      descricao: 'Cadastre e consulte os alunos da faculdade.',
      rota:'/alunos',
    },
    {
      id: 2,
      titulo: 'Gerenciamento de Chamados',
      descricao: 'Cadastre e consulte os chamados da faculdade.',
      rota: '/chamados',
    },
  ])

  const [alunos, setAlunos] = useState(alunosIniciais)
  
  function adicionarAluno(novoAluno) {
  const alunoComId = {
    id: Date.now(),
    ...novoAluno,
  }

  setAlunos((listaAtual) => [
    ...listaAtual,
    alunoComId,
  ])
}
function excluirAluno(id) {
  setAlunos((listaAtual) =>
    listaAtual.filter((aluno) => aluno.id !== id)
  )
}
function alterarAluno(alunoAtualizado) {
  setAlunos((listaAtual) =>
    listaAtual.map((aluno) =>
      aluno.id === alunoAtualizado.id
        ? alunoAtualizado
        : aluno
    )
  )
}

  const [chamados, setChamados] = useState(chamadosIniciais)
  
  function adicionarChamado(novoChamado) {
  const chamadoComId = {
    id: Date.now(),
    ...novoChamado,
  }

  setChamados((listaAtual) => [
    ...listaAtual,
    chamadoComId,
  ])
}
function excluirChamado(id) {
  setChamados((listaAtual) =>
    listaAtual.filter((chamado) => chamado.id !== id)
  )
}
function alterarChamado(chamadoAtualizado) {
  setChamados((listaAtual) =>
    listaAtual.map((chamado) =>
      chamado.id === chamadoAtualizado.id
        ? chamadoAtualizado
        : chamado
    )
  )
}

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="aplicacao">
            <Cabecalho />

            <main className="conteudo-principal">
              <p className="introducao">
                Aplicação desenvolvida nas disciplinas de Desenvolvimento Web
                III.
              </p>

              <button
                type="button"
                className="botao-alternar"
                onClick={() => setMostrarModulos(!mostrarModulos)}
              >
                {mostrarModulos ? 'Ocultar módulos' : 'Exibir módulos'}
              </button>

              {mostrarModulos && (
                <section className="modulos">
                  {modulos.map((modulo) => (
                    <CardModulo
                      key={modulo.id}
                      titulo={modulo.titulo}
                      descricao={modulo.descricao}
                      rota={modulo.rota}
                    />
                  ))}
                </section>
              )}
            </main>
          </div>
        }
      />

      <Route path="/alunos" element={<Alunos />} />
        <Route
        path="/alunos/listar"
        element={
        <ListaAlunos alunos={alunos} 
        aoExcluir={excluirAluno}
        />}
      />
      <Route
  path="/alunos/cadastrar"
  element={<CadastroAluno 
  alunos={alunos}
  aoCadastrar={adicionarAluno} />}
/>
    
    <Route
  path="/alunos/editar/:id"
  element={
    <EditarAluno
      alunos={alunos}
      aoAlterar={alterarAluno}
    />
  }
/>

<Route path="/chamados" element={<Chamados />} />
      <Route
        path="/chamados/listar"
        element={<ListaChamados chamados={chamados}
        aoExcluir={excluirChamado}/>}
      />
      <Route
        path="/chamado/cadastrar"
        element={<CadastroChamado chamados={chamados}
        aoCadastrar={adicionarChamado}/>}
      />
      <Route
  path="/chamados/editar/:id"
  element={
    <EditarChamado
      chamados={chamados}
      aoAlterar={alterarChamado}
    />
  }
/>
    
    </Routes>
  )
}

export default App