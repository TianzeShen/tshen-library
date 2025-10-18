<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Book Counter</h1>
                <div class="text-center">
                    <button @click="getBookCount">Get Book Count</button>
                    <p v-if="bookCount !== null">Total number of books: {{ bookCount }}</p>
                    <p v-if="error">{{ error }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    data() {
        return {
            bookCount: null,
            error: null
        }
    },
    methods: {
        async getBookCount() {
            try {
                // paste API endpoint inside the quotes
                const response = await axios.get('https://countbooks-euec7mibcq-uc.a.run.app')
                this.bookCount = response.data.bookCount
                this.error = null
            } catch (error) {
                console.error('Error fetching book count:', error)
                this.error = error
                this.bookCount = null
            }
        }
    }
}
</script>