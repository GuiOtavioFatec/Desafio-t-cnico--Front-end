import { useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router'

function EditarChamado({ chamados, aoAlterar }) {
  const { id } = useParams()
  const navigate= useNavigate()

  const chamadoEncontrado = chamados.find(
    (chamado) => chamado.id === Number(id)
  )

    const [titulo, setTitulo] = useState(chamadoEncontrado?.titulo ??'')
    const [descricao, setDescricao] = useState(chamadoEncontrado?.descricao ??'')
    const [prioridade, setPrioridade] = useState(chamadoEncontrado?.prioridade ??'')
    const [solicitante, setSolicitante] = useState(chamadoEncontrado?.solicitante ??'')
    const [status, setStatus] = useState(chamadoEncontrado?.status ??'')

  function alterarChamado(evento) {
    evento.preventDefault()

    const chamadoAtualizado = {
      id: Number(id),
      titulo,
      descricao,
      prioridade,
      solicitante,
      status,
    }

    aoAlterar(chamadoAtualizado)

    alert('Chamado alterado com sucesso!')
    navigate('/chamados/listar')
  }

  if (!chamadoEncontrado) {
    return (
      <main className="pagina-chamados">
        <h1>Chamado não encontrado</h1>

        <Link to="/chamados/listar">
          Voltar para a lista de chamados
        </Link>
      </main>
    )
  }

  return (
    <main className="pagina-chamados">
      <h1>Alterar chamados</h1>

      <form
        className="formulario-chamado"
        onSubmit={alterarChamado}
      >
                <label htmlFor="titulo">Titulo</label>
                <input
                    id="titulo"
                    type="text"
                    value={titulo}
                    onChange={(evento) => {
                        setTitulo(evento.target.value)
                    }}
                />

                <label htmlFor="descricao">Descricao</label>
                <input
                    id="descricao"
                    type="text"
                    value={descricao}
                    onChange={(evento) => {
                        setDescricao(evento.target.value)
                    }}
                />

                <label htmlFor="prioridade">Prioridade</label>
                <input
                    id="prioridade"
                    type="text"
                    value={prioridade}
                    onChange={(evento) => {
                        setPrioridade(evento.target.value)
                    }}
                />

                <label htmlFor="solicitante">Solicitante</label>
                <input
                    id="solicitante"
                    type="text"
                    value={solicitante}
                    onChange={(evento) => {
                        setSolicitante(evento.target.value)
                    }}
                />

                <label htmlFor="status">Status</label>
                <input
                    id="status"
                    type="text"
                    value={status}
                    onChange={(evento) => {
                        setStatus(evento.target.value)
                    }}
                />

        <button type="submit">
          Salvar alterações
        </button>
      </form>

      <Link to="/chamados/listar">
        Voltar para a lista de chamados
      </Link>
    </main>
  )
}

export default EditarChamado