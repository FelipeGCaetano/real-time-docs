import "./socket-front-index.js"

const docList = document.getElementById("lista-documentos");

function insertDocLink(docName) {
    docList.innerHTML += `
        <a href="document.html?nome=${docName}" class="list-group-item list-group-item-action">
            ${docName}
        </a>
    `
}

export { insertDocLink }