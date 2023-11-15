<template>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <div>
        <button @click="decrease">- 1</button>
        <button @click="increase">+ 1</button>
    </div>
</template>

<script>
export default {
    props: {
        msg: String,
        start: {
            // required: true,
            type: Number,
            default: 5,
            validator(value) {
                return value > 0
            }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquare() {
            return this.counter * this.counter
        },
        increase() {
            return this.counter++
        },
        decrease() {
            return this.counter--
        }
    },
    computed: {
        squareCounter() {
            return this.counter * this.counter
        }, 
        customTitle() {
            return this.msg || 'Counter'
        }
    }
}
</script>

<style>

button {
    margin: 0 5px;
    background-color: #64bb87;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>
