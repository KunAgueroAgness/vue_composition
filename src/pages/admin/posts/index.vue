<template>
  <div class="mb-4">
    <h3><strong>Admin POSTS</strong></h3>
	</div>
    <div class="mb-4">
      <router-link :to="{name: 'admin.posts.create'}" class="inline-block bg-sky-600 px-3 py-2 border border-sky-700 text-white">Crete post</router-link>
    </div>
  <div>
    <div>
      <table class="w-full border border-gray-200">
        <thead>
          <tr>
            <th class="bg-white border-b border-gray-200 text-left p-2">ID</th>
            <th class="bg-white border-b border-gray-200 text-left p-2">Title</th>
            <th class="bg-white border-b border-gray-200 text-left p-2">Content</th>
            <th class="bg-white border-b border-gray-200 text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts">
            <td class="bg-white border-b border-gray-200 text-left p-2 ">{{ post.id }}</td>
            <td class="bg-white border-b border-gray-200 text-left p-2 truncate-chars">
              <router-link :to="{name: 'admin.posts.show', params: {id: post.id}}">{{ post.title }}</router-link>  
            </td>
              <td class="bg-white border-b border-gray-200 text-left p-2 truncate-chars">{{ post.content }}</td>
            <td class="bg-white border-b border-gray-200 text-left p-2 "></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';


defineOptions({
	name:'Posts'
})
import axios from 'axios';
import { onMounted, ref } from 'vue';

onMounted(()=>{
	getPosts()
})

const posts = ref([])

const getPosts = function(){
	axios.get('http://localhost:3000/posts')
	.then(res => {
		posts.value = res.data;
	})
}
</script>

<style lang="scss" scoped>
.truncate-chars {
    overflow: hidden;
    max-width: calc(var(--chars, 20) * 1ch);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>  