<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">Tutorial Republic</a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <a href="#" class="nav-item nav-link active">Home</a>
            <a href="#" class="nav-item nav-link">Services</a>
            <a href="#" class="nav-item nav-link">About</a>
            <a href="#" class="nav-item nav-link">Contact</a>
          </div>
          <div class="navbar-nav ms-auto">
            <a href="#" class="nav-item nav-link">Register</a>
            <a href="#" class="nav-item nav-link">Login</a>
          </div>
        </div>
      </div>
    </nav>
  
    <div class="container">
      <div class="p-5 my-4 bg-light rounded-3">
        <h1>Learn to Create Websites</h1>
        <p class="lead">
          In today's world internet is the most popular way of connecting with the people...
        </p>
        <p>
          <a 
            href="https://www.tutorialrepublic.com" 
            target="_blank" 
            class="btn btn-success btn-lg"
          >
            Get started today
          </a>
        </p>
      </div>
  
      <div class="row g-3">
        <div 
          v-for="(item, index) in cards" 
          :key="index" 
          class="col-md-6 col-lg-4 col-xl-3"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
          <p>
            <a href="#" target="_blank" class="btn btn-success">Learn More &raquo;</a>
          </p>
        </div>
      </div>
  
      <hr>
      <footer>
        <div class="row">
          <div class="col-md-6">
            <p>Copyright &copy; 2021 Tutorial Republic</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="#" class="text-dark">Terms of Use</a>
            <span class="text-muted mx-2">|</span>
            <a href="#" class="text-dark">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  const cards = [
    {
      title: 'HTML',
      content: 'HTML is the standard markup language for describing the structure...'
    },
    {
      title: 'CSS',
      content: 'CSS is used for describing the presentation of web pages...'
    },
  ]
  </script>