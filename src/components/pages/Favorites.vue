<template>
    <div id='favorites-page'>
        <h2>Favorites</h2>

        <div v-if='items.length == 0'>No favorites, yet...</div>

        <ul v-else-if='posts.length > 0' class='favoritesList'>
            <li v-for='item in items' :key='item.id'>
                "{{ getPostDetails(item.id)['title'] }}" ({{ getPostDetails(item.id)['date']}})
                <button id = 'removeFavorite' @click='removeFromFavorites(item.id)'>Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import Favorites from './Favorites'
import * as app from '../../app.js'

export default {
    name: 'Favorites',
    data: function() {
        return {
            items: [],
            favorites: null,
            posts: []
        }; 
    },

    methods: {
        getPostDetails(postId) {
            return this.posts.find(({ id }) => id === postId);
        },
        removeFromFavorites: function(postId) {
            this.favorites.remove(postId);
        }
    },
    mounted() {
        this.favorites = new Favorites();
        this.items = this.favorites.getItems();
        // Getting all post data from the mock API
        this.posts = app.axios.get(app.config.api).then(response => (this.posts = response.data));
          
    }
};
</script>
<style>
#favorites-page {
    margin-left: 10%;
}

.favoritesList {
    list-style-type:none;
    padding: 0;
    margin: 0;
}
.favoritesList li {
    font-size: larger;
    line-height: 2em;
}
.favoritesList li:before {
    content : "♥";
    padding-right: 8px;
    color: coral;
}
#removeFavorite{
    margin-left: 10px;
    border-radius: 3px;
    color: crimson;
    font-weight: bold;
}
</style>