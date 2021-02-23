<template>
 <div class ="partice">
   <!--
     <div class="praticetext">
   -----V-MODEL綁定--------
   <p>假設 1 日幣 = 0.278 台幣</p>
  <div>台幣 <input type="text" v-model="twd" v-on:input="twd2jpy"></div>
  <div>日幣 <input type="text" v-model="jpy" v-on:input="jpy2twd"></div>
  </div>
  -->
  <!--輸入-->
  <div id ="insert">
    <p>鉛筆:</p> 
    <input type="text" v-model.trim ="pen" name="pen" >根
    <p>筆記本:</p>
    <input type="text" v-model.trim="notebook" name="notebook" >本
    <p>礦泉水:</p>
    <input type="text" v-model.trim="waterbottle" name="waterbottle" >瓶
     <p>備註:</p>
       <textarea name="others" v-model.trim="others" rows="5" cols="20" ></textarea>
  </div>
<!--勾選-->

<!--v-for-->
 <div id ="select">
   <p>部門</p>
   <select v-model="department" name="department" >
     <option v-for="(item, index) in member2" :key="index">{{ item }}</option>
   </select>

 </div>

 <div id="radio" >
    <p>緊急程度</p>
    <p><input type="radio" name="interest"  value="很急" v-model="emergency" > 很急</p>
    <p><input type="radio" name="interest"  value="普通" v-model="emergency"> 普通</p>
    <p><input type="radio" name="interest" value="慢慢來" v-model="emergency"> 慢慢來</p>  
 </div>
   
<div id="btn">
   <input type="submit" value="提交表單">
</div>

<div id ="show"> 
<p>鉛筆: {{ pen }}根</p> 
<p>筆記本: {{ notebook }}本</p> 
<p>礦泉水: {{ waterbottle }}瓶</p>  
<p>緊急程度: {{ emergency }}</p> 
<p>部門: {{ department }}</p>
<p>備註: {{ others }}</p>
</div>


 </div>
 
</template>
<script>
 export default {


  data() {
      return {
        twd:'1',
        jpy:'0.278',
        pen:'',
        notebook:'',
        waterbottle:'',
        others:'其他事項....',
        department:'請選擇部門',
        emergency:'',
        member2:['出納組','資訊中心','人文組']
     
      }
  },
    methods: {
    twd2jpy(){
    this.jpy = Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
    },
    jpy2twd(){
    this.twd = Number.parseFloat(Number(this.jpy) * 0.278).toFixed(3);
    },
  },
   
   props: {
    price: String,
    qulity:String,
  }
  
 }
</script>


<style scoped lang="scss">
.partice{
    
    position: relative;
    left:500px;
    width:25%;
    height:25%;
    
    

#insert {
  position:relative;
  left:-150px;
  top:25px;

}
#show {
  position:relative;
  left:300px;
  top:-690px;

}
#select {
  position: relative;
  left:80px;
  top:-387px;
}
#radio{
  position: relative;
  left:80px;
  top:-380px;
  p{
      color: red;
  }

}
#btn{
   position: relative;
  left:500px;
  top:-350px;
}

h3 {
  margin: 60px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  color: blue;
  margin-right: 4;
  position: right;
  font-size:20px
}
}
</style>
