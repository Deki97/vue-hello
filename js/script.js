// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            titleMessage: 'Ciao sono un messaggio e vengo da VueJs!',
            imageFromVue : 'https://www.aiapp.net/wp-content/uploads/2020/09/Agricoltura.jpg'
        }
    }
)