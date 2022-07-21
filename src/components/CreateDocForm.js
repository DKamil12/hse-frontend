import React from 'react';
import '../assets/style/create_doc_form_style.css';
import uploadIcon from '../assets/images/upload-icon.svg';

function CreateDocForm() {
    return ( 
        <div className="create-doc-container">
            <p className="create-doc__title">Создать документ</p>
            <form action="" className="create-doc__form">
                <div className="create-doc__row">
                    {/* FILE NAME  */}
                    <div className="create-doc__field">
                        <div className="create-doc__field-title">Имя файла</div>
                        <input type="text" name="file-name" id="file-name" className="create-doc__field-content"/>
                    </div>
                    {/*  DOCUMENT NAME */}
                    <div className="create-doc__field">
                        <div className="create-doc__field-title">Название документа</div>
                        <input type="text" name="file-name" id="file-name" className="create-doc__field-content"/>
                    </div>
                </div>
                <div className="create-doc__row">
                    {/* DATE OF APPROVAL */}
                    <div className="create-doc__field">
                        <div className="create-doc__field-title">Номер и дата протокола 
                            утверждения</div>
                        <input type="date" name="file-name" id="file-name" className="create-doc__field-content"/>
                    </div>
                    {/* NAME OF EXECUTOR  */}
                    <div className="create-doc__field">
                        <div className="create-doc__field-title">ФИО Исполнителя </div>
                        <input type="text" name="file-name" id="file-name" className="create-doc__field-content"/>
                    </div>
                </div>
                <div className="create-doc__row">
                    {/* RESPONSIBLE DEPARTMENT */}
                    <div className="create-doc__field">
                        <div className="create-doc__field-title">Ответственный департамент</div>
                        <select name="responsible-department" id="" className="create-doc__field-content">
                            <option value="security-dep">Департамент безопасности</option>
                            <option value="hr-dep">Департамент HR</option>
                            <option value="iso-dep">Департамент ПБ, ОТ, Э и ИСО</option>
                            <option value="inner-control-dep">Служба внутреннего контроля</option>
                        </select>
                    </div>    
                    {/* REVISION TIME */}
                    <div className="create-doc__field">
                        <div className="create-doc__field-title">Срок пересмотра</div>
                        <select name="revision-time" id="" className="create-doc__field-content">
                            <option value="3-months">3 месяца</option>
                            <option value="6-months">6 месяцев</option>
                            <option value="1-year">1 год</option>
                            <option value="3years">3 года</option>
                        </select>
                    </div>
                </div>
                {/* DOCUMENT UPLOADING  */}
                <div className="create-doc__field">
                    <div className="create-doc__field-title">Загрузка документа</div>
                    <div className="create-doc__upload-file create-doc__field-content">
                        <label for="upload-file" className="create-doc__label">
                            <img src={uploadIcon} alt=""/>
                            <span>Нажмите или перетащите файл для загрузки</span>
                        </label>
                        <input type="file" name="upload-file" id="" className="input-hidden"/>
                    </div>
                </div>
                {/* CHECKBOXES  */}
                <div className="create-doc__field">
                    <div className="create-doc__checkbox-container">
                        {/* READ ACCESS */}
                        <div className="create-doc__field">
                            <div className="create-doc__field-title">Доступ к чтению</div>
                            <select name="read-access" id="read-access" class="create-doc__field-content">
                                <option value="security-dep">Департамент безопасности</option>
                                <option value="hr-dep">Департамент HR</option>
                                <option value="iso-dep">Департамент ПБ, ОТ, Э и ИСО</option>
                                <option value="inner-control-dep">Служба внутреннего контроля</option>
                            </select>
                        </div>
                        {/* ONE-CICK READ */}
                        <div className="create-doc__checkbox">
                            <input type="checkbox" name="one-click-read" id="one-click-read" className="checkbox"/>
                            <label for="one-click-read">Чтение в один клик</label>
                        </div>
                        {/* UNLIMITED ARCHIVATION  */}
                        <div className="create-doc__checkbox">
                            <input type="checkbox" name="unlimitted-archivation" id="unlimitted-archivation" className="checkbox"/>
                            <label for="unlimitted-archivation">Не ограниченный объем документов для архивации</label>
                        </div>
                        {/* BACKUP  */}
                        <div className="create-doc__checkbox">
                            <input type="checkbox" name="backup" id="backup" className="checkbox"/>
                            <label for="backup">Резервная копия </label>
                        </div>
                    </div>
                </div>
                {/* ADDITION BUTTON  */}
                <button type="submit" className="create-doc__button">Добавить документ</button>
            </form>
        </div>
     );
}

export default CreateDocForm;