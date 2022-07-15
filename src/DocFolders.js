import React from 'react';
import './assets/style/doc_folders_style.css';
import folderIcon from'./assets/images/folder-icon.svg';

function DocFolders() {
    return ( 
        <div className="container">
            <div className="doc-folder">
                <img src={folderIcon} alt="folder-icon"/>
                <p className="doc-folder__name">Реестр законодательных актов</p>
            </div>
            <div className="doc-folder">
                <img src={folderIcon} alt="folder-icon"/>
                <p className="doc-folder__name">Приказы</p>
            </div>
            <div className="doc-folder">
                <img src={folderIcon} alt="folder-icon"/>
                <p className="doc-folder__name">ИБОТ</p>
            </div>
            <div className="doc-folder">
                <img src={folderIcon} alt="folder-icon"/>
                <p className="doc-folder__name">Внутренние регламентирующие документы</p>
            </div>
            <div className="doc-folder">
                <img src={folderIcon} alt="folder-icon"/>
                <p className="doc-folder__name">Производственные инструкции по эксплуатации</p>
            </div>
            <div className="doc-folder">
                <img src={folderIcon} alt="folder-icon"/>
                <p className="doc-folder__name">Обязательные страховые полюсы</p>
            </div>
        </div>
     );
}

export default DocFolders;