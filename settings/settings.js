const loadSettings = require("./data");
let settingsInit = function () {

    let buttonSettings = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-tools > menu-tool:nth-child(3)");

    buttonSettings.onclick = function () {
        document.querySelector("body > modal-entry > modal-container > modal-content > span").style.display = 'none';
        data = loadSettings();
        let settingsTab = document.querySelector("body > modal-entry > modal-container > modal-content");
        for (let i = 0; i < Object.values(data).length; i++) {
            switch (Object.values(data)[i].type) {
                case "checkbox":
                    settingsTab.insertAdjacentHTML('beforeend', `
                        <option-root data-flex="false" class="svelte-1dbzzfx">
                        <span class="svelte-1dbzzfx">
                        ${Object.values(data)[i].name}
                        <span style='color: #eb5656; display: ${Object.values(data)[i].needsRestart}' >*</span>
                    </span>
                            <input type="checkbox" class="checkboxSettings" id="${Object.values(data)[i].id}" onclick='window.electronAPI.settingsStore("${Object.values(data)[i].id}", document.getElementById("${Object.values(data)[i].id}").checked)' ${Object.values(data)[i].checked}>
                        </option-root>
                    `)
                break;
                case "text": 
                settingsTab.insertAdjacentHTML('beforeend', `
                        <option-root data-flex="false" class="svelte-1dbzzfx">
                            <span class="svelte-1dbzzfx">
                                ${Object.values(data)[i].name}
                                <span style='color: #eb5656; display: ${Object.values(data)[i].needsRestart}' >*</span>
                            </span>
                            <input type="text" class="textSettings" id="${Object.values(data)[i].id}" oninput='window.electronAPI.settingsStore("${Object.values(data)[i].id}", document.getElementById("${Object.values(data)[i].id}").value)' value='${Object.values(data)[i].value}'>
                        </option-root>
                    `)
                break;
            
                default:
                    break;
            }
        }

        // let settingsClientTitle = document.querySelector("body > modal-entry > modal-container > modal-content > group-entry:nth-child(7) > div");
        // let settingsClientSubTree = document.querySelector("body > modal-entry > modal-container > modal-content > group-entry:nth-child(7) > group-content");

        // settingsClientTitle.onclick = function () {
        //     console.log("title click")
        //     if (settingsClientSubTree.style.display == "none") {
        //         settingsClientSubTree.style.display = "flex";
        //     } else {
        //         settingsClientSubTree.style.display = "none";
        //     }
        // }
    }
}

module.exports = settingsInit;