import { defineStore } from "pinia";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";


export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [],
    post: {},
    route: useRoute(),
    router: useRouter()
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    getPosts(){
      axios.get('http://localhost:3000/posts')
      .then(res => {
        this.posts = res.data;
      })
  },
    getPost(){
      axios.get(`http://localhost:3000/posts/${this.route.params.id}`)
        .then(res =>{
          this.post = res.data
        })
    },
    storePost(){
  axios.post('http://localhost:3000/posts', this.post)
  .then(res => {
    console.log('res', res);
  })
    Object.assign(post, {
    title: "",
    content: "",
  });
},
    updatePost(){
      axios.patch(`http://localhost:3000/posts/${this.route.params.id}`, this.post)
      .then(
        this.router.push('/admin/posts')
      )
},
    deletePost(post){
      axios.delete(`http://localhost:3000/posts/${post.id}`)
        .then(res=>{
          this.posts = this.posts.filter(i => i !== post)
        })
    },
  },
})