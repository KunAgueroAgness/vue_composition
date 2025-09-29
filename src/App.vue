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
    <div class="">
      <div
        v-for="post in posts"
        class="bg-white border border-gray-200 p-4 mb-4 flex items-center justify-between"
      >
        <div class="">
          <h3 class="text-lg text-gray-700">{{ post.title }}</h3>
          <p class="text-lg text-gray-500">{{ post.content }}</p>
        </div>
        <div class="flex items-center justify-between">
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
          <div>
            <svg
              @click="deletePost(post)"
              class="size-4 text-red-600 cursor-pointer"
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const posts = ref([]);
const isModalOpen = ref(false);
const errors = ref([])

const post = reactive({
  title: "",
  content: "",
});

let editedPost = reactive({
  title: "",
  content: "",
});

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

const editPost = function (post) {
  isModalOpen.value = true;
  Object.assign(editedPost, {
    index: posts.value.indexOf(post),
    title: post.title,
    content: post.content,
  });
};

const updatePost = function () {
  Object.assign(posts.value[editedPost.index], {
    title: editedPost.title,
    content: editedPost.content,
  })
  isModalOpen.value = false;
};

const deletePost = function (post) {
  posts.value = posts.value.filter((i) => i !== post);
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
