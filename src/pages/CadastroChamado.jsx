import { useState } from 'react'
import { Link } from 'react-router'

function CadastroChamado({ chamados, aoCadastrar }) {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [solicitante, setSolicitante] = useState('')
    const [status, setStatus] = useState('')


    function cadastrarChamado(evento) {
        evento.preventDefault()
        setMensagemSucesso('')
        const novoChamado = {
            titulo,
            descricao,
            prioridade,
            solicitante,
            status,
        }

        aoCadastrar(novoChamado)
        setTitulo('')
        setDescricao('')
        setPrioridade('')
        setSolicitante('')
        setStatus('')
    }

    return (
        <main className="pagina-chamados">
            <h1>Cadastrar novo chamado</h1>

            <form className="formulario-chamado" onSubmit={cadastrarChamado} noValidate>
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
                <textarea
                    id="descricao"
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

                <button type="submit">Cadastrar chamado</button>
            </form>


            <Link to="/chamados">Voltar para Gerenciamento de Chamados</Link>
        </main>
    )
}

export default CadastroChamado