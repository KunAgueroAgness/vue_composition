<template>
      <div
        class="bg-white border border-gray-200 p-4 mb-4 flex items-center justify-between"
      >
        <div class="">
          <h3 class="text-lg text-gray-700">{{ post.title }}</h3>
          <p class="text-lg text-gray-500">{{ post.content }}</p>
        </div>
        <div class="flex items-center justify-between">
					<EditPost :post="post" ></EditPost>
					<DeletePost :post="post"></DeletePost>
        </div>
      </div>
</template>
<script setup>
import DeletePost from './DeletePost.vue';
import EditPost from './EditPost.vue';

const {post, } = defineProps({
	post:{
			type: Object,
			required: true
	}
})


</script>
<style scoped>

</style>