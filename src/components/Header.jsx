import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='1'>LetConstVar-TemplateLiteral-ArrowFun |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='2'>RestOperator-objLiteral-arrayobj-destructuring |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='3'>OOps |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='4'>Promises |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='5'>Ajax |</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='6'>Async Await |</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='7'>Fetch |</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header