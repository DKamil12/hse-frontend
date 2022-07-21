import React from 'react';
import '../assets/style/doc_list_style.css';

function DocList() {
    return ( 
        <div className="doc-list-container">
            <div className="doc-filter">
                <div className="doc-filter__row">
                    <select name="folders-filter" id="#" className="doc-filter__filters">
                        <option value="All">Все</option>
                        <option value="folder-1">Реестр законодательных актов</option>
                        <option value="folder-2">Приказы</option>
                        <option value="filter-3">ИБОТ</option>
                        <option value="filter-4">Внутренние регламентирующие документы</option>
                        <option value="filter-5">Производственные инструкции по эксплуатации</option>
                        <option value="filter-6">Обязательные страховые полюсы</option>
                    </select>
                    <select name="date-filter" id="" className="doc-filter__filters">
                        <option value="oldest-first">Сначала старые</option>
                        <option value="latest-first">Сначала новые</option>
                    </select>
                    <input type="search" name="doc-search" id="#" className="doc-filter__search"/>
                    <button className="doc-filter__add">Добавить</button>
                </div>
            </div>
            <table className="doc-table">
                <tr className="doc-table__row doc-table__row_titles">
                    <td>Имя</td>
                    <td>Название документа</td>
                    <td>Код документа</td>
                    <td>Номер и дата протокола утверждения</td>
                    <td>Ответственный департамент</td>
                    <td>Срок пересмотра</td>
                    <td>ФИО исполнителя</td>
                </tr>
                <tr className="doc-table__row">
                    <td>D0001</td>
                    <td>Производственная инструкция по эксплуатации</td>
                    <td>D12345</td>
                    <td>D0001 от 21.06.2022</td>
                    <td>Департамент ПБ, ОТ, Э и ИСО</td>
                    <td>6 месяцев</td>
                    <td>Cameron Jennings</td>
                </tr>
                <tr className="doc-table__row">
                    <td>D0001</td>
                    <td>Производственная инструкция по эксплуатации</td>
                    <td>D12345</td>
                    <td>D0001 от 21.06.2022</td>
                    <td>Департамент ПБ, ОТ, Э и ИСО</td>
                    <td>6 месяцев</td>
                    <td>Cameron Jennings</td>
                </tr>
                <tr className="doc-table__row">
                    <td>D0001</td>
                    <td>Производственная инструкция по эксплуатации</td>
                    <td>D12345</td>
                    <td>D0001 от 21.06.2022</td>
                    <td>Департамент ПБ, ОТ, Э и ИСО</td>
                    <td>6 месяцев</td>
                    <td>Cameron Jennings</td>
                </tr>
                <tr className="doc-table__row">
                    <td>D0001</td>
                    <td>Производственная инструкция по эксплуатации</td>
                    <td>D12345</td>
                    <td>D0001 от 21.06.2022</td>
                    <td>Департамент ПБ, ОТ, Э и ИСО</td>
                    <td>6 месяцев</td>
                    <td>Cameron Jennings</td>
                </tr>
                <tr className="doc-table__row">
                    <td>D0001</td>
                    <td>Производственная инструкция по эксплуатации</td>
                    <td>D12345</td>
                    <td>D0001 от 21.06.2022</td>
                    <td>Департамент ПБ, ОТ, Э и ИСО</td>
                    <td>6 месяцев</td>
                    <td>Cameron Jennings</td>
                </tr>
                <tr className="doc-table__row">
                    <td>D0001</td>
                    <td>Производственная инструкция по эксплуатации</td>
                    <td>D12345</td>
                    <td>D0001 от 21.06.2022</td>
                    <td>Департамент ПБ, ОТ, Э и ИСО</td>
                    <td>6 месяцев</td>
                    <td>Cameron Jennings</td>
                </tr>
            </table>
        </div>
     );
}

export default DocList;

