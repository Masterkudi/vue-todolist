const { createApp } = Vue

const app = createApp( {
    data() {
        return {
            newToDoItem: {
                text: "",
                color: "#00c2ff"
            },
            toDoList: [{
                text: "primo task",
                color: "#ff00ff",

            },
          ],        
        };
    },

    methods: {
        //aggiungo una funzione al pulsante
        addTodoItem() {
            //creando una copia dell'oggetto si perde la reattività
            const itemClone = {...this.newToDoItem}
            //qua non si pusha più il normale toDoItem ma il clone (itemClone)
            this.toDoList.push(itemClone)
        }
    },
}).mount("#app")