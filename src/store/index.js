import Vue from 'vue'
import Vuex from 'vuex'
const axios = require ('axios');

//retrieve posts with Vuex
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state,payload) {
            state.posts = payload;
        }
    }, 
    actions: {
        setPosts(context){
            axios
            .get("https://my-json-server.typicode.com/bibliodrone/e28-p3-api/posts/")
            .then(response => {context.commit('setPosts', response.data);
             });
        }

    }, 
    getters: {
        // Get a specific post by ID
        getPostById(state) {
            return function(id) {
                return state.posts.find(post => post.id == id);
            }
        },
        // Get all posts data
        getPosts(state) {
            return function() {
                return state.posts;
            }
        }
    }
})