<template>
  <div id="app">
    <div class="topnav" :style="(onmouseover)?style2:style1">
      <div class="logo" @click="(onmouseover==false)?(onmouseover=true):(onmouseover=false)" :style="(onmouseover)?style3:style4">
        <img src="./assets/logo/VIS008.png">
      </div>
      <div class="navbtn">
        <img v-show="!onmouseover" @click="onmouseover=true" class="menuicon" src="./assets/icon/menu.png">
        <img v-show="onmouseover"  @click="onmouseover=false" class="closeicon" src="./assets/icon/close.png">
      </div>
      <ul class="content" >
        <li class="mainnav" v-for="i in nav" @click="onmouseover=false">
          <span :class="(i.isSub)?'navtitle2':'navtitle'" @click="$router.push(i.link)">{{i.title}}</span>
          <ul :class="(i.isSub)?'subnav':null">
            <li v-for="s in i.sub" @click="$router.push(s.link)">
              {{s.title}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      onmouseover:false,
      style1:{
        height:'3em',
        background:'linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0),rgba(0,0,0,0.5))',
        overflow:'hidden'
      },
      style2:{
        height:'auto',
        background:'rgba(115,42,44,.8)'
      },
      style3:{
        width:'100%',
        background:'#000'
      },
      style4:{
        width:'15em'
      },
      nav:[
        {
          title:'主页',
          isSub:false,
          link:'/'
        },
        {
          title:'School Day',
          link:'/'
        },
        {
          title:'全景学校',
          link:'/s',
          isSub:true,
          sub:[
            {
              title:'郑州航空港区育人国际学校',
              link:'/s/郑州航空港区育人国际学校'
            },
            {
              title:'郑州外国语女子中学',
              link:'/s/郑州外国语女子中学'
            },
            {
              title:'郑州航空港区育人高级中学',
              link:'/s/郑州航空港区育人高级中学'
            },
            {
              title:'襄城县育人宝贝幼儿园',
              link:'/s/襄城县育人宝贝幼儿园'
            }
          ]
        }
      ]
    }
  },
  methods:{
    navto(val){
      this.$router.push('s/'+val)
      this.onmouseover=false
    }
  },
  created(){
    if(window.innerWidth<900){
      this.style1={
        height:'2em',
        background:'#000'
      }
      this.style2={
        height:'100vh',
        background:'rgba(115,42,44,1)'
      }
    }
  }
}
</script>

<style lang="less">
@font:STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";
@color0:#732a2c;
@navheight:3em;
@navheight2:2em;

body{
  overflow-x: hidden;
  font-family: @font;
  
}
pre{
  font-family: @font;
}
*{
  margin:0;
  padding:0;
  transition: all .3s ease-in;
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
a,a:link,a:hover,a:visited,a:active{
  color:inherit;
  text-decoration: none;
}
::-webkit-scrollbar  
{  
  width: 5px;  
  height: 16px; 
}  
::-webkit-scrollbar-thumb  
{  
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
  background-color: #555;  
}  

.topnav{
  width:100vw;
  position: fixed;
  z-index: 2000;
  background: rgba(0,0,0,.2);
  color:#fff;
  overflow-x: hidden;
  overflow-y: hidden;
  .logo{
    position: fixed;
    height: @navheight;
    line-height: @navheight;
    text-align: center;
    transition: all .3s ease-in;
    img{
      height:2.5em;
      margin-top: .25em;
    }
  }
  .navbtn{
    position: fixed;
    width:1.5em;
    height:@navheight;
    top:0;
    right:2em;
    .menuicon,.closeicon{
      width:3em;
      padding:.5em;
    }
  }
  .content{
    margin-top:@navheight;
    z-index: 2500;
    .mainnav{
      height:100px;
      width:100vw;
      line-height: 100px;
      color:#fff;
      text-align: center;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      cursor: pointer;
      .navtitle,.navtitle2{     
        font-size: 50px; 
      }
      &:hover .navtitle2{
        display: none;
      }
      .subnav{
        display: none;
        li{
          display: inline-block;
          width:15em;
          border-right: 1px solid rgba(255,255,255,0.2);
          font-size: 15px;
          &:hover{
            background: rgba(0,0,0,.5);
          }
        }
        li:last-child{
          border-right: none;
        }
      }
      &:hover .subnav{
        display: block;
      }
      &:hover{
        background: rgba(0,0,0,.5);
      }
    }
  }
}

@media screen and (max-width:800px){
  .topnav{
    height: @navheight2;
    .logo{
      height: @navheight2;
      line-height: @navheight2;
      img{
        height: 1.5em;
        margin-top:.25em;
      }
    }
    .navbtn{
      height:@navheight2;
      .menuicon,.closeicon{
        width:@navheight2;
        padding:.5em;
      }
      img{
        width: 2em;
      }
    }
    .content{
      margin-top:@navheight2;
      .mainnav{
        height:60px;
        line-height: 60px;
        .navtitle,.navtitle2{     
          font-size: 30px; 
        }
        &:hover .navtitle2{
          display: block;
        }
        .subnav{
          display: block;
          li{
            display: block;
            width:100%;
            background: rgba(0,0,0,.5);
            border-bottom: 1px solid rgba(255,255,255,0.8);
          }
        }
      }
    }
  }
}
</style>
