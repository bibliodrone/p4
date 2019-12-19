<!-- BlogHome.vue 
Displays a summary list of blog posts with title, date, tags, using sub-component
BlogPostList
-->
<template>
    <div id='posts'>
        <blog-post-list
            v-for='post in posts'
            :key= 'post.id'
            :post='post'
        ></blog-post-list>
    </div>
</template>
<script>
    import BlogPostList from './BlogPostList.vue'

    export default {
        name: 'BlogHome',
        components: { BlogPostList },
        
        computed: {
        posts: function() {

            return this.$store.getters.getPosts();
        }
        },
        
        //preserved this code for reference
        mounted() {
        }
    }
</script>
<style>

#posts {
    background-color: oldlace;
}
</style>