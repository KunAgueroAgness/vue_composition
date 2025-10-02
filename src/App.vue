<template>
  <div
    class="modal-shadow"
    v-if="isModalOpen"
    @click.stop="isModalOpen = false"
  >
    <div @click.stop class="modal bg-white border border-gray-200 p-4 mb-4">
      <div class="mb-4">
        <input
          type="text"
          placeholder="Title"
          class="p-4 border border-gray-200 w-full"
          v-model="editedPost.title"
        />
      </div>
      <div class="mb-4">
        <textarea
          v-model="editedPost.content"
          placeholder="Content"
          class="p-4 border border-gray-200 w-full"
        />
      </div>
      <div class="">
        <a
          @click="updatePost"
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 mb-4"
          >Save</a
        >
      </div>
    </div>
  </div>
  <div class="w-1/2 mx-auto p-4">
    <div class="bg-white border border-gray-200 p-4 mb-4">
      <div class="mb-4">
        <input
          type="text"
          placeholder="Title"
          class="p-4 border border-gray-200 w-full"
          v-model="post.title"
        />
      </div>
      <div class="mb-4">
        <textarea
          v-model="post.content"
          placeholder="Content"
          class="p-4 border border-gray-200 w-full"
        />
      </div>
      <div class="">
        <a
          @click="storePost"
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 mb-4"
          >add POST</a
        >
      </div>
      <div v-if="errors.length > 0" class="mb-4">
        <div class="text-red-600"
        v-for="error in errors" 
        >
          {{ error }}
        </div> 
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 mr-4">
        <h3 class="mb-4">Posts</h3>
        <PostItem v-for="post in posts" :post="post"></PostItem>
      </div>
      <div class="w-1/2">
        <h3 class="mb-4">Favorite posts</h3>
        <PostItem v-for="post in favoritePosts" :post="post"></PostItem>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { computed, provide, reactive, ref , watch} from "vue";
import PostItem from "./components/post/PostItem.vue";

const posts = ref([]);
const isModalOpen = ref(false);
const errors = ref([])

const post = reactive({
  title: "",
  content: "",
  is_favorite: false
});

let editedPost = reactive({
  title: "",
  content: "",
});

const favoritePosts = computed(()=> posts.value.filter(postItem => postItem.is_favorite === true))

// provide('posts', posts)
// provide('editedPost', editedPost)
// provide('isModalOpen', isModalOpen)
provide('context', {
  posts,
  editedPost,
  isModalOpen
})

const storePost = function () {
  if(isNotValidate()) return
  posts.value.unshift({
    title: post.title,
    content: post.content,
  });
  Object.assign(post, {
    title: "",
    content: "",
  });
};



const updatePost = function () {
  Object.assign(posts.value[editedPost.index], {
    title: editedPost.title,
    content: editedPost.content,
  })
  isModalOpen.value = false;
};



const isNotValidate = function(){
  errors.value = []
    if(post.title === ''){
    errors.value.push('The title field is required')
  }
  if(post.content === ''){
    errors.value.push('The content field is required')
  }
  return errors.value.length > 0
}
watch(post, ()=> {
errors.value = []
})
</script>

<style scoped>
.modal-shadow {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  width: 50%;
}
</style>
