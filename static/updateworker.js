/*    -=<|>=-=<|>=-    Update working    -=<|>=-=<|>=-    */
/*  -=<|>=-=<|>=-     Made by plutonny     -=<|>=-=<|>=-  */

"use strict";

// Used for check and notice about updates

/* Update modal */
window.onload = function() {
    if (!(localStorage.getItem(`noDisplayUpdate${siteVersion}`) == 'true')) { 
        if (document.getElementById('update-modal') == null) document.body.innerHTML += '<div id="PLmodalER" class="PLmodalER"><div>'
        plutonny.output('update-modal', `
            <div id="mini-update-modal" class="mini-update-modal">
                <style>
                    #update-modal { position: absolute; top: 0; width: 100vw; z-index: 99; }
                    .mini-update-modal { display: flex; justify-content: space-between; align-items: center; z-index: 100; margin: 8px; padding: 6px 12px 6px 6px; background-color: var(--bg-color); box-shadow: 0px 0px 8px var(--box-shadow-color); border-radius: 24px; }
                </style>
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <div style="display: flex; justify-content: center; align-items: center;border-radius: 100px; width: 30px; height: 30px; background-color: #0000ff55;"><span style="color: #0000ff;" class="material-symbols-rounded">exclamation</span></div>
                    <p style="margin: 0 0 0 8px; word-break: break-all;">Вышло обновление</p>
                </div>
                <a style="margin: 0; word-break: break-all; text-decoration: none; color: blue;" href="${link({type: 'HTML', file: 'support/?updates/'})}">изменения</a>
            </div>`)
        deviceStorage.write(`noDisplayUpdate${siteVersion}`, true)
    }
}