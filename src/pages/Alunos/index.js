import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './alunos.css';

class Alunos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alunos: []
        }
        this.listarTodosAlunos = this.listarTodosAlunos.bind(this);
    }

    componentDidMount() {
        this.listarTodosAlunos();
    }

    listarTodosAlunos() {
        let url = 'http://localhost:8080/escoladigital/aluno/listarTodos';
        fetch(url).then((response) => response.json()).then((json) => {
            this.setState({
                alunos: json
            });
            console.log(json);
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-hover table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Matrícula</th>
                            <th>Nome</th>
                            <th>Data de Nascimento</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.alunos.map((aluno) => {
                                return (
                                    <tr key={aluno.id}>
                                        <td>{aluno.matriculaDto.id}</td>
                                        <td><Link to="#">{aluno.nome}</Link></td>
                                        <td>{aluno.dataNascimento}</td>
                                        <td>{aluno.statusDto.descricao}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Alunos;