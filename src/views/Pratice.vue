<template>
  <div class="pratice">
 
<div id ="index">
     <PraticeText/>
     

  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PraticeText from '@/components/PraticeText.vue'

export default {
  name: 'Pratice',
  components: {
    PraticeText
  }
}

</script>


<style scoped lang="scss">
   
   #index{
     position: relative;
     width: auto;
     height: auto;

  
  
}

</style>