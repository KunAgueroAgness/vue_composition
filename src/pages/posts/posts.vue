<template>
	<div>
		POSTS
	</div>
	<div class="" v-for="post in posts">
		<h3>{{ post.title }}</h3>
		<span><i>{{ post.content }}</i></span>
	</div>
</template>

<script setup>
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

</style>