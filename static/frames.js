var FRAMES = {
    /**
     *  Outputted header
     * 
     *      Example of settings list:
     *          {
     *          textCenter: str,
     *          buttonTheme: bool,
     *          buttonBack: bool,
     *          enableHR: bool,
     *          HTMLAfter: str (HTML format)
     *          }
     * 
     */
    header: function(settings) {
        try {
            var inj = '';

            if (settings.buttonTheme && localStorage.getItem('themeEnableThemeButton') == 'true' && localStorage.getItem('themeType') == 1) {
                inj += `<button 
                            class="theme_button" 
                            style="height: 38px; width: 38px; z-index: 90; border: none !important; fill: currentColor; left: 100%; position: absolute; margin: 14px 0px 0px -52px; border-radius: 100px; cursor: pointer; padding: 2px 3px 0px 3px; background-color: transparent;" 
                            onclick="theme.change()">
                            <span class="material-symbols-rounded" style="font-size: 32px !important;" id="thMoon">dark_mode</span> 
                            <span class="material-symbols-rounded" style="font-size: 32px !important;" id="thSun">light_mode</span>
                        </button>`
            }

            if (settings.buttonBack) {
                inj += `<button 
                            class="back_button" 
                            style="height: 38px; width: 38px; z-index: 90; border: none !important; fill: currentColor; position: absolute; margin-left: 8px; margin-top: 14px; border-radius: 100px; cursor: pointer; padding: 2px 3px 0px 3px; background-color: transparent;" 
                            onclick="history.back()">
                            <span class="material-symbols-rounded" style="font-size: 32px !important;">arrow_back</span>
                        </button>`
            }

            plutonny.output(`header`, `
                <div class="hdr">
                    <style>
                        #header {
                            z-index: 3;
                            width: 100vw;
                            background-color: var(--bg-color-header);
                            border-radius: 0 0 24px 24px;
                        }
                        .hdr { 
                            padding-bottom: 12px; 
                            display: flex; 
                            flex-direction: row; 
                            flex-wrap: nowrap; 
                            align-items: center;
                        }
                    </style>
                    <div style="margin-right: auto;"></div>
                    <p style="text-align: center; font-size: 20px; margin-bottom: 8px; z-index: 10;">${settings.textCenter}</p>
                    <div style="margin-right: auto;"></div>
                    ${inj}
                </div>
                ${settings.enableHR ? `<hr style="border: none; height: 0.5px; margin-top: 0; margin-bottom: 0; background-color: var(--text-color); opacity: 0.1; width: calc(100% - 20px);">` : ''}
                ${settings.HTMLAfter}
            `)

            return true

        } catch (e) { 

            plutonny.console.error('frames.js -> header', e) 
            return false

        }
    },
    navbar: function(navbarActive) {
        plutonny.output('navbar', `
        <style>
            #navbar {
                top: calc(100% - 66px);
                width: 100%;
                height: 54px;
                z-index: 10;
                padding-bottom: 12px;
                position: fixed;
                background-color: var(--bg-color-navbar);
            }

            .iconNavbar {
                padding: 1px 16px;
                border-radius: 100px;
            }

            .buttonsNavbar {
                padding: 6px;
                height: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-around;
                align-items: center;
            }

            .${navbarActive}Navbar { color: var(--text-color) !important; }
            .${navbarActive}Icon { background-color: var(--week-ui-color); }

        </style>

        <div class="buttonsNavbar">

            <div style="width: 20%">
                <a style="text-decoration: none;" href="${link({type: 'HTML', file: '#/'})}">
                    <div style="display: flex; flex-direction: column; flex-wrap: nowrap; align-items: center;">
                        <p class="homeNavbar homeIcon iconNavbar" style="color: var(--icon-color); fill: currentColor; margin: 0; height: 26px;"><span class="material-symbols-rounded" style="font-size: 26px !important;">home</span></p>
                        <p class="homeNavbar" style="color: var(--icon-color); margin: 0; font-size: 14px;">главная</p>
                    </div>
                </a>
            </div>

            <div style="width: 20%">
                <a style="text-decoration: none;" href="${link({type: 'HTML', file: '#/grades/'})}">
                    <div style="display: flex; flex-direction: column; flex-wrap: nowrap; align-items: center;">
                        <p class="gradesNavbar gradesIcon iconNavbar" style="color: var(--icon-color); fill: currentColor; margin: 0; height: 26px;"><span class="material-symbols-rounded" style="font-size: 26px !important;">assignment_turned_in</span></p>
                        <p class="gradesNavbar" style="color: var(--icon-color); margin: 0; font-size: 14px;">оценки</p>
                    </div>
                </a>
            </div>

            <div style="width: 20%">
                <a style="text-decoration: none;" href="${link({type: 'HTML', file: '#/other/'})}">
                    <div style="display: flex; flex-direction: column; flex-wrap: nowrap; align-items: center;">
                        <p class="otherNavbar otherIcon iconNavbar" style="color: var(--icon-color); fill: currentColor; margin: 0; height: 26px;"><span class="material-symbols-rounded" style="font-size: 26px !important;">menu</span></p>
                        <p class="otherNavbar" style="color: var(--icon-color); margin: 0; font-size: 14px;">другое</p>
                    </div>
                </a>
            </div>

        </div>
        `)
    },
}