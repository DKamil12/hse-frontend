import React from 'react';
import './assets/style/org_structure_style.css';
import employee from "./assets/images/employee.svg";

function OrgStructure() {
    return ( 
        <div class="org-structure-container">
        <div class="org-structure department-list">
            <input type="search" name="department-list-search" placeholder="keywords" id="#" class="department-list__search"/>
            <details>
                <summary class="department-list__departments">Asian Gas Pipeline</summary>
                <p class="department-list__departments">Генеральный директор</p>
                <p class="department-list__departments">Первый заместитель генерального директора</p>
                <p class="department-list__departments">Исполнительный директор по правовым ...</p>
                <details>
                    <summary class="department-list__departments">Департамент безопасности</summary>
                </details>
                <details>
                    <summary class="department-list__departments">Департамент HR</summary>
                </details>
                <details>
                    <summary class="department-list__departments">Департамент ПБ, ОТ, Э и ИСО</summary>
                </details>
                <details>
                    <summary class="department-list__departments">Служба внутреннего контроля</summary>
                </details>
            </details>
        </div>
        <div class="org-structure department-details">
            <p class="department-details__department-name">Служба внутреннего контроля</p>
            <div class="org-structure__employee-list">
                <div class="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>Stephanie  Harrelson</p>
                </div>
                <div class="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>John Smith</p>
                </div>
                <div class="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>Cameron Jennings</p>
                </div>
                <div class="department-details__employee">
                    <img src={employee} alt="employee-icon"/>
                    <p>Rosemary Bramson</p>
                </div>
            </div>
        </div>
        <div class="org-structure employee-details">
            <img src={employee} alt="employee-icon" class="employee-details__img"/>
            <p class="employee-details__name">Cameron Jennings</p>
            <div class="employee-details__contact-info">
                <div class="employee-details__value">
                    <p>Телефон</p>
                    <p>Email</p>
                    <p>Должность</p>
                </div>
                <div class="employee-details__value employee-details__value_darker">
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

