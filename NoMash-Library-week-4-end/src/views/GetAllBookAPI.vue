<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Get All Book API</h1>
                <div class="text-center">
                    <li v-for="book in jsondata" :key="book.isbn">
                        {{ book }}
                    </li>
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
            jsondata: null,
            error: null
        };
    },
    mounted() {
            this.getAllBookAPI();
    },
    methods: {
        async getAllBookAPI() {
            try {
                const response = await axios.get('https://getallbooks-euec7mibcq-uc.a.run.app')
                this.jsondata = response.data
                this.error = null
            } catch (error) {
                console.error('Error fetching all book:', error)
                this.error = error
                this.books = null
            }
        }
    }
}
</script>