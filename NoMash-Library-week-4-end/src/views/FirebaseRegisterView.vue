<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Create an Account</h1>
                <p class="text-center"><input type="text" placeholder="Email" v-model="email" /></p>
                <p class="text-center"><input type="password" placeholder="Password" v-model="password"/></p>
                <p class="text-center"><button @click="register">Save to Firebase</button></p>   
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Firebase Rigister Successful!")
        router.push('/login')
    }).catch((error) => {
        console.log(error.code)
    })
}
</script>