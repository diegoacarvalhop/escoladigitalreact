import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Escola Digital</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="alunos">Alunos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Rematrícula</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Caderneta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Financeiro</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;