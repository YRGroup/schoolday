<template>
  <div class="seven">
    <iframe :src="iframesrc"></iframe>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      iframesrc:'http://www.gy720.com/pano/view/9986'
    }
  },
  methods:{
    getsrc(){
      let school_id = this.$route.params.school.toString()
      this.iframesrc = this.$store.state.data720.find(function(a){return a.id == school_id}).link
    }
  },
  created(){
    this.getsrc()
  },
  watch:{
    "$route": "getsrc"
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
