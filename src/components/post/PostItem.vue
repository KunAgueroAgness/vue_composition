<template>
      <div
        :class="[postClass, 'bg-white border  p-4 mb-4 flex items-center justify-between']"
      >
        <div class="">
          <h3 class="text-lg text-gray-700">{{ post.title }}</h3>
          <p class="text-lg text-gray-500">{{ post.content }}</p>
        </div>
        <div class="flex items-center justify-between">
					<EditPost :post="post" ></EditPost>
					<DeletePost :post="post"></DeletePost>
          <div >
            <svg @click="post.is_favorite = !post.is_favorite" class="cursor size-5 text-sky-600 " data-slot="icon" :fill="post.is_favorite ? 'text-amber-300' : 'none'" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
            </svg>
          </div>
        </div>
      </div>
</template>
<script setup>
import { computed } from 'vue';
import DeletePost from './DeletePost.vue';
import EditPost from './EditPost.vue';
let postClass = computed(()=> post.is_favorite ? 'border-amber-400' : 'border-gray-200')
const {post, } = defineProps({
	post:{
			type: Object,
			required: true
	}
})


</script>
<style scoped>

</style>