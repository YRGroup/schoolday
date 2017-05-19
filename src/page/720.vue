<template>
  <div class="seven">
    <!--<div class="nav">
      <img src="../assets/VIS008.png">
      <div class="subnav">
        <span>切换学校</span>
        <ul>
          <li @click="iframesrc = 'http://www.gy720.com/pano/view/9986'">郑州航空港区育人国际学校</li>
          <li @click="iframesrc = 'http://www.gy720.com/pano/view/9989'">郑州外国语女子中学</li>
          <li @click="iframesrc = 'http://www.gy720.com/pano/view/9991'">郑州航空港区育人高级中学</li>
          <li @click="iframesrc = 'http://www.gy720.com/pano/view/10019'">襄城县育人宝贝幼儿园</li>
        </ul>
        
      </div>
    </div>-->
    <iframe :src="iframesrc"></iframe>
  </div>
</template>

<script>
export default {
  name: 'hello',
  // img:require('@/assets/VIS008.png'),
  data () {
    return {
      iframesrc:'http://www.gy720.com/pano/view/9986'
    }
  },
  methods:{
    
  },
  created(){
    let school = this.$route.params.school.toString()
    console.log(school)
    this.iframesrc = this.$store.state.data720.find(function(a){return a.school == school}).link
  }
}
</script>

<style lang="less" scoped>
.nav{
  width:100%;
  height:6em;
  background: linear-gradient(to right,rgba(255,255,255,1),rgba(0,0,0,0));
  text-align: center;
  vertical-align:middle;
  position: fixed;
  img{
    height:4em;
    margin-top:1em;
    z-index: 100;
  }
  .subnav{
    position: absolute;
    left:0;
    top:0;
    color:#000;
    width:15em;
    cursor: pointer;
    span{
      line-height: 6em;
    }
    ul{
      display: none;
      background:rgba(255,255,255,0.7);
      li{
        padding:1em;
      }
    }
    &:hover ul{
      display: block;
    }
  }
}
.seven{
  background: #000;
}
iframe{
  width:100%;
  height:calc(100vh-5em);
  border:none;
  margin-top:3em;
}
@media screen and (max-width:800px){
  iframe{
    margin-top:2em;
  }
}
</style>
