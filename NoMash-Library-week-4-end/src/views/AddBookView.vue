<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">Add Book</h1>
          <form @submit.prevent="addBook">
            <div class="text-center">
              <label for="isbn">ISBN:</label>
              <input type="text" v-model="isbn" id="isbn" required />
            </div>
            <div class="text-center mt-2">
              <label for="name">Name:</label>
              <input type="text" v-model="name" id="name" required />
            </div>
            <div class="text-center mt-2">
            <button type="submit">Add Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'

import BookList from '../components/BookList.vue'

export default {
    setup() {
        const isbn = ref('')
        const name = ref('')

        const addBook = async () => {
            try {
                const isbnNumber = Number(isbn.value)
                if (isNaN(isbnNumber)) {
                    alert('ISBN must be valid a number')
                    return
                }

                await addDoc(collection(db, 'books'), {
                    isbn:isbnNumber,
                    name:name.value
                })
                isbn.value = ''
                name.value = ''
                alert('Book added successsfully!')
            } catch (error) {
                console.error('Error adding book:', error)
            }
        }
        return {
            isbn,
            name,
            addBook
        }
    },
    components: {
        BookList
    }
}
</script>