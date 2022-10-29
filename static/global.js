if (BETA || ALPHA) {
    console.log(`
    Это тестовая версия сайта https://college.plutonny.ru
    Если вы увидели какой-то баг или хотите поделиться своим мнением, то пишите разработчику: https://vk.me/pltny
    `)
    console.log(`Версия: ${siteVersion} билд ${siteBuild}
    Plutonny.js: v${plutonny.version} build ${plutonny.build}
    Luxon.js: week ${luxon.DateTime.now().weekNumber} ${WEEK.name.EN}
    Solar.js: sunrise ${SunCalc.getTimes(CURRDATE, 64.4, 40.4).sunrise}`)
}

function capitalize(text) { return text.charAt(0).toUpperCase() + text.slice(1) }

function enableLogger() {
    if ('serviceWorker' in navigator) { 
        window.addEventListener('load', function() {
            navigator.serviceWorker.register(link({type: 'HTML', file: 'service-worker.js'})).then(
                function(registration) { if (BETA || ALPHA) console.log(`ServiceWorker: registration with scope ${registration.scope}`) },
                function(e) { plutonny.console.error('global.js -> enableLogger()', `ServiceWorker registration failed: ${e}`) }
            ).catch(function(e) { plutonny.console.error('global.js -> enableLogger()', `ServiceWorker function (${e})`) })
        })
    } else plutonny.console.warn('global.js -> enableLogger()', 'Service worker is not supported')
}; enableLogger()

window.addEventListener('load', (event) => { document.getElementById('loading').remove() })