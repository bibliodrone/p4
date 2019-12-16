<!-- BlogPage: displays a single full post on its own page -->
<template>
    <div id='blog-page' v-if='post'>
        <h2 id='page-title' data-test='title-of-post'>{{ post.title }}</h2>
        <div id='page-date' data-test='date-of-post'>{{ post.date }}</div>
        <ul id="categories">
            <li v-for='cat in post.categories' :key='cat'>
                {{ cat }}
            </li>
        </ul>
        <p id='post-content' data-test='post-content-test'>{{ post.content }}</p>
        <button id = "addToFavorites" @click='addToFavorites(post.id)'>Add to Favorites</button>

        <transition name='fade'>
            <span class='addedToFavorites' data-test='added-to-favorites' v-if='addedFavorite'>Added to favorites!</span>
        </transition>
           
        <p></p>
        <div id = 'routerLink'>
            <router-link data-test='home-link' :to='"/"'>&larr; Return to Home Page</router-link>
        </div>
    </div>
</template>

<script>
//const axios = require ('axios');
import Favorites from './Favorites';

export default {
    name: 'BlogPage',
    props: ['id'],
    data: function() {
        return {
            //post:null,
            addedFavorite: false
        };
        //return {};
    },
    computed: {
        post: function() {
            return this.$store.getters.getPostById(this.id);
        }
    },

    //preserved mounted code for reference
    mounted() {
            /* this.post = axios.get("https://my-json-server.typicode.com/bibliodrone/e28-p3-api/posts/" + this.id)
            .then(response => {
                this.post= response.data;
            }); */
    },
    methods: {
        addToFavorites: function(post_id) {
            let faves = new Favorites();
            faves.add(post_id);
            //this.$store.commit('setFavorites', post_id)
            this.addedFavorite = true;
            setTimeout(() => (this.addedFavorite = false), 2000);
        },
        handleSubmit: function() {
            if(!this.formHasErrors) {
                alert("submitted!")
            }
        }
    }
}
</script>

<style>
#blog-page {
    margin-left: 10%;
}
#addToFavorites {
    border-radius: 3px;
    color: green;
    font-weight: bold;
    
}
.addedToFavorites {
    margin: 10px;
    padding: 5px;
    background: lightcyan;
}
#post-content {
    margin-top: 40px;
    margin-bottom: 25px;
}
#page-title {
    text-align: left;
}
#page-date {
    font-style: italic;
    text-align: left;
}
#routerLink {
    margin-top: 35px;
    font-weight: bold;
}
</style>