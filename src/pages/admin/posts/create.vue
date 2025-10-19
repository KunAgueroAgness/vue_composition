<template>
<div class="mb-4">
  <div class="bg-white border-gray-200 p-4">
    <div class="mb-4">
      <input v-model="post.title" type="text" placeholder="Title content" class="border border-gray-200 p-4 w-full">
    </div>
    <div class="mb-4">
      <textarea v-model="post.content" placeholder="Post content" class="border border-gray-200 p-4 w-full"/>
    </div>
    <div class="mb-4">
      <a @click.prevent="storePost" href="#" class="inline-block bg-sky-600 px-3 py-2 border border-sky-700 text-white">Store post</a>
    </div>
  </div>
</div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

defineOptions({
  name: 'Create'
})
const post = reactive({
  title: '',
  content: '',
})
const storePost = function(){
  axios.post('http://localhost:3000/posts', post)
  .then(res => {
    console.log('res', res);
  })
    Object.assign(post, {
    title: "",
    content: "",
  });
}
</script>

<style lang="scss" scoped>

</style>