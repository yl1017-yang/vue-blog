<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">VUE-blog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <!-- <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#">글목록</a>
        <a class="nav-link" href="#">상세페이지</a>
        <a class="nav-link disabled">Disabled</a> -->
        <router-link to="/vue-blog/">홈</router-link>
        <router-link to="/vue-blog/list">리스트페이지</router-link>
      </div>
    </div>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </nav>

  <div class="content">    

    <div class="content-nav">
      <router-link to="/vue-blog/">홈</router-link> / 
      <router-link to="/vue-blog/list">리스트페이지</router-link> / 
      <router-link to="/vue-blog/detail">디테일페이지</router-link>
    </div>


    <router-view :블로그글="블로그글"></router-view> 
    <!-- <List :블로그글="블로그글" /> -->

    
  </div>

  

</template>


<script>
//import List from './components/List.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  data(){
    return {
      블로그글 : blog
    }
  },
  components: {
    //List : List,
  }
}
</script>

<style>
#app {
  font-family: 맑은 고딕, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  letter-spacing: -0.5px;
}
.content{
  margin: 50px 100px;
}
.content-nav {
  background: darkcyan;
  border-radius: 10px;
  padding: 20px 0;
  margin-bottom: 50px;
  color: #fff;
}
.content-nav a {
  font-size: 20px;
  color: #fff;
}
</style>
