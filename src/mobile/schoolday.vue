<template>
  <div class="m_sd">
    <ul>
      <li v-for="(i,index) in $store.state.schoolday" 
        :style="{backgroundImage:'url(' + bkimg[index] + ')'}" 
        :class="(main==index)?'active':'unactive'" 
        @click="main = index">
        <div class="popup">
          <div class="icon">
            <img :src="i.icon">
            <p class="title">{{i.title}}</p>
          </div>
          <div class="btn" @click="opensd(i.title)">查看更多</div>
          <p class="summary">{{i.summary}}</p>
        </div>

        <div class="mask" 
          :style="(main==index)?null:{background:bkcolor[index]}"
          :class="(main==index)?'active':'unactive'"></div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      main:0,
      cardheight:['12em','12em','12em','12em','12em','12em'],
      bkcolor:[
        'rgba(52, 152, 219,.5)',
        'rgba(41, 128, 185,.5)',
        'rgba(30, 104, 151,.5)',
        'rgba(19, 80, 117,.5)',
        'rgba(8, 56, 83,.5)',
        'rgba(0, 32, 49,.5)'
      ],
      bkimg:[
        require('../assets/sd/散打.jpg'),
        require('../assets/sd/舞蹈.jpg'),
        require('../assets/sd/xd.jpg'),
        require('../assets/sd/tqd.jpg'),
        require('../assets/sd/金丝沙画.jpg'),
        require('../assets/sd/fzg.jpg')
      ]
    }
  },
  methods:{
    opencard(val){
      let card = document.getElementsByClassName('video')
    },
    opensd(name){
      this.$router.push('/msd/'+name)
    }
  },
  created(){
    if(window.innerWidth>=900){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  color: #fff;
  padding-top: 2em;
  li {
    width: 100vw;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #fff;
    background-position:center;
    background-size: cover;
    background-repeat:no-repeat;
    .popup {
      position: relative;
      width: 100%;
      z-index: 20;
      .icon {
        width: 100%;
        height: 50px;
        img {
          position: absolute;
          top: 1em;
          left: 2em;
          width: 5em;
        }
        .title {
          position: absolute;
          left: 4em;
          top: 1em;
          font-size: 2em;
        }
      }
      .summary {
        position: relative;
        top: 4em;
        padding: 1em;
        height:3.6em;
        overflow: hidden;
      }
      .btn{
        position: relative;
        top: 4rem;
        width:8em;
        font-size:1em;
        margin:0 auto;
        padding:0.3em 1.5em;
        background: #3498db;
        border-radius: 7px;
      }
    }

    .mask {
      position: absolute;
      top:0;
      width: 100vw;
      background: rgba(0,0,0,0.4);
    }
  }
  .active {
    height: 14em;
  }
  .unactive {
    height: 7em;
  }
}
</style>
