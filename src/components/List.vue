<template>
<div class="list-box">
  <div v-for="(a, i) in 블로그글" :key="i">
    <h5 @click="$router.push('./detail/0/author')">{{ 블로그글[i].title }}</h5>
    <p>{{ 블로그글[i].date }}</p>
  </div>
  <!-- <div>
    <h5 @click="$router.push('./detail/1/comments')">{{ 블로그글[1].title }}</h5>
    <p>{{ 블로그글[1].date }}</p>
  </div>
  <div>
    <h5 @click="$router.push('./detail/2')">{{ 블로그글[2].title }}</h5>
    <p>{{ 블로그글[2].date }}</p>
  </div> -->
</div>
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
.list-box > div {
  margin: 20px;
  border-bottom: 1px solid #ddd;
}
h5 {
cursor: pointer;
}
</style>