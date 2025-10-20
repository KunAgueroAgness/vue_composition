<template>
  <div>
    <div class="mb-4">
      <h3>Posts</h3>
    </div>
    <div class="">
      <div class="">
        <div class="bg-white border-gray-200 border p-4">
          <h3 class="mb-4 text-lg">{{ postStore.post.title }}</h3>
          <p class="text-sm">{{ postStore.post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePostStore } from '@/stores/post';

defineOptions({
  name: "Show"
})
onMounted(()=> {
  postStore.getPost()
})
const postStore = usePostStore()
</script>