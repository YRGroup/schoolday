<template>
  <div class="main">
    
    <div class="content">

      <div class="title">
        <img :src="currentdata.icon"></img>
        <span class="icontitle">{{currentdata.title}}</span>
      </div>

      <p>{{currentdata.content}}</p>
      <video class="myvideo" loop :poster="currentdata.img">
          <source :src="currentdata.video" type="video/webm">
          <source :src="currentdata.video2" type="video/mp4">
      </video>

      <div class="grade">
        <img src="../assets/icon/年龄.png"></img>
        <span>学段：{{currentdata.grade}}</span>
      </div>

      <div class="provider">
        <div class="item" 
          @mouseover="showmap(1)">
          <img src="../assets/logo/育人男中.png"></img>
        </div>
        <div class="item" @mouseover="showmap(2)">
          <img src="../assets/logo/爱因斯坦国际幼儿园.png"></img>
        </div>
        <div class="item" @mouseover="showmap(3)">
          <img src="../assets/logo/女中.png"></img>
        </div>
        <div class="item" @mouseover="showmap(4)">
          <img src="../assets/logo/襄城育人学校.png"></img>
        </div>
      </div>

      <span class="closemap" 
        @click="showmap1='none',showmap2='none',showmap3='none',showmap4='none'" 
        v-show="(showmap1=='block')|(showmap2=='block')|(showmap3=='block')|(showmap4=='block')">
        <img src="../assets/icon/close2.png">
      </span>

      <div id="map1" :style="{display:showmap1}">      
      </div>

      <div id="map2" :style="{display:showmap2}">
      </div>

      <div id="map3" :style="{display:showmap3}">
      </div>

      <div id="map4" :style="{display:showmap4}">
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
      showmap1:'none',showmap2:'none',showmap3:'none',showmap4:'none'
    }
  },
  methods:{
    showmap(val){
      let thismap = document.getElementById('map'+val)
      if(thismap.childNodes.length == 0){
        window.location.reload()
      }
      switch(val){
        case 1:
          this.showmap4='none'
          this.showmap3='none'
          this.showmap2='none'
          this.showmap1='block'
          break;
        case 2:
          this.showmap4='none'
          this.showmap3='none'
          this.showmap2='block'
          this.showmap1='none'
          break;
        case 3:
          this.showmap4='none'
          this.showmap3='block'
          this.showmap2='none'
          this.showmap1='none'
          break;
        case 4:
          this.showmap4='block'
          this.showmap3='none'
          this.showmap2='none'
          this.showmap1='none'
          break;
      }
    }
  },
  created(){
    let name = this.$route.params.name.toString()
    this.currentdata = this.$store.state.schoolday.find(function(a){return a.title == name})
    if(window.innerWidth>=900){
      this.$router.push('/sd/'+name)
    }
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
    margin: 1em 0;
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
  pre {
    max-height:10em;
    overflow: auto;
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
  display: none;
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
