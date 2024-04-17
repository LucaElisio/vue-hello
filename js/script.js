// alert("ciao")

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue;

createApp({
    data(){
        return{
            // greeting: "Prova"
            message: "",
            output: "",
            img: ""
        }
    },

    methods: {
        print: function(){
            this.output = `Gerry dice: ${this.message}`
            this.img = "./img/gerry.jpeg"
        }
    }
}).mount("#app");