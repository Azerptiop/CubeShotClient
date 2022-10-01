console.log("[SCRIPT] fix: forced: " + true);

let fixCss = function () {
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    const cssFix = `
        .svelte-tqacjx {
            margin-left: 10px
        }
    `;

    addGlobalStyle(cssFix);
}

module.exports = fixCss;