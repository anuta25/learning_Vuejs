const app= Vue.createApp({
    data() {
        return {
            name: "Anuta Iuga",
            age: 26,
            random: Math.floor(Math.random() *2),
            imageSrc: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            inputValue: "text",
        }
    },
    methods: {
         ageFive() {
            let age = this.age + 5;
            return age
        }
    }
});

app.mount("#assignment");