import React from 'react';
import '../assets/style/authorization_style.css';
import a from '../assets/images/AGP-logoauthorization-form-logo.svg';

function Authorization () {
    return (
        <div className="authorization-form">
            <img src={a} alt="" className="authorization-form-logo"/>
            <h3 className="authorization-form__title" aria-colspan="authorization-form__title">АВТОРИЗАЦИЯ</h3>
            <form action="#" method="get">
                <div>
                    <input type="text" name="username" value="" placeholder="Имя пользователя" className="authorization-form__fields authorization-form__fields_username" />
                </div>
                <div>
                    <input type="password" name="userpass" placeholder="Пароль" className="authorization-form__fields authorization-form__fields_password" />
                </div>
                <button type="submit" className="authorization-form__button">Войти</button>
            </form>
        </div>
    );
}

export default Authorization;