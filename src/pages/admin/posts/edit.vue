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
      <a @click.prevent="updatePost" href="#" class="inline-block bg-sky-600 px-3 py-2 border border-sky-700 text-white">Edit post</a>
    </div>
  </div>
</div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'Edit'
})
onMounted(()=>{
  getPost()
})

const route = useRoute();

const post = reactive({
  title: '',
  content: '',
})
const getPost = function(){
  axios.get(`http://localhost:3000/posts/${route.params.id}`)
  .then(res=> {
    Object.assign(post, res.data)
  })
}

const updatePost = function(){
    axios.patch(`http://localhost:3000/posts/${route.params.id}`, post)
  .then(res=> {
    console.log('updateres', res);
    
  })
}
</script>

<style lang="scss" scoped>

</style>