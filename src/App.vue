<template>
  <div id="app">

    <div class="topnav" :style="(onmouseover)?style2:style1">
      <div class="logo" @click="(onmouseover==false)?(onmouseover=true):(onmouseover=false)">
        <img src="./assets/logo/VIS006.png">
      </div>
      <div class="navbtn">
        <img v-show="!onmouseover" @click="onmouseover=true" class="menuicon" src="./assets/icon/menu.png">
        <img v-show="onmouseover"  @click="onmouseover=false" class="closeicon" src="./assets/icon/close.png">
      </div>
      <ul class="content" >
        <li class="mainnav" v-for="i in nav" @click="(i.isSub)?null:$router.push(i.link),onmouseover=false">
          <span :class="(i.isSub)?'sub_nav_title':null">{{i.title}}</span>
          <ul :class="(i.isSub)?'sub_nav':null">
            <li v-for="s in i.sub" @click="$router.push(s.link)">
              {{s.title}}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="mobile_nav">
      <div class="logo">
        <img src="./assets/logo/VIS006.png">
      </div>
      <div class="navbtn">
        <img v-show="!onmouseover" @click="onmouseover=true" class="menuicon" src="./assets/icon/menu.png">
        <img v-show="onmouseover"  @click="onmouseover=false" class="closeicon" src="./assets/icon/close.png">
      </div>
      <ul class="mobile_content" v-show="onmouseover">
        <li class="mainnav" :class="(i.isSub)?'isSub':'notSub'" v-for="(i,index) in nav" @click="(i.isSub)?showsubnav(index):($router.push(i.link),onmouseover=false)">
          <span class="main_nav_title">{{i.title}}</span>
          <img class="arrow" src="./assets/icon/down.png"></img>
          <ul :class="(i.isSub)?'subnav subnav'+index:'hidden'">
            <li class="sub_nav_item" v-for="s in i.sub" @click="$router.push(s.link),onmouseover=false">
              <span >{{s.title}}</span>
            </li>
          </ul>
        </li>
        <div class="wrap" @click="onmouseover=false"></div>
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
        overflow:'hidden'
      },
      style2:{
        height:'100vh',
      },
      nav:[
        {
          title:'主页',
          isSub:false,
          link:'/'
        },
        {
          title:'School Day',
          link:'/sd/combat',
          isSub:true,
          sub:[
            {
              title:'散打',
              link:'/sd/combat'
            },
            {
              title:'舞蹈',
              link:'/sd/dance'
            },
            {
              title:'西点寿司',
              link:'/sd/sushi'
            },
            {
              title:'跆拳道',
              link:'/sd/taekwondo'
            },
            {
              title:'金丝沙画',
              link:'/sd/sand'
            },
            {
              title:'非洲鼓',
              link:'/sd/drum'
            },
          ]
        },
        {
          title:'全景学校',
          link:'/s/gj',
          isSub:true,
          sub:[
            { 
              title:'郑州航空港区育人国际学校',
              link:'/s/gj'
            },
            {
              title:'郑州外国语女子中学',
              link:'/s/nz'
            },
            {
              title:'郑州航空港区育人高级中学',
              link:'/s/nn'
            },
            {
              title:'襄城县育人宝贝幼儿园',
              link:'/s/bb'
            }
          ]
        }
      ]
    }
  },
  methods:{
    showsubnav(val){
      let arrow = document.getElementsByClassName('arrow')
      let el = document.getElementsByClassName('subnav'+val)
      if(el[0].style.display!='block'){
        arrow[val].style.transform='rotate(180deg)'
        el[0].style.display='block'
      }else{
        arrow[val].style.transform='rotate(0deg)'
        el[0].style.display='none'
      }
    },
    navto(val){
      this.$router.push('s/'+val)
      this.onmouseover=false
    }
  },
  created(){
    if(window.innerWidth<900){
      this.style1={
        height:'2em',
        background:'#2e2e2e'
      }
      this.style2={
        height:'100vh',
        background:'rgba(46, 46, 46,.5)'
      }
    }
  }
}
</script>

<style lang="less">
@font:STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";
@navheight:3em;
@navheight2:2em;

@maincolor:#2e2e2e;
@subcolor:#3b3b3b;

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
.hidden{
  display: none;
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
  position: fixed;
  right:0;
  z-index: 2000;
  color:#fff;
  width: 100vw;
  height:100vh;
  background: rgba(46, 46, 46,1);
  .logo{
    position: fixed;
    left:1em;
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
    top:0.6em;
    right:1.5em;
    .menuicon,.closeicon{
      width:2em;
      opacity: 0.8;
    }
  }
  .content{
    margin-top:@navheight;
    z-index: 2500;
    .mainnav{
      line-height: 80px;
      height: 80px;
      font-size: 27px; 
      color:#fff;
      background: @subcolor;
      text-align: center;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      cursor: pointer;
      &:hover{
        background: rgba(0,0,0,.3);
      }
      &:hover .sub_nav_title{
        display: none;
      }
      &:hover .sub_nav{
        display: block;
      }
      .sub_nav{
        display: none;
        position: relative;
        top:-5px;
        li{
          display: inline-flex;
          white-space:nowrap;
          overflow:hidden;
          padding:0 2em;
          border-right: 1px solid rgba(255,255,255,0.2);
          font-size: 15px;
          &:hover{
            background: @maincolor;
          }
        }
        li:last-child{
          border-right: none;
        }
      }
      
    }
  }
}

.mobile_nav{
  display: none;
  height:2.5em;
  background: @maincolor;
  position: fixed;
  width: 100%;
  z-index: 1000;
  .logo{
    position: fixed;
    padding:.5em;
    img{
      height:1.5em;
    }
  }
  .navbtn{
    position: fixed;
    right:.5em;
    top:.6em;
    img{
      width:1.25em;
      opacity: 0.8;
    }
  }
  .mobile_content{
    
    overflow-y: auto;
    overflow-x: auto;
    position: relative;
    animation: flyin ease .5s;
    height:100vh;
    width:220px;
    background: @maincolor;
    color:#fff;
    line-height: 45px;
    text-align: center;
    .mainnav{
      background: @maincolor;
      border-bottom:1px solid rgba(255,255,255,0.2);
      .arrow{
        display: none;
      }
    }
    .isSub{
      position: relative;
      .arrow{
        display: block;
        position: absolute;
        top:10px;
        right:5px;
        width:20px;
      }
      .sub_nav{
        background: @subcolor;
        display: none;
        font-size: 0.9em;
        animation: flyin ease .5s;
      }
      .sub_nav_item{
        background: @subcolor;
        border-top:1px solid rgba(255,255,255,0.2);
      }
    }
    .wrap{
      position: fixed;
      top:0;
      left:0;
      height:100vh;
      width:100vw;
      background: rgba(255,255,255,0.3);
      z-index: -1;
    }
  }
}

@keyframes flyin{
  from{right:100%;}
  to{right:0;}
}

@media screen and (max-width:800px){
  .topnav{
    display: none;
  }
  .mobile_nav{
    display:block;
  }
}
</style>
