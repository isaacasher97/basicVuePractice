const app = Vue.createApp({
    data() {
        return {
            url: 'https://isaacasher.dev',
            showData: true,
            x: 0,
            y: 0,
            students: [
                { studentId: 1, name: 'Isaac', age: 26, currentSchool: 'General Assembly' },
                { studentId: 2, name: 'John', age: 27, currentSchool: 'General Assembly' },
                { studentId: 3, name: 'David', age: 28, currentSchool: 'General Assembly' }
            ],
            graduated: true,
            books: [
                { title: 'Harry Potter 1', author: 'J.K.Rowling', img: './assets/hp1.jpg', isFav: true },
                { title: 'Harry Potter 2', author: 'J.K.Rowling', img: './assets/hp2.jpg', isFav: false },
                { title: 'Harry Potter 3', author: 'J.K.Rowling', img: './assets/hp3.jpg', isFav: true }
            ]
        }
    },
    methods: {
        toggleShowData() {
            this.showData = !this.showData
        },
        isGraduated() {
            this.graduated = !this.graduated
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            console.log(e)
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
            console.log(book.isFav)
        }
    }
})

app.mount('#app')