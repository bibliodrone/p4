<template>
  <div id="app">
    <h1>Gerry's Blog</h1>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
            <router-link exact :to='{ name: link }'>
            {{ link }}
            </router-link>
        </li>    
      </ul>
     </nav> 
    
     <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name : 'app', 
  components: {},
  data: function() {
    return {
      links:['categories', 'homepage', 'favorites', 'mailinglist']
    };
  },
  mounted() {
  this.$store.dispatch('setPosts');
  }
}

</script>

<style>
.router-link-active {
  color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1000px;
}
h1 {
  text-align: center;
}
nav {
  padding: 5px 15px;
  background-color: lightgray;
  text-align: center;
}

nav ul {
  list-style-type: none;
  padding-left: 10%;
}
nav li {
  display: inline;
  margin: 0px 10px;
  background: snow;
  padding: 5px;
  border-radius: 5px;
  }
</style>
