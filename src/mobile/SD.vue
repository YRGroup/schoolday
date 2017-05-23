<template>
  <div class="main">
    
    <div class="content">

      <div class="title">
        <img :src="currentdata.icon"></img>
        <span class="icontitle">{{currentdata.title}}</span>
      </div>

      <p class="info">{{currentdata.content}}</p>
      <video class="myvideo" loop autoplay :poster="currentdata.img">
          <source :src="currentdata.video" type="video/webm">
          <source :src="currentdata.video2" type="video/mp4">
      </video>

      <div class="grade">
        <img src="../assets/icon/年龄.png"></img>
        <span>学段：{{currentdata.grade}}</span>
      </div>

      <div class="provider">
        <div class="item" 
          @mouseover="map_index=1,showmap(1)">
          <img :src="$store.state.logo['郑州航空港区育人国际学校']"></img>
        </div>
        <div class="item" @mouseover="map_index=2,showmap(2)">
          <img :src="$store.state.logo['郑州外国语女子中学']"></img>
        </div>
        <div class="item" @mouseover="map_index=3,showmap(3)">
          <img :src="$store.state.logo['襄城县育人国际学校']"></img>
        </div>
        <div class="item" @mouseover="map_index=4,showmap(4)">
          <img :src="$store.state.logo['郑州航空港区育人高级中学']"></img>
        </div>
      </div>

      <span class="closemap" 
        @click="map_index=null"
        v-show="map_index!=null">
        <img src="../assets/icon/close2.png">
      </span>

      <div :id="'map'+i" v-show="map_index==i" v-for="i in 4">      
      </div>

    </div>



  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      currentdata:{},
      map_index:null
    }
  },
  computed:{

  },
  methods:{
    showmap(val){
      let thismap = document.getElementById('map'+val)
      if(thismap.childNodes.length == 0){
        window.location.reload()
      }
    },
    getsrc(){
      let name = this.$route.params.name
      this.currentdata = this.$store.state.schoolday.find(function(val){return val.id == name})
    }
  },
  created(){
    this.getsrc()
    if(window.innerWidth>=900){
      this.$router.push('/sd/'+name)
    }
  },
  watch:{
    "$route": "getsrc"
  }
}


</script>

<style lang="less" scoped>
* {
  transition: all .3s ease-in;
}

.main {
  width: 100%;
  background: url('../assets/bg.png');
  background-repeat: repeat-y;
  min-height: 100vh;
}

.myvideo {
  margin-top:1em;
  max-width: 100%;
  max-height: 100%;
}

.wrap {
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.content {
  color: #fff;
  
  padding: 2em;
  border-radius: 5px;
  .title {
    font-size: 40px;
    line-height: 60px;
    margin-top: 1em;
    cursor: pointer;
    img {
      width: 1em;
    }
    .icontitle {
      position: relative;
      top: -.2em;
      left: .2em;
    }
  }
  .info {
    text-indent: 2em;
  }
  .grade {
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, .3);
      margin: 1em 0;
    }
    img {
      width: 2em;
    }
    span {
      position: relative;
      top: -.5em;
      left: 1em;
    }
  }
  .provider {
    .item {
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      width: 4em;
      height: 4em;
      text-align: center; 
      display: inline-block;
      margin:.5em;
      cursor: pointer;
    }
    img {
      width: 3em;
      margin:.5em 0;
    }
  }
}

#map1,#map2,#map3,#map4{
  height:300px;
  width: 100%;
  background:rgba(0, 0, 0, 0.4);
  z-index: 2300;
  border-radius: 10px;
  // display: none;
}
.closemap{
  position: relative;
  float:right;
  bottom:0;
  background: rgba(0, 0, 0, .6);
  color:#fff;
  cursor: pointer;
  z-index: 2;
  width:30px;
  height:30px;
  line-height: 40px;
  border-radius: 50%;
  img{
    position: absolute;
    top:5px;
    left:5px;
  }
  &:hover{
    background: rgba(0, 0, 0, 1);
  }
}

</style>
