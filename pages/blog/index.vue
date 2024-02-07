<template>
  <div v-if="posts.length">
    <div
      v-for="post in posts"
      :key="post.slug"
    >
      <h2>{{ post.title }}</h2>
      <div v-html="post.content" />
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/api/posts');
    const data = await response.json();
    posts.value = data.posts;
  } catch (error) {
    console.error('Error loading posts:', error);
  }
});

</script>


<script>
export default {
  layout: 'Default'
};
</script>
