<template>
  <div id="app">
 <div class="topnvbar">
  <!-- As a heading -->
  <b-navbar variant="success" type="light" >
  <b-navbar-brand tag="h1" class="mb-0" id="picandtext" href="/" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Logo_of_Taipei_City_Hospital.svg/1200px-Logo_of_Taipei_City_Hospital.svg.png"  width="100" >
  </b-navbar-brand>
  <h6>OOXX Sheet System</h6>
  
   <b-navbar-nav class="ml-auto" >
     <h4>使用者:{{ user }}</h4>
     <h4>員工編號:{{ userid }}</h4>
     <b-button pill variant="light" size="lg" class="p-auto" router-link to ="/">  登出  </b-button>
    </b-navbar-nav>
  </b-navbar>
</div>



  <div class="sidebar" >
  <b-nav vertical class="w-60"  tabs  >
    <!---search---->
    <b-nav-form >
      <b-form-input class="ml-5" placeholder="Search" type="search" ></b-form-input>
    </b-nav-form>
   <!----sidebaroption----->
    <b-nav-item   to ="/pratice">01表單</b-nav-item>
    <b-nav-item to="/about"> 02表單</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item>Disabled</b-nav-item>
     <b-nav-item  router-link to ="/pratice">01表單</b-nav-item>
    <b-nav-item>02表單</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item>Disabled</b-nav-item>
     <b-nav-item  router-link to ="/pratice">01表單</b-nav-item>
 

  </b-nav>
</div>
   
    <router-view/>
  </div>
</template>

<script>


export default {


   data() {
      return {
       user:'哈哈是我啦',
       userid:'E0800',
      }
   }
}
</script>


<style lang="scss">
.sidebar{
  float: left;
  overflow-y:auto;
  height:830px;
  width:340px;
  background-color:black;

 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:auto;
  height:auto;
 


  .nav-item a { 
            color: whitesmoke ;
            font-size:25px;
            text-align:center;
           
    }

}

h1{
  text-align: center;
  padding:15px 100px
  
}
  

.topnvbar{
  h6{
    font-size:50px;
   font-weight: bold;
  text-align: center;
  padding:0px 70px  0px 30px
  

  }
 
h4{
  font-weight: bold;
  text-align: center;
  padding:10px 70px 
  }
}
</style>
