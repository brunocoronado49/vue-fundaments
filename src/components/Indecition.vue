<template>
    <img v-if="img" :src="img" alt="bg">
    <div class="bg-dark"></div>

    <div class="indecition-container">
        <input
          type="text"
          v-model="question"
          v-on:keypress.enter="makeQuestion"
          placeholder="Ask me a question">
        <p>Remember finish it with "?" symbol</p>

        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Indecition',
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    watch: {
        question(value, oldValue) {
            this.isValidQuestion = false
            console.log({ value })

            if (!value.includes('?')) return
            this.isValidQuestion = true
            this.getAnswer()
        }
    },
    methods: {
        async getAnswer() {
            try {
                this.answer = 'Loading...'
                const {answer, image} = await fetch('https://yesno.wtf/api')
                    .then(res => res.json())
                
                this.answer = answer === 'yes' ? 'Si!' : 'No!'
                this.img = image
            } catch(error) {
                console.log('Indecision error:', error)
                this.answer = 'Cannot load api'
                this.img = null
            }
        }
    }
}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecition-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        margin-bottom: 10px;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>
