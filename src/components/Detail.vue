<template>
  
  <div class="container mb-5">
    <h3>상세페이지 {{$route.params.id}}</h3>
    <hr /><br>
    <h4>{{ 블로그글[$route.params.id].title }}</h4>
    <p>{{ 블로그글[$route.params.id].content }}</p>
    <hr />
    <router-view></router-view> <!-- children: {} 안에 있는 컴포넌트 보여줌 author, comments -->    
  </div>
  <hr />
  <button @click="$router.go(-1)">뒤로가기</button>
</template>

<script>
export default {
  name: 'App',
  props : {
    블로그글 : Array,
  }
  
}
</script>

<style>

</style>