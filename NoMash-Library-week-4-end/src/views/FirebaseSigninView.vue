<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Sign in</h1>
                <p class="text-center"><input type="text" placeholder="Email" v-model="email"/></p>
                <p class="text-center"><input type="password" placeholder="Password" v-model="password"/></p>
                <p class="text-center"><button @click="signin">Sign in via Firebase</button></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';
const email=ref('')
const password=ref('')
const router = useRouter()
const auth = getAuth()
const signin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Firebase Signin Successful!")
        router.push('/')
        console.log(auth.currentUser)
    }).catch((error) => {
        console.log(error.code)
    })
}
</script>