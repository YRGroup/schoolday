import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    schoolday: [{
        id: 'combat',
        title: '散打',
        icon: require('@/assets/icon/散打.png'),
        img: require('@/assets/sd/散打.jpg'),
        video: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E6%95%A3%E6%89%93.webm',
        video2: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E6%95%A3%E6%89%93_batch.mp4',
        summary: '散打是中华武术的精华，是具有独特中华民族风格的体育项目，多年来在民间流传发展并深受人民喜爱。是具有独特中华民族风格的体育项目，多年来在民间流传发展并深受人民喜爱。散打的起源与发展，是和中华民族悠久历史同步。',
        content: '散打是中华武术的精华，是具有独特中华民族风格的体育项目，多年来在民间流传发展并深受人民喜爱。是具有独特中华民族风格的体育项目，多年来在民间流传发展并深受人民喜爱。散打的起源与发展，是和中华民族悠久历史同步。集团邀请著名散打老师为学生们教授现代散打课程，常见的以直拳、摆拳、抄拳、鞭拳、鞭腿、蹬腿、踹腿、摔法等技法组成的以踢、打、摔结合的攻防技术。',
        grade: '3-12年级',
        provider: ['郑州航空港育人国际学校']
      },
      {
        id: 'dance',
        title: '舞蹈',
        icon: require('@/assets/icon/舞蹈.png'),
        img: require('@/assets/sd/舞蹈.jpg'),
        video: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E8%88%9E%E8%B9%88.webm',
        video2: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E8%88%9E%E8%B9%88_batch.mp4',
        summary: '舞蹈的健身动作爆发力强，对人体体能潜力开发性强，舞蹈能较好地改善练习者的协调能力。舞蹈是一种极具表现力的运动，通过舞蹈课程，学生们可以表现自己的同时培养了自信和气质。',
        content: '舞蹈的健身动作爆发力强，对人体体能潜力开发性强，舞蹈能较好地改善练习者的协调能力。舞蹈是一种极具表现力的运动，通过舞蹈课程，学生们可以表现自己的同时培养了自信和气质。跳舞是一种静中有动、动中有静的健身方式，可以缓解神经肌肉紧张。据专家测定，当烦躁、焦虑的情绪涌向心头时，以轻快的步伐15分钟左右，即可缓解紧张，稳定情绪。',
        grade: '3-12年级',
        provider: ['郑州航空港育人国际学校']
      },
      {
        'id': 'sushi',
        title: '西点寿司',
        icon: require('@/assets/icon/寿司.png'),
        img: require('@/assets/sd/xd.jpg'),
        video: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E8%A5%BF%E7%82%B9%E5%AF%BF%E5%8F%B8.webm',
        video2: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E8%A5%BF%E7%82%B9%E5%AF%BF%E5%8F%B8_batch.mp4',
        summary: '寿司是近几年国内最流行的美食之一，最早流传于日本，以简单为美味，以自然为美味，日本料理之所以逐渐在世界各地蔚然成风，受到越来越多人的喜爱，原因在此。',
        content: '寿司是近几年国内最流行的美食之一，最早流传于日本，以简单为美味，以自然为美味，日本料理之所以逐渐在世界各地蔚然成风，受到越来越多人的喜爱，原因在此。而这其中，寿司尤其是这种美食简约哲学的极致表现。以简单为美味，以自然为美味，日本料理之所以逐渐在世界各地蔚然成风，受到越来越多人的喜爱，原因在此。而这其中，寿司尤其是这种美食简约哲学的极致表现。',
        grade: '3-12年级',
        provider: ['郑州航空港育人国际学校']
      },
      {
        'id': 'taekwondo',
        title: '跆拳道',
        icon: require('@/assets/icon/跆拳道.png'),
        img: require('@/assets/sd/tqd.jpg'),
        video: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E8%B7%86%E6%8B%B3%E9%81%93.webm',
        video2: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E8%B7%86%E6%8B%B3%E9%81%93_batch.mp4',
        summary: '跆拳道起源于朝鲜半岛，是现代奥运会正式比赛项目之一，是一种主要使用手及脚进行格斗或对抗的运动。跆拳道特技最需要的不是身体，而是心理，克服心理障碍，慢慢练习不能急于求成。要不断创新才能使跆拳道的特技越来越精彩，其次与人交流和切磋也是一个取得进步的阶梯。',
        content: '跆拳道起源于朝鲜半岛，是现代奥运会正式比赛项目之一，是一种主要使用手及脚进行格斗或对抗的运动。跆拳道特技最需要的不是身体，而是心理，克服心理障碍，慢慢练习不能急于求成。要不断创新才能使跆拳道的特技越来越精彩，其次与人交流和切磋也是一个取得进步的阶梯。',
        grade: '3-12年级',
        provider: ['郑州航空港育人国际学校']
      },
      {
        'id': 'sand',
        title: '金丝沙画',
        icon: require('@/assets/icon/沙画.png'),
        img: require('@/assets/sd/金丝沙画.jpg'),
        video: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E9%87%91%E4%B8%9D%E6%B2%99%E7%94%BB.webm',
        video2: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E9%87%91%E4%B8%9D%E6%B2%99%E7%94%BB_batch.mp4',
        summary: '金丝沙画是一门独特的艺术。它结合现代人的审美观，依托深厚的文化底蕴和文化内涵；采用产自神奇大自然的天然彩沙，经手工精致而成。',
        content: '金丝沙画是一门独特的艺术。它结合现代人的审美观，依托深厚的文化底蕴和文化内涵；采用产自神奇大自然的天然彩沙，经手工精致而成。采用产自神奇大自然的天然彩沙，经手工精致而成。作品以鲜明线条和柔和的色彩将艺术化所蕴涵的深切思想表现为大众化的美感，极具视觉冲击效果，达到了独特的艺术概念与观赏效果的完美结合。',
        grade: '3-12年级',
        provider: ['郑州航空港育人国际学校']
      },
      {
        'id': 'drum',
        title: '非洲鼓',
        icon: require('@/assets/icon/非洲鼓.png'),
        img: require('@/assets/sd/fzg.jpg'),
        video: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E9%9D%9E%E6%B4%B2%E9%BC%93.webm',
        video2: 'http://yrgroup.oss-cn-beijing.aliyuncs.com/new1/%E9%9D%9E%E6%B4%B2%E9%BC%93_batch.mp4',
        summary: '非洲鼓用手拍击发声，当拍击的部位不同时，音色也有分别，可以出高、中及低三种声音。这种鼓可以用作独奏，亦可以和其它传统乐器作合奏。',
        content: '非洲鼓用手拍击发声，当拍击的部位不同时，音色也有分别，可以出高、中及低三种声音。这种鼓可以用作独奏，亦可以和其它传统乐器作合奏。非洲音乐中最突出、最主要的因素是节奏，鼓正是非洲音乐节奏的基础及表达音乐语言的一种最重要乐器，鼓在非洲人民生活中的重要地位是任何其他乐器无法比拟的。',
        grade: '3-12年级',
        provider: ['郑州航空港育人国际学校']
      }
    ],
    logo: {
      '郑州航空港区育人高级中学': require('@/assets/logo/nn.png'),
      '郑州外国语女子中学': require('@/assets/logo/nz.png'),
      '襄城县育人国际学校': require('@/assets/logo/xc.png'),
      '郑州航空港区育人国际学校': require('@/assets/logo/gj.png'),

      '爱因斯坦国际幼儿园': require('@/assets/logo/aea.png'),
      'eBABY': require('@/assets/logo/eBABY.png')
    },
    data720: [{
        id:'gj',
        school: '郑州航空港区育人国际学校',
        link: 'http://www.gy720.com/pano/view/9986'
      },
      {
        id:'nz',
        school: '郑州外国语女子中学',
        link: 'http://www.gy720.com/pano/view/9989'
      },
      {
        id:'nn',
        school: '郑州航空港区育人高级中学',
        link: 'http://www.gy720.com/pano/view/9991'
      },
      {
        id:'bb',
        school: '襄城县育人宝贝幼儿园',
        link: 'http://www.gy720.com/pano/view/10019'
      }
    ],
    framedata: [{
        id:'gj',
        school: '郑州航空港区育人国际学校',
        link: 'http://main.yearnedu.com/yearninternational'
      },
      {
        id:'nz',
        school: '郑州外国语女子中学',
        link: 'http://main.yearnedu.com/zznz'
      },
      {
        id:'nn',
        school: '郑州航空港区育人高级中学',
        link: 'http://main.yearnedu.com/hkgqyrgjzx'
      },
      {
        id:'xc',
        school: '襄城县育人国际学校',
        link: 'http://main.yearnedu.com/fengmingedu'
      },
      {
        id:'bb',
        school: 'e-Baby台湾精致早教',
        link: 'http://main.yearnedu.com/e-baby'
      },
      {
        id:'ay',
        school: '爱因斯坦国际幼儿园',
        link: 'http://main.yearnedu.com/einstein'
      }
    ],
    xiaozhangInfo:[
        {
          name:'贾莉',
          face:'//nzr2ybsda.qnssl.com/images/33905/FqhRcnfTC8IoM-Fr1Tcv3lY5bNQR.jpg?imageMogr2/strip/thumbnail/720x1440>/quality/90!/interlace/1/format/jpg',
          job:'外语学院院长',
          old_job:'原育人国际学校校长',
          job2:'博士',
          info:[
            '巴啦啦能量---呼尼拉---魔仙变身',
            '这是第二段',
            '这是第三段',
          ],
        },
        {
          name:'宋立琴',
          face:'//nzr2ybsda.qnssl.com/images/33905/FrliCbZtYbjiP54tuctgI8lBfbBm.jpg?imageMogr2/strip/thumbnail/720x1440>/quality/90!/interlace/1/format/jpg',
          job:'文科学院院长',
          old_job:'原育人国际学校校长',
          job2:'博士',
          info:[
            '郑州育人学校由刘付坤校长于2000年创办，至今已在郑州发展16年，于2014年成立教育集团，并在创始人家乡襄城县建设了一所学校。十多年来，学校遵循“以人为本，因材施教”的核心育人理念，争取帮助每一个孩子打开了解世界的一扇窗。2016年5月和6月，郑州育人教育集团先后与美国名校普渡大学和美国德州大学圣安东尼奥分校签订了校长和师资培训合作协议；2016年5月，引入台湾e-BABY国际教育集团理念的早教中心投入运营； ',
            '教育的意义是在孩子成长过程中起到良好的引领作用。我们一直在努力，为教育添砖加瓦，把教育工作当成使命，把教育理念融入信仰，汲取中西方教育的精华，传承中华民族教育的根基，郑州育人教育集团矢志不渝的奔走在路上。',
            '这是第三段',
          ],
        },
        {
          name:'蔡政权',
          face:'//nzr2ybsda.qnssl.com/images/33905/Fpjd_AgZDSxC4hSI0ibaNGQV8OoZ.jpg?imageMogr2/strip/thumbnail/720x1440>/quality/90!/interlace/1/format/jpg',
          job:'育人教育集团党委书记',
          old_job:'',
          job2:'',
          info:[
            '巴啦啦能量---乌特拉---魔仙力量提升 ',
            '这是第二段',
            '这是第三段',
          ],
        },
        {
          name:'陈凤山',
          face:'//nzr2ybsda.qnssl.com/images/33905/Fhb65h0R2vIhmev57Tkj6tUe1jeg.jpg?imageMogr2/strip/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
          job:'育人教育集团总校长',
          old_job:'',
          job2:'',
          info:[
            '巴啦啦能量---乌特拉---魔仙力量提升 ',
            '这是第二段',
            '这是第三段',
          ],
        },
        {
          name:'王爱华',
          face:'//nzr2ybsda.qnssl.com/images/33905/Fhb65h0R2vIhmev57Tkj6tUe1jeg.jpg?imageMogr2/strip/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
          job:'育人国际学校',
          old_job:'经开校区校长',
          job2:'',
          info:[
            '巴啦啦能量---乌特拉---魔仙力量提升 ',
            '这是第二段',
            '这是第三段',
          ],
        },
        {
          name:'易芙蓉',
          face:'//nzr2ybsda.qnssl.com/images/33905/Fhb65h0R2vIhmev57Tkj6tUe1jeg.jpg?imageMogr2/strip/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
          job:'育人国际学校',
          old_job:'航空港校区校长',
          job2:'',
          info:[
            '巴啦啦能量---乌特拉---魔仙力量提升 ',
            '这是第二段',
            '这是第三段',
          ],
        },
        {
          name:'刘新平',
          face:require('@/assets/lxp.jpg'),
          job:'外国语女子中学',
          old_job:'省二实验经开校区校长',
          job2:'',
          info:[
            '巴啦啦能量---乌特拉---魔仙力量提升 ',
            '这是第二段',
            '这是第三段',
          ],
        },
        {
          name:'刘福星',
          face:'//nzr2ybsda.qnssl.com/images/33905/Fhb65h0R2vIhmev57Tkj6tUe1jeg.jpg?imageMogr2/strip/thumbnail/720x1440>/quality/90!/interlace/1/format/jpeg',
          job:'郑州华夏中学校长',
          old_job:'',
          job2:'',
          info:[
            '巴啦啦能量---乌特拉---魔仙力量提升 ',
            '这是第二段',
            '这是第三段',
          ],
        },
      ],
  }
})

export default store
