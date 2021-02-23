<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutText/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutText from '@/components/AboutText.vue'

export default {
  name: 'About',
  components: {
    AboutText
  }
}
</script>

