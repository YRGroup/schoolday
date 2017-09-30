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
          name:'陈凤山',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/CFS.jpg',
          job:'育人教育集团总校长',
          old_job:'原郑州市第四十七中学校长',
          job2:'中学高级教师',
          info:[
            '曾荣获郑州市劳动模范、郑州市优秀教育工作者、郑州市文明市民；河南省优秀教育工作者、河南省教育厅学术带头人；荣获全国优秀教育工作者等称号。以人的发展为本，完善现代化、国际化学校，树立科学的发展观，用与时代同步的眼光去反省学校的过去、审视学校的现状、憧憬学校的末来，确立具有现代特征的管理理念。',
          ],
        },
        {
          name:'蔡政权',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/CZQ.jpg',
          job:'育人教育集团书记',
          old_job:'',
          job2:'中学高级教师、特级教师',
          info:[
            '先后任辽宁省盘锦市第三初级中学语文教师、班主任，盘锦市第五完全中学校长，盘锦市教育科学研究所所长等职务；先后被评为盘锦市模范教师，辽宁省优秀教师，全国教育科研先进工作者。',
            '出版专著《教育的智慧》、《教育的艺术》、《教育的情怀》、《教育，方法，人生》等。',
            '社会兼职多项。中国管理科学研究院特聘专员，全国中学学习科学研究会常务理事，教育部人生科学会魏书生思想研究会副理事长，退休后曾被聘为广东省东莞市寮步镇教育顾问，湖北书生学校校长。',
          ],
        },
        {
          name:'贾莉',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/JL.jpg',
          job:'育人教育集团国际学院院长',
          old_job:'美国德克萨斯州立大学博士',
          job2:'博士',
          info:[
            '担任教研室主任13年，主抓大学英语四、六级教学并卓有成效，曾获优秀教师、郑州市大学英语教学比赛一等奖等多项荣誉。',
            '美国德克萨斯州立大学圣安东尼奥分校访问学者，获英语为非母语英语教育硕士学位，文化、读写、语言研究博士学位，“总统论文研究基金奖”，并被评为杰出学生。',
            '毕业后在该校任非母语英语教学专家，担任研究生、本科生英语师资培训工作和留学生英语教学，深受学生和同行的好评。曾获教学评估第一名，被留学生誉为“金牌教授”。',
          ],
        },
        {
          name:'宋立琴',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/SLQ.jpg',
          job:'育人教育集团理科学院院长',
          old_job:'原北京市华夏女子中学校长',
          job2:'中学特级教师',
          info:[
            '全国改革创新优秀校长、河南省优秀教师，河南省化学特级教师，河南省中小学教育教学专家，北京市特级教师，中国妇女研究会妇女教育专业委员会理事，北京市西城区教育学会副会长，《北京教育》杂志社理事会理事。',
            '被誉为学生最具增长力的学校，先后获得全国“三八”红旗集体、北京市青春期教育示范校、北京市课程教材改革试验先进单位等称号。',
            '主持研究的课题《通过女校特色课程建构和谐校园》获中国教育学会“十一五”重点课题研究成果一等奖。',
          ],
        },{
          name:'祁宏伟',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/QHW.jpg',
          job:'育人教育集团文科学院院长',
          old_job:'众德职业培训学校校长',
          job2:'中学语文高级教师',
          info:[
            '河南省特级教师，高中语文学科带头人。先后获河南省高中语文优质课一等奖、全国优秀语文教师、省优秀教研员、市优秀校长、功勋校长等荣誉称号出版《高中语文阅读养练指要》《教育随想录》等十余本著作，并先后任河南省民办教师转正考试、中考、高中会考命题组成员和省高评委、特级教师评委。',
            '教学同时从事第二语言习得、语言社会化和社会语言学研究，参与多项科研项目，多次参加学术会议，先后在国内外期刊发表多篇论文，出有专著一本。是美国语言政策研究所发起人之一，数次受邀做学术期刊评审。',
          ],
        },
        {
          name:'王璐',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/WL.jpg',
          job:'育人教育集团体艺学院院长',
          old_job:'原经开区民办教育协会会长',
          job2:'',
          info:[
            '原中国人民解放军成都军区部队文工团舞蹈演员，转业后曾任安阳市音乐舞蹈家协会副理事。',
            '从事舞蹈教育事业多年来，曾获得河南省级市级优秀舞蹈辅导教师，创作作品也曾获得多个国家级省级金奖。',
          ],
        },
        {
          name:'王广林',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/WGL.jpg',
          job:'郑州航空港育人国际学校',
          old_job:'初、高中部校长',
          job2:'',
          info:[
            '中学高级教师，河南省特级教师，全国优秀教师，周口市科技拔尖人才、省级优质课教师,河南省特级教师协会理事、心理学会理事。连续培育出2名河南省高考状元，3名河南省第二名，9名周口市高考状元。',
          ],
        },
        {
          name:'赵聚川',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/ZJC.jpg',
          job:'襄城县育人国际学校',
          old_job:'中学部校长',
          job2:'',
          info:[
            '自1976年执教至今逾40余年，曾荣获得国家级骨干教师、河南省优秀教师、河南省学科技术带头人、许昌市五一劳动奖章获得者、许昌市优质课选手、许昌市优秀教师、许昌市教学宾特等奖获得者等称号。',
          ],
        },
        {
          name:'刘新平',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/LXP.jpg',
          job:'郑州经开区外国语女子中学',
          old_job:'校长',
          job2:'',
          info:[
            '中学正高级职称，河南省特级教师，河南省教师教育专家，河南省优质课教学百名优秀教师，河南省 “百千万工程”学科带头人，河南省教育厅学术技术带头人。 ',
          ],
        },
        {
          name:'陳金粧',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/CJZ.jpg',
          job:'育人教育集团',
          old_job:'幼教部校长',
          job2:'',
          info:[
            '曾任东莞台商子弟学校校长，担任校长年限逾十五载，曾荣获广东当代民办教育校长突出贡献奖， 台湾最高教育行政机关师铎奖、台湾最高教育行政机关校长领导卓越奖。',
          ],
        },
        {
          name:'王爱华',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/WAH.jpg',
          job:'郑州经开区育人学校',
          old_job:'小学部校长',
          job2:'',
          info:[
            '1989年开始教育教学工作以来，多年来潜心探索和研究小学语文教学工作和班主任工作。从教至今，积累了大量的学科教学和管理经验。曾获得市优质课大赛二等奖、省课件大赛一等奖，全国录像观摩课三等奖。',
          ],
        },
        {
          name:'刘学亚',
          face:'http://novembergaran.oss-cn-beijing.aliyuncs.com/%E6%A0%A1%E9%95%BF/LXY.jpg',
          job:'襄城县育人国际学校',
          old_job:'小学部校长',
          job2:'',
          info:[
            '自2009年入育人教育集团至今，以教练员的身份带领学校的田径队、网球队、定向队，在区级、省级、国家级的比赛中取得了优异的成绩，多次被评为“优秀辅导教师及教练员”。',
          ],
        },
      ],
  }
})

export default store
