<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">VUE-blog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#">글목록</a>
        <a class="nav-link" href="#">상세페이지</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </nav>

  <div class="content">
    <div class="container mb-5">
      <h3>yang blog 라우터 공부</h3>
      <p>Vue 로 만들었음</p>
    </div>
    <hr />

    <div class="mt-5 mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email 주소</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">내용</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary" type="button">완료</button>
      <button class="btn btn-secondary" type="button">취소</button>
    </div>
  </div>

  <List v-for="write in 블로그글" :key="write"/>

</template>


<script>
import List from './components/List.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  data(){
    return {
      블로그글 : blog
    }
  },
  components: {
    List : List,
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
  margin: 100px;
}
</style>
