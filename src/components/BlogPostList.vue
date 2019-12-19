<!-- BlogPost.vue 
    populates list of posts in BlogPosts' framework with info for each post
-->
<template>
    <div class='blog-post-list'>
       
         <router-link :to='{ name: "posts", params: {"id" : post.id }}'>
                 <h2 class='post-title'>{{ post.title }}</h2>
        </router-link>
        <div class='post-date'>{{ post.date }}</div>
        <ul id="categories">
            <li v-for='category in post.categories' :key='category'>
                {{ category }}
            </li>
        </ul>
         <hr>
    </div>
</template>
<script>
export default {
    name:'BlogPostList',
    props: ['post'],
    data: function() {
        return {
            posts: null,
        };
    }, 
}

</script>
<style>
#categories {
    list-style-type:none;
    padding-left: 0px;
}
#categories li {
    display: inline;
    margin: 0px 5px;
    padding: 3px;
    border: 2px solid black;
    font-variant: small-caps;
    font-size: larger;
}
.blog-post-list{
    margin-left: 10%;
    background-color: white;
    padding: 5px 15px 5px 5px;
}

.post-date {
    display: table;
    margin-bottom: 20px;
}

</style>