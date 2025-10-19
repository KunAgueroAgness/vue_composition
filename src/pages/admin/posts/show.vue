<template>
  <div>
    <div class="mb-4">
      <h3>Posts</h3>
    </div>
    <div class="">
      <div class="">
        <div class="bg-white border-gray-200 border p-4">
          <h3 class="mb-4 text-lg">{{ post.title }}</h3>
          <p class="text-sm">{{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: "Show"
})
onMounted(()=> {
  getPost()
})

const post = reactive({})
const route = useRoute()

const getPost = function(){
  axios.get(`http://localhost:3000/posts/${route.params.id}`)
  .then(res =>{
    Object.assign(post, res.data
      
    )    
    console.log(res);
  })
  
}
</script>

<style lang="scss" scoped>

</style>