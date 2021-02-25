<template>
 <div class ="partice">
    <div id = "input">
    <b-form-input v-model="pen" placeholder="請輸入數量"> 鉛筆 </b-form-input>
    
  </div>




   
 </div>
</template>
<script>
 export default {


  data() {
      return {   
        pen:'',
        notebook:'',
        waterbottle:'',
        others:'其他事項....',
        department:'請選擇部門',
        emergency:'',
        member2:['出納組','資訊中心','人文組'] ,        
         email: "",
        name: "",
        food: null,
        checked: []
}
      
  },
    methods: {
    
   
   
    
  
  },
   
   props: {
    user: String,
    
  }
  
 }
</script>


<style scoped lang="scss">

.partice{
    position: relative;
    width:auto;
    height: auto;
#input { 




  

}

}
</style>
