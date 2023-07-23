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

            }]        
        }
    },

    methods: {
        //aggiungo una funzione al pulsante
        addTodoItem() {
            this.toDoList.push(this.newToDoItem)
        }
    }
}).mount("#app")