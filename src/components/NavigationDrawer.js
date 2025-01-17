import React from 'react'
import classNames from "classnames"
import { withRouter } from "react-router-dom"

const NavigationDrawer = ({ onCloseMenu, isOpen, history }) => (
    <div className={classNames("navigation-drawer", { "navigation-drawer--open": isOpen })}>
        <div className="navigation-drawer__head">
            <button className="navigation-drawer__head__button" onClick={onCloseMenu}>
                <i className="material-icons">close</i>
            </button>
        </div>
        <div className="navigation-drawer__menu">
            <button className="navigation-drawer__menu__item" onClick={() => { onCloseMenu(); history.push("/") }}><i className="material-icons">home</i> Página Inicial</button>
            <button className="navigation-drawer__menu__item" onClick={() => { onCloseMenu(); history.push("/classes") }}><i className="material-icons">edit</i> Aula Teórica</button>
            <button className="navigation-drawer__menu__item" onClick={() => { onCloseMenu(); history.push("/students") }}><i className="material-icons">person</i> Alunos</button>
        </div>
    </div>
)

export default withRouter(NavigationDrawer)