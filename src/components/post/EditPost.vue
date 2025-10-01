<template>
	<div class="mr-4">
		<svg
			@click="editPost(post)"
			class="size-4 text-green-600 cursor-pointer"
			data-slot="icon"
			fill="none"
			stroke-width="1.5"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
			></path>
		</svg>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const {post} = defineProps({
	post:{
		type: Object,
		require: true
	}, 
})

const context = inject('context')

const{posts, editedPost, isModalOpen} = context

const editPost = function (post) {
  isModalOpen.value = true;
  Object.assign(editedPost, {
    index: posts.value.indexOf(post),
    title: post.title,
    content: post.content,
  });
};
</script>

<style scoped>

</style>