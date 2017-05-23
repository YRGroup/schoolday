<template>
  <div @mouseenter="shownav = true" @mouseleave="shownav = false" class="schoolday">
    <ul>
      <li v-for="(i,index) in $store.state.schoolday" 
        :class="(main==index)?'active':'unactive'" 
        @mouseover="thisplay(index)" 
        @mouseleave="stopplay(index)"
        @click="opensd(i.id)">

        <video loop>
          <source :src="i.video" type="video/webm">
          <source :src="i.video2" type="video/mp4">
        </video>
        
        <div class="popup">
          <div class="icon">
            <img :src="i.icon">
            <p class="title">{{i.title}}</p>
          </div>
          <p class="titlebar"></p>
          <p class="summary">{{i.summary}}</p>
        </div>
        <div class="mask" :style="(main==index)?null:{background:bkcolor[index]}"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      main:5,
      bkcolor:[
        'rgba(52, 152, 219,.5)',
        'rgba(41, 128, 185,.5)',
        'rgba(30, 104, 151,.5)',
        'rgba(19, 80, 117,.5)',
        'rgba(8, 56, 83,.5)',
        'rgba(0, 32, 49,.5)'
      ]
    }
  },
  methods:{
    thisplay(n){
      document.getElementsByTagName('video')[n].play();
      this.main = n;
    },
    stopplay(n){
      document.getElementsByTagName('video')[n].pause();
    },
    opensd(name){
      this.$router.push('/sd/'+name)
    }
  },
  created(){
    if(window.innerWidth<900){
      this.$router.push('m')
    }
  }
}
</script>

<style lang="less" scoped>
@titleheight: 5em;

@height:calc(100vh-3em);

.schoolday{
  background: #000;
  height: @height;
  padding-top:3em;
  overflow: hidden;
}
ul {
  height: @height;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  li {
    height: @height;
    float: left;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin-left: -1px;
    cursor: pointer;
    video {
      position: absolute;
      top: 0;
      left: -50%;
      z-index: 1;
      height: @height;
      width: auto;
    }
    
    &:hover .popup .icon {
      top: 0em;
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }
    &:hover .popup img {
      top:.6em;
      right:.5em;
      width: 3em;
    }
    &:hover .popup .title {
      display: inline;
      line-height: 2em;
      top:-1em;
      font-size: 2em;
    }
    .popup {
      .icon {
        position: relative;
        top:-37em;
        width: 100%;
        z-index: 21;
        opacity: 0.7;
        img {
          position: relative;
          width: 5em;
          margin: 0 auto;
        }
        .title {
          position: relative;
          font-size: 1.5em;
        }
      }
      z-index: 20;
      position: absolute;
      bottom: 0;
      height: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      .summary{
        padding: 1em 6em;
        line-height: 2em;
        font-size: 14px;
      }
    }
    &:hover .popup {
      height: 40vh;
    }
    .mask {
      position: absolute;
      width: 100%;
      height: 100vh;
      z-index: 11;
    }
  }
  .active {
    width: 50vw;
  }
  .unactive {
    width: 15vw;
  }
}

@media screen and (max-width: 800px) {

}
</style>
