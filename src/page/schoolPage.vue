<template>
  <div class="main">
    <div :style="{backgroundImage:'url('+data.bg1+')'}" class="section">
      <div class="logo">
        <img :src="data.logo">
      </div>
      <div class="btn">
        <button @click="openLink(data.link1)">访问官网</button>
      </div>
    </div>

    <div :style="{backgroundImage:'url('+data.bg2+')'}" class="section" v-if="data.bg2">
      <div class="logo">
        校园720
      </div>
      <div class="btn">
        <button @click="openLink(data.link2)">点击查看</button>
      </div>
    </div>

    <div class="section" v-if="data.info">
      <div class="content">
        <div class="item" v-for="(i,index) in data.info" :key="index">
          <div class="title">
            {{i.title}}
          </div>
          <div class="text">
            <p v-for="(p,pIndex) in i.text" :key="pIndex">{{p}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="card">
        <div class="title">
          校园风采
        </div>
        <div class="sub">
          {{data.sub}}
        </div>
        <div class="imgs">
          <img :src="i" v-for="(i,index) in data.imgs" :key="index">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      gjxx: {
        bg1: require('@/assets/img/gjxx/1.jpg'),
        bg2: require('@/assets/img/gjxx/2.jpg'),
        logo: require('@/assets/img/gjxx/logo.png'),
        link1: 'http://www.yearninternational.com/',
        link2: 'http://www.gy720.com/pano/view/9986',
        info: [
          {
            title: '关于我们',
            text: [
              '郑州航空港育人国际学校，创建于2013年9月，现在有两个校区，分别是郑州航空港育人国际学校经开校区（郑州）和郑州航空港育人国际学校中心校区（港区）。',
              '学校秉承 “心智合一，博雅致远”的校训和“一切为了孩子和为了一切孩子”的价值理念，追求教育的国际化、优质化和特色化；用诚心、爱心、耐心为每一位学生 提供适合的教育，引导学生求知、求实、求真、求善、求美；让学生在愉快的小班氛围中接受双语教育、基础教育和多元文化熏陶，从小增强学习能力、沟通能力， 树立正确的道德观和责任感，培养独立、创新、具有中国文化根基和全球视野的优质人才。'
            ]
          },
          {
            title: '小班教学 & 双语成长',
            text: [
              '注重的是学生全方位的成长教育，用知识丰富孩子，并在学习的过程中不断开拓视野，汲取中西文化的精华, 从而树立良好的态度和世界公民的责任感。',
              '在每20到25人为单位的小班中，孩子们将得到老师和同学们的更多关注，他们有机会用纯正的英语和外籍教师面对面地沟通。',
              '在寄宿生活环境中，孩子们有更多的机会观察身边的老师和同学，学习他们身上的长处和优点，学会尊重、学会感恩、学会回馈，也因此而变得更加独立。'
            ]
          },
          {
            title: '用诚心、爱心、耐心为每一位学生提供适合的教育',
            text: [
              '孩子们是一棵棵幼苗，我们愿意当好园丁，让他们未来长成参天大树；孩子们是一块块璞玉，我们愿意当好雕刻师，让他们成为无价之宝。让我们共同呵护我们的孩子，让他们在快乐中学习，学习中快乐成长。'
            ]
          }
        ],
        sub: '求知 • 求实 • 求真 • 求善 • 求美',
        imgs: [
          require('@/assets/img/gjxx/s1.jpg'),
          require('@/assets/img/gjxx/s2.jpg'),
          require('@/assets/img/gjxx/s3.png'),
          require('@/assets/img/gjxx/s4.jpg'),
          require('@/assets/img/gjxx/s5.jpg'),
          require('@/assets/img/gjxx/s6.jpg'),
          require('@/assets/img/gjxx/s7.jpg'),
          require('@/assets/img/gjxx/s8.jpg'),
          require('@/assets/img/gjxx/s9.jpg'),
          require('@/assets/img/gjxx/s10.jpg')
        ]
      },
      nzzx: {
        bg1: require('@/assets/img/nzzx/1.jpg'),
        bg2: require('@/assets/img/nzzx/2.jpg'),
        logo: require('@/assets/img/nzzx/logo.png'),
        link1: 'http://www.zznz.org',
        link2: 'http://www.gy720.com/pano/view/9989',
        info: [
          {
            title: '关于我们',
            text: [
              '郑州外国语女子中学成立于2012年，占地52亩，建筑面积9000多平方米。学校建有标准化的教学楼、餐厅和公寓，配有电脑教室、实验室、图书室、琴房、舞蹈房、塑胶运动场。学校现有教职工61人，其中特级教师1人，高级教师3人，中级教师57人，硕士研究生18人。我校目前共有三个年级，七年级150人，八年级179人，九年级138人，共计467人。',
            ]
          },
          {
            title: '文化，女中的精神内核',
            text: [
              '文化是学校的育人之本，是学校建设的精神核心。 郑州外国语女子中学兴办伊始，首先着力于文化建设，通过学习、借鉴上海女中、北京女中、无锡女中等女校成功的办学经验和中外女性教育研究的成果，形成了独具特色的系统的办学理念和治校纲要。如今这些办学理念正在每一个学生心里开花结果。',
            ]
          },
          {
            title: '特色，女中的发展之路',
            text: [
              '课程有特色了，学校才会有特色；课程改变了，学校才会改变。女中兴办之前，我们用了半年的时间，致力于富有女性特色的、适合女性成长规律的校本课程的开发和构建，经过三年的发展，现已初步形成了由人文素养、科学素养、身心健康、生活技能四大类学校特色课程体系。'
            ]
          },
          {
            title: '质量，女中的生存之本',
            text: [
              '质量是办学的生命线，没有质量，一切都无所依附。分数是中小学教育的题内应有之义，应试也是一种必备的素质。女中的每一个学生都必须考出应有的分数，也必须有分数之外的全面发展，这是女中师生都必须明确的目标。'
            ]
          },
        ],
        sub: '博学 · 博爱 · 优秀 · 优雅',
        imgs: [
          require('@/assets/img/nzzx/s0.jpg'),
          require('@/assets/img/nzzx/s1.jpg'),
          require('@/assets/img/nzzx/s2.jpg'),
          require('@/assets/img/nzzx/s3.jpg'),
          require('@/assets/img/nzzx/s4.jpg'),
          require('@/assets/img/nzzx/s5.jpg'),
          require('@/assets/img/nzzx/s6.jpg'),
          require('@/assets/img/nzzx/s7.jpg'),
          require('@/assets/img/nzzx/s8.jpg'),
          require('@/assets/img/nzzx/s9.jpg'),
        ]
      },
      gjzx: {
        bg1: require('@/assets/img/gjzx/1.jpg'),
        bg2: require('@/assets/img/gjzx/2.jpg'),
        logo: require('@/assets/img/gjzx/logo.png'),
        link1: 'http://www.hkgqyrgjzx.com/',
        link2: 'http://www.gy720.com/pano/view/9991',
        info: [
          {
            title: '关于我们',
            text: [
              '郑州航空港育人国际学校是郑州育人教育集团，联手台湾建国中学，全面引进英国伊顿公学办学理念、课程体系和管理模式，强势推的一所高标准、高质量、寄宿制男子初、高级完全中学。',
              '国内外顶尖教育专家管理团队，全力打造中国最好教师队伍：最具爱心，最具责任心，最出教学成果。'
            ]
          },
          {
            title: '责任',
            text: [
              '注重培养学生的责任感。真正的男子汉，真正的社会精英，必须有强烈的责任感，敢于担当，担当 起家庭、社会与国家的责任。每一个育人男中的学生都必须懂得，当自己走进男中的那一天起，就应该有贡献社会的雄心壮志，如果他们毕业时走出学校，不能做到 这一点，那就说明育人男中教育的失败。'
            ]
          },
          {
            title: '个性',
            text: [
              '注重尊重学生的个体差异。正像大自然没有完全相同的两片树叶一样，每个生命的个体都是不同的，甚至千差万别。真正的教育必须尊重每一个生命，尊重个体差异，善于发掘每个学生不同的潜能，因材施教，让人人成长，个个成才。'
            ]
          },
          {
            title: '多样',
            text: [
              '注重教育方法的多样化。伊顿公学以其为学生提供量身定制教育的模式而闻名，有人把伊顿公学的 课程设置形容为一个制衣间，学生只需找到适合自己的号码就可以了。',
              '育人男子中学创办以来，致力于男校特色课程体系的建构，初步形成了以“科学素养、人文素 养、艺体素养、生活素养”四大类构成的十余种校本课程，极富男中特色的课程超市正在建设中。'
            ]
          },
        ],
        sub: '阳光 · 创造 · 严格 · 规范',
        imgs: [
          require('@/assets/img/gjzx/s0.jpg'),
          require('@/assets/img/gjzx/s1.jpg'),
          require('@/assets/img/gjzx/s2.jpg'),
          require('@/assets/img/gjzx/s3.jpg'),
          require('@/assets/img/gjzx/s4.jpg'),
          require('@/assets/img/gjzx/s5.jpg'),
          require('@/assets/img/gjzx/s6.jpg'),
          require('@/assets/img/gjzx/s7.jpg'),
          require('@/assets/img/gjzx/s8.jpg'),
          require('@/assets/img/gjzx/s9.jpg'),
        ]
      },
      xcyr: {
        bg1: require('@/assets/img/xcyr/1.jpg'),
        bg2: require('@/assets/img/xcyr/2.jpg'),
        logo: require('@/assets/img/xcyr/logo.png'),
        link1: 'http://www.zzedu.org/yurenguoji/Index.aspx',
        link2: 'http://www.gy720.com/pano/view/10019',
        info: [
          {
            title: '关于我们',
            text: [
              '襄城育人国际学校，占地40余亩，各教室都安装了白板教学系统，为高效课堂提供了最有力的硬件保障。校内分设小学部、中学部和高中部。学校小学部与当地公办重点学校“文昌”小学建立了教研共同体，开展了“共画同心圆”教研系列活动，在省内权威专家的引领下，郑州名师与许昌名师互动了起来，使两校教师分享了优质的教育资源，在教研中拉起手共同追教育梦，圆教育梦。',
              '学校未来的发展方向以国际化的视野开阔师生的思想，建立国际学校的校园文化，构建国际教育课程体系，引进量化评价系统，完善课程管理和评价。'
            ]
          },
          {
            title: '立足传统 · 融合中西',
            text: [
              '在课程体系建设中以中国传统文化为根本，融合西方教育思想，确立既有中国传统文化的含蓄典雅，又有西方文化的开放、自由的国际学校文化，以“凤鸣”确立学校文化的核心发展理念。',
              '在课程建设中既凸显认知学科的课程的价值，又着力在科学和实践课程中形成的科学态度和实践能力。在课程实施中要彰显顺学而导、遵循规律，尊重生命，使学生的生命自然而舒展，做有灵魂的教育，建设有道德的课堂。'
            ]
          },
          {
            title: '纵横建设 · 联合发展',
            text: [
              '纵向建立各学段教研共同体，统一贯通教师的教学思想和行为。打通各学段教研活动，使教师明确了学生远期发展目标及前期学、知、行的基础，有了这样的了解，教师的教学行为更有的放矢，更高效，更有助于学生的健康成长。',
              '横向建立园际、校际间的教研共同体，各显特色，优势互补。以“加强团队建设，规范管理，凝心聚力”为落地工程；以“加强文化建设，内提品质，外树形象”为生根工程；以“ 加强课程建设，科研促发展”为内涵生长工程，三条主线，三项工程，脚踏实地逐项推进落实。'
            ]
          },
        ],
        sub: '让生命与使命同行，用行动擦亮教育梦想天空',
        imgs: [
          require('@/assets/img/xcyr/s0.jpg'),
          require('@/assets/img/xcyr/s1.jpg'),
          require('@/assets/img/xcyr/s2.jpg'),
          require('@/assets/img/xcyr/s3.jpg'),
          require('@/assets/img/xcyr/s4.jpg'),
          require('@/assets/img/xcyr/s5.jpg'),
          require('@/assets/img/xcyr/s6.jpg'),
          require('@/assets/img/xcyr/s7.jpg'),
          require('@/assets/img/xcyr/s8.jpg'),
          require('@/assets/img/xcyr/s9.jpg'),
        ]
      },
      baby: {
        bg1: require('@/assets/img/baby/1.jpg'),
        logo: require('@/assets/img/baby/logo.png'),
        link1: 'http://ebabychina.com.cn',
        info: [
          {
            title: '关于我们',
            text: [
              '从1991年开始从事营销婴童电子教育类产品，在当时所有教育顾问都还只是单纯的销售产品时，创办人就开始与他人做出差异性服务的作法，所带领的团队不单单只销售产品，更提供客制化及差异性服务，满足每个家长需求，于是让团队绩效屡屡创高纪录并维持了很长一段时间的龙头宝座。',
              '2002年创始台湾早教的先驱，将幼儿教育与医学的专业统整，融合幼儿教育专业、大脑认知神经科学知识之理论并实践于实务的课程中，在台湾少子化的社会中开创出早教的新局，创新市场通路、人才培育、运营管理、持续扩大与发展中。'
            ]
          },
          {
            title: '教育使命 专业服务',
            text: [
              'e-BABY一直以来肩负的教育使命，就是致力于专业的教育，为孩子设计科学化、适龄、适性、量身定做的教学系统；加上与家长密切互动，传达的是对每一位宝贝的爱与尊重，以及对家庭教育的中式，并坚信“孩子要成长的好，父母亲必须跟着成长”的理念，来推动如父母成长营的家庭教育服务。'
            ]
          },
          {
            title: '创新思维 科学验证',
            text: [
              'e-BABY积极与两岸学术、医学专业进行交流与学习，与多所高校进行产学合作，成立产业学院，进一步提升专业并同时培育人才。开发出的“ELITE云端检测系统”，以客观、科学的脑研究为主题，运用科学化评测工具，设计幼儿教育实验理论应用之教育课程，开启幼儿大脑的学习潜能，铸就高端精致幼儿早教品牌。'
            ]
          },
        ],
        sub: '一切从『爱是唯e』开始',
        imgs: [
          require('@/assets/img/baby/s0.jpg'),
          require('@/assets/img/baby/s1.jpg'),
          require('@/assets/img/baby/s2.jpg'),
          require('@/assets/img/baby/s3.jpg'),
          require('@/assets/img/baby/s4.jpg'),
          require('@/assets/img/baby/s5.jpg'),
          require('@/assets/img/baby/s6.jpg'),
          require('@/assets/img/baby/s7.jpg'),
          require('@/assets/img/baby/s8.jpg'),
          require('@/assets/img/baby/s9.jpg'),
        ]
      },
      ayst: {
        bg1: require('@/assets/img/ayst/1.jpg'),
        logo: require('@/assets/img/nzzx/logo.png'),
        link1: 'http://www.zznz.org',
        info: [
          {
            title: '关于我们',
            text: [
              '2016年8月18日，郑州航空港育人国际学校与美国阿尔伯特·爱因斯坦学院合作办学正式签约挂牌，郑州育人校区成为美国爱因斯坦学院的中国总部所在地，旨在培养适应21世纪全球经济社会的优秀学生。在科技、技术、工程、艺术和数学几个学科领域里全面丰富孩子们知识和动手能力，让孩子们不出国门就能学习到同步的国外课程，真正体现我校追求教育的国际化、优质化、特色化。'
            ]
          },
          {
            title: '独一无二 全面培养',
            text: [
              '美国阿尔伯特·爱因斯坦学院（ALBERT EINSTEIN ACADEMY)成立于2010年8月，是美国加利福尼亚州的一所非营利性公立教育机构。AEA的教育机会和理念在南加州甚至是整个美国都是独一无二的。在美国，没有另外一所K- 12（幼儿园到高中教学体系）学校能提供AEA所能提供的教育机会。AEA的API（学术指标成长指数）913分（总分1000），远远高于整个加利福尼亚州的平均分数。',
              'AEA通过提供跨学科的教育体验，通过富含科技、视觉表演艺术和领导力的教育体系，提供创造服务社会的机会和习得世界语言的环境，培养适应于21世纪生活和工作能力的优秀青少年。'
            ]
          },
        ],
        sub: ' ',
        imgs: [
          require('@/assets/img/ayst/s0.jpg'),
          require('@/assets/img/ayst/s1.jpg'),
          require('@/assets/img/ayst/s2.jpg'),
          require('@/assets/img/ayst/s3.jpg'),
          require('@/assets/img/ayst/s4.jpg'),
          require('@/assets/img/ayst/s5.jpg'),
          require('@/assets/img/ayst/s6.jpg'),
          require('@/assets/img/ayst/s7.jpg'),
          require('@/assets/img/ayst/s8.jpg'),
          require('@/assets/img/ayst/s9.jpg'),
        ]
      },

      data: {}
    }
  },
  methods: {
    getsrc() {
      let school_id = this.$route.params.school.toString()
      this.data = this[school_id]
    },
    openLink(val) {
      window.open(val)
    }
  },
  created() {
    this.getsrc()
    window.scrollTo(0,0)
  },
  watch: {
    "$route": "getsrc"
  }
}
</script>

<style lang="less" scoped>
.main {
  background: #f3f0e0;
  .title {
    font-weight: bolder;
    font-size: 35px;
    font-family: yahei;
    line-height: 100px;
    text-align: center;
  }
}

.section {
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 100px 30px;
  .logo {
    text-align: center;
    line-height: 250px;
    color: #fff;
    font-weight: bold;
    font-size: 55px;
  }
  .btn {
    text-align: center;
    line-height: 150px;
    button {
      padding: 1em 2em;
      background: #567;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
}

.content {
  padding: 0 10%;
  text-align: left;
  .item {
    width: calc(~"50% - 20px");
    display: inline-block;
    padding: 0 60px;
    min-height: 400px;
    vertical-align: top;
    .text p {
      text-indent: 2em;
      line-height: 1.7em;
      &:before {
        content: " • "
      }
    }
  }
}

.card {
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  padding: 30px 50px;
  text-align: center;
  .sub {
    color: #b3873d;
    font-size: 24px;
    font-weight: bold;
    line-height: 60px;
  }
  .imgs {
    img {
      margin: 20px;
    }
  }
}
</style>
