<template>
<div class="mb-4">
  <div class="bg-white border-gray-200 p-4">
    <div class="mb-4">
      <input v-model="postStore.post.title" type="text" placeholder="Title content" class="border border-gray-200 p-4 w-full">
    </div>
    <div class="mb-4">
      <textarea v-model="postStore.post.content" placeholder="Post content" class="border border-gray-200 p-4 w-full"/>
    </div>
    <div class="mb-4">
      <a @click.prevent="postStore.updatePost" href="#" class="inline-block bg-sky-600 px-3 py-2 border border-sky-700 text-white">Edit post</a>
    </div>
  </div>
</div>
</template>

<script setup>
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';

defineOptions({
  name: 'Edit'
})

onMounted(()=>{
  postStore.getPost()
})

const postStore = usePostStore()

</script>

<style lang="scss" scoped>

</style>