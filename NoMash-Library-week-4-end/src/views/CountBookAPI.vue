<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Count Book API</h1>
                <div class="text-center">
                    <pre>{{ jsondata }}</pre>
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
            this.getBookCountAPI();
    },
    methods: {
        async getBookCountAPI() {
            try {
                const response = await axios.get('https://countbooks-euec7mibcq-uc.a.run.app')
                this.jsondata = response.data
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