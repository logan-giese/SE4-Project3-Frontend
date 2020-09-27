<template>
<div id="app">
    <div id="nav">
        <router-link to="/">Course List</router-link> |
        <router-link to="/add">Add Course</router-link>
    </div>
    <router-view />
    </div>
</template>

<script></script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
    }
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active {
        color: #42b983;
    }
    /* styling for shared elements */
    button {
        border-radius: 10px;
        padding: 12px;
        min-width: 80px;
        margin-left: 8px;
        margin-right: 8px;
        font-size: 15px;
        background-color: white;
        border-color: #42b983;
        transition: background-color .2s;
    }
    button:hover {
        background-color: #f8f8f8;
    }
</style>
