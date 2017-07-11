<template>
  <div class="index">
    <div class="main">
      <img src="//nzr2ybsda.qnssl.com/images/33905/FsUANh0Ru67Yxv_oKDYutfYWdJ67.png?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/format/png">
    </div>
    <div class="section section1">
      <div class="card">
        <p class="title">集团简介</p>
        <p class="subTitle">风雨砥砺十余载·厚德载物谱新章</p>
        </br>
        <img src="//nzr2ybsda.qnssl.com/images/33905/lsCl7npKanAdoOhch_3AlXIbe7q7.jpg?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpg">
        <p class="itemTitle">特色铸就品牌·课研促进发展</p>
        </br>
        <li>郑州育人学校由刘付坤校长于2000年创办，至今已在郑州发展16年，于2014年成立教育集团，并在创始人家乡襄城县建设了一所学校。十多年来，学校遵循“以人为本，因材施教”的核心育人理念，争取帮助每一个孩子打开了解世界的一扇窗。</li>
        <li>2016年5月和6月，郑州育人教育集团先后与美国名校普渡大学和美国德州大学圣安东尼奥分校签订了校长和师资培训合作协议；</li>
        <li>2016年5月，引入台湾e-BABY国际教育集团理念的早教中心投入运营；</li>
        <li>2016年7月，与德国欧洲职业教育和社会教育集团达成合作意向，筹建应用技术型大学，完善了集团的教育体系和架构；</li>
        <li>2016年8月，郑州航空港区育人国际学校15年一贯制（K12）新校区开始启用。同时，美国阿尔伯特·爱因斯坦学院授权郑州育人教育集团在旗下郑州航空港育人国际学校（经开区分校）实施幼儿园和小学合作项目，成为美国阿尔伯特·爱因斯坦学院在中国的第一个校区和中国总部所在地。</li>
        <li>教育的意义是在孩子成长过程中起到良好的引领作用。我们一直在努力，为教育添砖加瓦，把教育工作当成使命，把教育理念融入信仰，汲取中西方教育的精华，传承中华民族教育的根基，郑州育人教育集团矢志不渝的奔走在路上。</li>
        <li>男生男校，培养中华好儿男。</li>
        <li>女生女校，为培养优秀母亲奠定基础。</li>
        <li>每一个孩子都是一棵幼苗，家庭、社会和学校是他们成长的土壤，我们愿成为土壤里最有价值的养分。</li>
        <li>迄今，郑州育人教育集团已有近万名学生和近千名教职工。</li>
      </div>
    </div>
  
    <div class="section2">
      <schoolday></schoolday>
    </div>
  
    <div class="section section3">
      <div class="card">
        <p class="title">育人教育</p>
        <p class="subTitle">以人为本 · 因材施教</p>
        </br>
        <img src="//nzr2ybsda.qnssl.com/images/33905/FlBD03iVA8L3mlI_YHL6RG7-D5mz.jpg?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg">
        <p @click="openNew('/f/gj')">
          <span class="sLink">郑州航空港育人国际学校</span>
        </p>
        <p>心智合一，博雅致远</p>
        </br>
        </br>
        <img src="//nzr2ybsda.qnssl.com/images/33905/Fg8mRT7-u3RUbg6em_RB0SSPR2el.jpg?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg">
        <p @click="openNew('/f/nz')">
          <span class="sLink">郑州外国语女子中学</span>
        </p>
        <p>优秀优雅，秀外慧中</p>
        </br>
        </br>
        <img src="//nzr2ybsda.qnssl.com/images/33905/FtvWD6ej4q6HTm8uAG0Xa1L1PjvG.jpg?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg">
        <p @click="openNew('/f/nn')">
          <span class="sLink">郑州航空港区育人高级中学</span>
        </p>
        <p>勇于优秀 · 敢于担当</p>
        </br>
        </br>
        <img src="//nzr2ybsda.qnssl.com/images/33905/Fuq3lvp5hte9ElNvOqMoX-_RsywW.jpg?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg">
        <p @click="openNew('/f/xc')">
          <span class="sLink">襄城育人国际学校</span>
        </p>
        <p>不鸣则已，一鸣惊人</p>
        </br>
        </br>
        <img src="//nzr2ybsda.qnssl.com/images/33905/FmK_XVGxYYSv3YAiGToHXuhsuKnj.jpg?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg">
        <p @click="openNew('/f/bb')">
          <span class="sLink">e-BABY精致早教</span>
        </p>
        <p>因为爱，懂宝贝才能更爱宝贝。</p>
        </br>
        </br>
        <img src="//nzr2ybsda.qnssl.com/images/33905/FiN-5tVmn3bWmXxRFwTrcjtQH6Yl.jpg?imageMogr2/strip/thumbnail/1200x9000>/quality/90!/interlace/1/format/jpeg">
        <p @click="openNew('/f/ay')">
          <span class="sLink">爱因斯坦国际幼儿园</span>
        </p>
        <p>国际化 · 优质化 · 特色化</p>
        </br>
        </br>
      </div>
    </div>
  
    <div class="section section4">
  
      <div class="swipe" v-show="swipeIndex==index" v-for="(i,index) in youku">
        <div class="video">
          <iframe width="854px" :src='i.video' frameborder=0></iframe>
        </div>
        </br>
        <p class="title">{{i.title}}</p>
        <p class="subTitle" style="color:#fff">{{i.subTitle}}</p>
        <button @click="openNew(i.link)">访问官网</button>
      </div>
  
      <div class="dot">
        <li v-for="(i,index) in youku" @click="swipeIndex=index" :class="swipeIndex==index?'active':null"></li>
      </div>
  
    </div>
  
    <div class="section section5">
      <div class="card">
        <p class="title">校长介绍</p>
        <div class="flex">
          <div class="item" v-for="(i,index) in $store.state.xiaozhangInfo" @click="(showMore===index)?showMore=null:showMore=index">
            <img :src="i.face" alt="育人国际学校校长 贾莉">
            <p class="itemTitle">{{ i.name }}</p>
            <p class="subTitle">{{ i.job }}
            <br>{{ i.old_job }}</p>
            <div class="more" v-show="showMore===index">
              <p v-for="p in i.info">{{p}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section6">
      <div class="card">
        <p class="title">联系我们</p>
        <p>
          <p class="subTitle">河南·郑州</p>
          <p class="subTitle">东区行政总部</p>
          <p class="subTitle">郑东新区祥盛街8号福晟国际2号楼14F</p>
          <p class="subTitle">TEL：0371-55261585</p>
          <p class="subTitle">Mail：</p>
          <p class="subTitle">contact@yurenedugroup.com</p>
        </p>
        <img src="//nzr2ybsda.qnssl.com/images/33905/FniBYK2bMlf5Nh182ex-9Y9Vom7R.jpg?imageMogr2/strip/thumbnail/1200x9000>/interlace/1/format/jpeg">
        <p>请关注我们的微信</p>
        <p>获取更多集团新闻</p>
      </div>
    </div>
  
    <div class="section section7">
      <p>Copyright © 2017 yearnedu.com Inc. All Rights Reserved. 郑州育人教育集团</p>
      <p>备案/许可证编号：
        <a href="http://www.miitbeian.gov.cn/">豫ICP备16026588号</a>
      </p>
    </div>
  
  </div>
</template>

<script>
import schoolday from '@/mobile/schoolday'

export default {
  components: {
    schoolday
  },
  data() {
    return {
      iframesrc: 'http://main.yearnedu.com/',
      youku: [
        {
          title: '郑州外国语女子中学',
          subTitle: '优秀优雅，秀外慧中',
          link: 'http://www.zznz.org/',
          video: 'http://player.youku.com/embed/XMTY1NzYxODE2MA=='
        },
        {
          title: '郑州航空港区育人高级中学',
          subTitle: '勇于优秀 · 敢于担当',
          link: 'http://www.hkgqyrgjzx.com/',
          video: 'http://player.youku.com/embed/XMTY3MjQ3MjgyNA=='
        },
        {
          title: '[花young年华]',
          subTitle: '郑州外国语女子中学2017新年联欢晚会后台花絮',
          link: 'http://www.zznz.org/',
          video: 'http://player.youku.com/embed/XMjQ4MzE3NDg5Ng=='
        },
        {
          title: '相遇·我和ta的故事',
          subTitle: '我走过许多地方的路，行过许多地方的桥，看过许多次数的云，却只爱过一个正当最好年龄的TA。',
          link: 'http://v.youku.com/v_show/id_XMjUyMDA2NDk2MA==.html',
          video: 'http://player.youku.com/embed/XMjUyMDA2NDk2MA=='
        },
        {
          title: '相知·为你写下诗篇',
          subTitle: '我走过许多地方的路，行过许多地方的桥，看过许多次数的云，却只爱过一个正当最好年龄的TA。',
          link: 'http://v.youku.com/v_show/id_XMjUyMDA2MjY0NA==.html',
          video: 'http://player.youku.com/embed/XMjUyMDA2MjY0NA=='
        },
        {
          title: '相守·记录瞬间的永恒',
          subTitle: '我走过许多地方的路，行过许多地方的桥，看过许多次数的云，却只爱过一个正当最好年龄的TA。',
          link: 'http://v.youku.com/v_show/id_XMjUyMDA2NjEyNA==.html',
          video: 'http://player.youku.com/embed/XMjUyMDA2NjEyNA=='
        },
        {
          title: '你在瞎忙什么',
          subTitle: 'Why are you so busy?',
          link: 'http://v.youku.com/v_show/id_XMjUyMDA0MjA5Mg==.html',
          video: 'http://player.youku.com/embed/XMjUyMDA0MjA5Mg=='
        },
      ],
      xiaozhang_popup_data: {
        name: '',
        face: '',
        job: '',
        old_job: '',
        job2: '',
        info: [''],
      },
      showMore: 'null',
      swipeIndex: 0
    }
  },
  methods: {
    openNew(val) {
      window.open(val)
    },
    openXiaozhangPopup(val, $event) {
      console.log($event.layerY)
      this.xiaozhang_popup_data = this.$store.state.xiaozhangInfo[val]
      this.show_xiaozhang_popup = true
    },
  },
  created() {
    if (window.innerWidth >= 900) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  padding-top: 2rem;
  min-width: 320px;
  transform-style: preserve-3d;
  font-family: 'source sans pro', 'PingFang SC', "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", sans-serif;
}

.main {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-position: center center;
  background-image: url('//nzr2ybsda.qnssl.com/images/33905/lsaH1ljohdcuLgHmTMcax4vzBQ54.jpg?imageMogr2/strip/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpg');
  width: 100%;
  text-align: center;
  height: 100vh;
  img {
    margin-top: 10rem;
  }
}

.section {
  padding: 2rem;
  text-align: center;
  transform: translateZ(0px);
  .card {
    background: #fff;
    max-width: 1020px;
    margin: 0 auto;
    padding: 2rem;
    transform: translateZ(100px);
    img {
      max-width: 100%;
    }
    li {
      list-style: disc;
      text-align: left;
    }
    .flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .item {
        width: 300px;
        padding: 2rem;
      }
    }
  }
}

.section1,
.section3,
.section7 {
  background: #f3f0e0;
}

.section2 {
  padding: 0;
  max-width: 100%;
}

.section4 {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-position: 50.4487% 54.4868%;
  background-image: url('http://o0m4okv24.qnssl.com/static/backgrounds/blurred-bg/57.jpg'); // height: 750px
  padding-bottom: 10rem;
  color: #fff;
  position: relative;
  .swipe {
    animation: fly .3s ease;
  }
  .video {
    margin: 0 auto;
    iframe {
      width: 100%;
      height: 240px;
    }
  }
  .dot {
    margin: 3rem -2rem;
    position: absolute;
    bottom: 2rem;
    width: 100%;
    li {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 50%;
      margin: .2rem;
      cursor: pointer;
    }
    .active {
      background: transparent;
      border: 1px solid #fff;
    }
  }
}

.section5 {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-position: center center;
  background-image: url('http://o0m4okv24.qnssl.com/static/backgrounds/striking-pack-2/28.jpg');
  .more{
    margin:0 -4rem;
    padding:1rem 0;
    background: #f3f0e0;
  }
}

.section6 {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-position: center center;
  background-image: url('//nzr2ybsda.qnssl.com/images/33905/FsWGRsomaFrGy1Syre6nFqzmm1f1.jpg?imageMogr2/strip/thumbnail/2000x1500>/quality/90!/interlace/1/format/jpg');
  .subTitle {
    font-size: 0.85rem;
  }
}

.section7 {
  padding: 3rem 0;
  a {
    color: #38b;
    border-bottom: 1px solid rgba(51, 136, 187, 0.6);
  }
}

.title {
  font-size: 32px;
  font-weight: bold;
  line-height: 2em;
}

.subTitle {
  font-size: 20px;
  color: #b3873d;
  line-height: 2em;
}

.itemTitle {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  line-height: 2em;
}

.sLink {
  color: #38b;
  border-bottom: 1px solid rgba(51, 136, 187, 0.6);
  font-size: 24px;
  line-height: 2em;
  cursor: pointer;
}

button {
  background: #38b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem 3rem;
  font-size: 25px;
  margin: 1rem;
}

@keyframes fly {
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0)
  }
}
</style>
