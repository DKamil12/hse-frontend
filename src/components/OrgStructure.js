import React from 'react';
import '../assets/style/org_structure_style.css';
import employee from "../assets/images/employee.svg";

function OrgStructure() {
    return ( 
        <div className="org-structure-container">
        <div className="org-structure department-list">
            <input type="search" name="department-list-search" placeholder="keywords" id="#" className="department-list__search"/>
            <details>
                <summary className="department-list__departments">Asian Gas Pipeline</summary>
                <p className="department-list__departments">Генеральный директор</p>
                <p className="department-list__departments">Первый заместитель генерального директора</p>
                <p className="department-list__departments">Исполнительный директор по правовым ...</p>
                <details>
                    <summary className="department-list__departments">Департамент безопасности</summary>
                </details>
                <details>
                    <summary className="department-list__departments">Департамент HR</summary>
                </details>
                <details>
                    <summary className="department-list__departments">Департамент ПБ, ОТ, Э и ИСО</summary>
                </details>
                <details>
                    <summary className="department-list__departments">Служба внутреннего контроля</summary>
                </details>
            </details>
        </div>
        <div className="org-structure department-details">
            <p className="department-details__department-name">Служба внутреннего контроля</p>
            <div className="org-structure__employee-list">
                <div className="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>Stephanie  Harrelson</p>
                </div>
                <div className="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>John Smith</p>
                </div>
                <div className="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>Cameron Jennings</p>
                </div>
                <div className="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>Rosemary Bramson</p>
                </div>
            </div>
        </div>
        <div className="org-structure employee-details">
            <img src={employee} alt="employee-icon" className="employee-details__img"/>
            <p className="employee-details__name">Cameron Jennings</p>
            <div className="employee-details__contact-info">
                <div className="employee-details__value">
                    <p>Телефон</p>
                    <p>Email</p>
                    <p>Должность</p>
                </div>
                <div className="employee-details__value employee-details__value_darker">
                    <p>8 777 766 5544</p>
                    <p>CameronJ@gmail.com</p>
                    <p>Сотрудник службы внутреннего контроля</p>
                </div>
            </div>
        </div>
    </div>
     );
}

export default OrgStructure;

