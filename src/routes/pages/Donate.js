/* eslint-disable no-unused-vars */
import React from "react";

import { useEffect, useState } from "react";

import DonateList from "../../components/donate/donateList";

import { tempGetProjectBrief } from "../../api/temp";

const projectBriefList_default = [
  {
    id: 1668502048059,
    title: "隔离不隔爱 温暖一直在",
    desc: "在这个“抗疫”的特殊时期，他们扛起责任和担当，用专业和热心，做好居民的生活“大管家”，他们用繁忙的脚步踏出“抗疫”的决心，用热情的服务温暖着居民，组成疫情防控中一幅幅难忘的画面。",
    paragraph:
      "社区党委依托“一核五化”管理模式，党建与疫情防控工作深度融合，积极解决辖区居民群众“急难愁盼”问题，形成了“人在网中走、事在格中办、大事小事不出格”的社会治理新格局。 “我的孩子患病，急需去医院查验我的血型，但我在居家隔离，这可怎么办呀！”近日，居住在解放门街道卫民社区的一位居民向社区寻求帮助，他个人积极配合防疫要求进行居家隔离，但老家有生病的孩子因病情治疗需要，需要住院，急需查验他的血型，在疫情防控下如何保证家人的就医需求，成为该居民的“烦心事”。卫民社区了解情况后立即上报街道，并向街道提出外出就医申请，解放门街道高度重视居民需求，批准该名居家隔离人员的外出就医请求。经街道和社区疫情防控工作人员的共同协调，为居民安排了转运救护车，社区工作人员陪同居民到西安市第四人民医院就医检查，全程闭环管理，既满足隔离人员的就医需求，也避免造成交叉感染。疫情就是命令，防控就是责任。在下一步工作中，解放门街道卫民社区将继续按照疫情防控相关要求，始终坚持人民至上、生命至上的工作原则，用心用情关怀居家隔离人员，全力守护辖区群众生命健康与安全。弘扬慈善精神，在人民中达成慈善共识，不失为慈善事业发展的光明大道，健全的慈善机构组织，收了善人的无数爱心，撒出去的，是一片阳光。慈善是没有终点的征途，我们需让其明亮，使其平坦，为其付出。正慈善之身，让慈善之风吹遍华夏大地！",
    imgList: [
      "https://images.pexels.com/photos/3951615/pexels-photo-3951615.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3951373/pexels-photo-3951373.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://cdn.pixabay.com/photo/2021/11/04/06/15/woman-6767494__480.jpg",
    ],
    aim: 10000,
    present: 6000,
    progress: 60,
    userNum: "7,463",
  },

  {
    id: 1668501708387,
    title: "幸福港湾 童心启航",
    desc: "虽然社会文明不断进步，但据联合国调研，每年依然有近10亿儿童遭受各种形式的暴力。2021年的国际不打小孩日，用一支公益短片为少年儿童发声，将幸福与不幸，长大与不想长大，这些矛盾都呈现孩子的童年里，号召人们关注青少年暴力事件。",
    paragraph:
      "扇巴掌、打屁股、拧耳朵、打手心……这些看了就让人感觉火辣辣地疼的词，在许多家庭里却是家长用来管教孩子的方式。除了肢体暴力之外，还有许多孩子在家里承受着语言暴力和情感上的“冷暴力”。创伤性的童年经历会对人产生长久的影响，以至于“有的人要用一生来治愈童年”。\n事实上，《未成年人保护》《反家庭暴力法》等法律法规都明确规定禁止对未成年人实施家庭暴力。2021年《家庭教育促进法》出台时，网友们也纷纷感慨“家长终于要‘持证上岗’了”。\n\n然而，法律和现实之间仍有很大的差距。很多人认为，管教孩子是家务事，家长有权决定怎么管教自己的孩子。因此，虽然一些恶性的虐待儿童案件已经引起了社会的关注，但在“棍棒之下出孝子”“打是亲骂是爱”的文化规范下，非暴力的教养方式仍然没有得到普遍的认可。\n\n“上次是用木棍打我，把棍子都给打折了。”\n\n一项发表于2015年的研究估计，中国0-17岁儿童中，遭受肢体虐待的发生率为26.6%、情感虐待的发生率为19.6%、性虐待的发生率为8.7%、忽视的发生率为26.0%。目前，我国仍然没有关于针对儿童的暴力事件的全国性统计数据。\n\n2014年，救助儿童会提出了“消灭针对儿童的体罚和羞辱”这一全球行动。同时，我们启动了“正向教养”项目，聚焦于家庭中对儿童的体罚和羞辱。\n\n为了解中国家庭中打骂儿童的现状和原因，我们和中国社会科学院大学的童小军副教授合作，进行了文献回顾和访谈。在对初、高中生的访谈中，许多学生都能回想起在家中被暴力管教的经历，其中既有肢体暴力，也有语言和情感暴力：\n\n“小学之前还是小学那一阵，我妈老是打我，打屁股或者用手拍后背……有按在那儿打过。”\n\n“上次是用木棍打我，把棍子都给打折了。”\n\n“爸爸就让我在柜子那里罚站，站了一下午。”\n\n“用晾衣竿打。”\n\n“我爸到院子里把游戏机放在地上，用我的手握着锤子把游戏机砸碎了。”\n\n“我爸就会先选择不说话。他就在那坐着，也不让我走，就让我在那呆着，他也什么都不说。”\n\n“（妈妈）对我会冷眼相待，寡言少语，没句话，就是不带任何感情的感觉。”\n\n“我干什么事笨了，比如找东西找不到，她带着我去找，找到了就会骂我，说我笨，‘这么简单还用教吗？’”\n\n虽然学生们对这些经历记忆犹新，但他们往往不认为这是儿童虐待，反而会用“爸爸妈妈都是为了我好”来解释父母的行为。这使我们意识到，在打和骂的话题上，父母和孩子的体验都是矛盾的，在理论上很容易定性为“正确/错误”“好/坏”的问题，从情感和关系上，却是很复杂的。这个时候，我们将“正向教养”定义为“专注于养育者双方平等及共同的参与，积极为孩子创造一个没有身体和情感伤害、尊重他们权利的教养环境，继而培育亲子之间亲密而巩固的关系，并实现儿童潜力的最大化。”  关心下一代工作是全社会的共同责任，我们希望以实际行动呼吁更多的人关心关爱特殊儿童，帮助他们实现梦想，健康快乐成长!",
    imgList: [
      "https://images.pexels.com/photos/5889983/pexels-photo-5889983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/8429828/pexels-photo-8429828.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    aim: 10000,
    present: 2000,
    progress: 20,
    userNum: "2,785",
  },

  {
    id: 1668501626561,
    title: "为失聪者点亮一盏灯",
    desc: "音乐对于我们是最美好的存在，但对于听障儿童却并不那么美好，患有听力障碍的他们，很难去理解甚至听懂音乐。QQ音乐联合腾讯99公益日，为听障儿童利用音频技术精心制作了9首低频歌曲，实现孩子们“听见”的小心愿，让更多人关注到中高频听力损失人群。",
    paragraph:
      "2021年8月末的一个灿烂午后，深圳市厚朴特需儿童发展中心的一间教室里，一群特殊的孩子们正在玩耍着。忽然，一阵特别的音乐声响起，它和普通人耳中的“优美旋律”有些微妙的不同。随着音乐声渐渐悠扬，这群孩子们的表情开始变化，他们在惊讶，在欢呼，在手舞足蹈。“好听！”，3岁的旺仔脸上露出惊喜的笑容带着稚嫩的童音说道。“是‘叮叮’的声音，想再听一遍”，3岁的潼潼忍不住说；一旁，5岁的玥玥正情不自禁地跟着歌声的节奏轻轻摇晃着身体。    这是一群受到中高频听力损失困扰的儿童，他们听不清“1000赫兹”以上的声音。普通人耳朵里的美妙音乐，在他们听起来却总是有着“缺失的一角”，就如同一张永远无法完成的拼图。但他们却在这一天，在幼小的人生中因为第一次听到了完整的歌曲而惊喜不已。    世界卫生组织估计全世界有超过4.5亿人患有中度及以上的听力障碍。据不完全统计，中国每年新增听力障碍儿童2万余人，大部分患儿在4岁之前即发生听力障碍，由于语言无法输入，进而导致儿童失语，严重危害儿童身心健康。所幸，如果患有听力障碍儿童及时地佩戴助听器或植入人工耳蜗便有很大可能早日听到外界声音，再配合语言康复训练便有望学会说话，像普通孩子一样融入正常生活。由于人工耳蜗费用较高，让贫困的听力障碍家庭望而却步。为帮助患儿早日恢复听力，社会组织深圳狮子会发起“为失聪者点亮一盏灯”公益项目，为每位合资格申请者提供医疗救助费用。可谓是患者的福音。    ",
    imgList: [
      "https://images.pexels.com/photos/13754541/pexels-photo-13754541.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://c.pxhere.com/photos/71/7a/manhattan_concert_solo_piano_park_lonely_new_york_washington_square_park-491347.jpg!s2",
      "https://img0.baidu.com/it/u=3687070842,3752363549&fm=253&fmt=auto&app=120&f=PNG?w=550&h=325",
    ],
    aim: 10000,
    present: 300,
    progress: 30,
    userNum: "2,765",
  },
  {
    id: 1668501782939,
    title: "给我一个拥抱",
    desc: "“一个拥抱”社区康复项目以ICF全人康复理念为指导，以建立友好型社区为目标，从儿童-家庭-社会三个层面共同推进，致力于促进儿童的社会融合康复。（ICF解释为国际功能，残疾和健康分类，是由世卫组织于2001年第54届世界卫生大会上正式命名并在国际上统一使用的分类标准，全人康复理念基于此产生。）",
    paragraph:
      "百年星辰计划关爱自闭症儿童主题公益活动正在有序开展，10月中下旬百年星辰计划以“给我一个拥抱 让我走进你的世界” 线下陪伴活动为主，继续关爱自闭症儿童，志愿者们于10月19日来到社区服务中心，开展“给我一个拥抱 让我走进你的世界”主题公益活动，为灵星的孩子们送去爱心。    首先由院方范院长为百年志愿者普及孤独症基本知识、介绍灵星发展史，观看视频《我的梦想》，随后全体志愿者走进灵星课堂及图书室实地参观感受孩子们的教学康复课程，走进后厨食堂正值准备晚餐期间，百年志愿者们仔细观看每日食谱关心孩子们的日常伙食，进入寝室了解孩子们的日常生活起居。16时正式开始百年志愿者带来DIY手工材料与孩子们一起分享DIY手工的快乐时光，活动现场氛围美好且温馨，参与活动的全体山西百年志愿者用心、用行、用汗水阐释了山西百年公司“报社会以和睦”的企业文化理念，百年志愿者和孩子们一同脸上洋溢着快乐的笑容。通过本次志愿者服务进一步培养山西百年志愿者们的爱心，增强志愿者们的责任意识和奉献意识，增加社会服务经验。同时引起社会各界对自闭症儿童的关注，弘扬中华民族传统美德。        自闭症儿童都是星星的孩子，他们需要我们更多的关爱与呵护。众人拾柴火焰高！我们每个人能做的很少，但是我们希望能有更多的人加入我们的行列，加入“百年星辰计划”志愿者服务的队伍，一起用爱打开自闭症儿童的心扉！",
    imgList: [
      "https://cdn.pixabay.com/photo/2021/12/22/02/29/motherhood-6886538__480.jpg",
      "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/6182820/pexels-photo-6182820.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    aim: 10000,
    present: 8000,
    progress: 80,
    userNum: "5,785",
  },
  {
    id: 1668501735135,
    title: "坚守抗疫第一线",
    desc: "2020年伊始，一场突如其来的新型冠状病毒肺炎疫情，让正值新春佳节的大江南北进入了严峻的抗“疫”之战。疫情动态不仅时刻牵动着千家万户的心，也开启了众志成城、抗击疫情的阻击战。面对这场没有硝烟的战争，东昌里社区青年团员志愿者周梓煜，第一时间主动请缨加入战“疫”，自觉充当防疫工作的“宣传员”和“战斗员”，带上红袖筒、拿起测温枪、奋战在社区防控一线，协助社区做好疫情网格化防控工作。",
    paragraph:
      "在第八批河北支援湖北医疗队里，有一位烧伤外科医生，他就是被队友亲切地称为“逆行烧伤人”的魏伟。“魏伟是我指导的70余名硕、博研究生之一，毕业后供职于河北医科大学第一医院烧伤整形科，现任副主任医师、专业组组长。”他的导师骄傲地说。    此次出征武汉，魏伟主动请缨，和导师一起成为第八批河北支援湖北医疗队的“逆行烧伤人”。        魏伟的母亲身患癌症，病情危重，经不住打击，魏伟就瞒着父母报名，请缨出征武汉!他把病重的母亲和年幼的孩子留给了妻子。妻子是一名共产党员、人民教师，里里外外承担着巨大压力，但她坚定支持丈夫出征武汉。送行时两人深情相拥，令人感动!在武汉市江夏区第一人民医院呼吸与危重病病房里，魏伟穿着厚厚的防护服，一进去就是几个小时不出来，查房、下医嘱、查体、观察病情变化，还要和病人沟通、安慰……常常汗水湿透了他的衣衬，甚至出现头疼、头晕等缺氧的症状，但他总说，再苦再累他也要坚持，因为那么多的新冠肺炎病人需要自己!一次，魏伟从重症病房出来，发现手机上有十几个家里的未接来电，他的心一下悬了起来，咚咚直跳，是不是妈妈病危了?电话回拨回去，证实了他的担心。他心急如焚，内疚感油然而生，作为医生不能亲自照顾病危的母亲，实在是对不起养育自己的亲人。        但他身在武汉抗疫最前线，只能将担心和愧疚深藏心底，把对亲人无限的爱化作巨大的力量投入到新冠病人的救治中。魏伟说，自古忠孝不能两全，为了国家和人民的安危，亲人们的理解和支持是他在前线坚持下去的动力。        在医院党委和科室的关怀下，魏伟的母亲危重的病情发展得到控制。他知道再也无法继续对父母隐瞒自己的行程了，通过视频，魏伟告诉父母他在武汉抗击疫情最前沿。看见病危的母亲、年迈的父亲、憔悴的妻子，他再也止不住内心的悲痛，潸然泪下，泪水打湿了衣襟。        但是他是一名共产党员，一名人民的医生，在祖国和人民最需要的时候，舍小家为国家，把对亲人的爱投入到新冠肺炎病人的救治中去，这是无私的爱，是感天动地的人间大爱。        魏伟所在的救援病区是新冠肺炎重症病房，病人病情危重，常会出现各种复杂并发症，处理起来异常困难，魏伟就利用他烧伤重症救治经验，结合新冠肺炎的发病特点综合救治，取得了非常好的治疗效果，他所在组经治病人的死亡率为零，得到了属地医院的表扬。作为一名党员医生，经过这次大疫的洗礼，魏伟更加坚定了全心全意为人民服务的思想，争做一名党和人民信任的白衣战士，",
    imgList: [
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.-Hxw8ysnOeu7Dw8K3bFE-wHaE-?w=273&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.WeFN-2y1r4uJqUJlZmF2ZQHaE8?w=297&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7",

      "https://tse3-mm.cn.bing.net/th/id/OIP-C.9vHAjSS3udLlEoEbosoc_wHaE7?w=303&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    ],
    aim: 10000,
    present: 0,
  },
  {
    id: 1668502145145,
    title: "抗击疫情医院建设",
    desc: "疫情态势升温，2022年4月8日，嘉善县地方政府紧急筹建嘉善县方舱医院，中建一局建设发展公司嘉善县急救医学中心项目迅速响应政府工作部署，当即召集120名工人、9名管理人员紧急奔赴一线，抢工期、抓安全、保质量，开展方舱医院建设任务。    ",
    paragraph:
      "当前，上海疫情防控形势极为严峻复杂，中交集团党委第一时间成立了驻沪统筹推进疫情防控与生产经营工作领导小组，带领驻沪单位打响守“沪”战“疫”，履行央企使命担当。在做好驻沪各单位疫情防控、生产经营工作的同时，中交集团组织中交房地产与四公局上海总部基地项目全力援建毛麻仓库方舱医院、共青方舱医院和复兴岛方舱医院，组织振华重工支援气膜方舱建设，为打赢疫情防控保卫战贡献中交力量。    4月1日开始，中交房地产与四公局上海总部基地项目第一时间成立党员先锋队、青年突击队，组织抽调740人的工作团队，分成多个工作组前往指定地点支援上海疫情防控工作。        4月1日，建设团队接到援建毛麻仓库方舱医院的任务后，迅速抽调设计、招采、工程等专业人员组建技术团队，调集所有施工力量以及供水、电力和智能化等外部专业团队，当日完成设计图纸并报当地卫健委确认，同步落实劳务队伍、材料设备、市政水电引入及特许通行证办理等事宜，当晚开工、昼夜奋战，得到了疫情防控战线的高度赞誉和区委区政府主要领导的一致好评。该方舱医院由原有四层建筑改造扩建形成，面积约6000平方米，可提供665个床位，已于4月6日建成移交。                4月2日下午，建设团队火速集结328人队伍在当日晚8点投入建设共青方舱医院。该方舱医院面积4000平方米，可容纳床位432个。目前电箱基础、放线、场地清理破土等工作及医护一脱二脱更衣室集装箱拼装已顺利完成，隔离仓、生活配套设施完成90%，强弱电、给排水、消防系统、通风排烟系统完成80%，医疗生活废弃物处理站等配套设施施工完成50%。                4月4日，接杨浦区紧急通知，希望在复兴岛方舱医院原有建设规模基础上继续新建约8350平方米的方舱医院，包含床位1000余个。中交集团建设团队接到通知后，立即调集各方专业力量驰援建设团队，在高强度连续作战三天的情况下，建设团队当日完成设计方案确认、解决屋面排水、水污染环保处理等疑难问题，4月6日全面开工，力争4月11日前交付。                在做好方舱医院建设的同时，四公局上海总部基地项目还全力支援社区防疫服务保障工作，抽调186名人员分成16个小组前往相关社区指定地点做好防疫物资装卸工作。连续3日累计志愿服务38个小时，共完成150余辆货车物资装卸，50余个军民小区物资配送，合计搬运13万多件物资。                4月4日上午，振华重工接到建设气膜方舱的任务，紧急召开抗疫援建专项会议，长兴分公司迅速响应，抽调近百人的队伍火速支援上海气膜方舱建设。在确定气膜方舱建设方案后，振华重工仅用了4个小时就完成队伍组建及后勤保障工作。通过不间断作业并同步优化作业方案，最终仅用6小时就提前完成援建任务，较厂家预估的作业时长减少一半，在有效减少援建队、医疗队共区伴随的同时，也为后续进行医疗气密试验、负压实验预留了充足时间。",
    imgList: [
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.s4P0TW1bfmhZyC3kGXChqQAAAA?w=285&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.x0g_xdHFeP5L6SIZT7AbnwHaE7?w=284&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    ],
    aim: 10000,
    present: 0,
  },
  {
    id: 1668502205490,
    title: "守护雏鹰计划",
    desc: "书山有路，为大山深处的孩子们带去更广博的世界和更富足的精神财富。菜鸟驿站联合单向空间和Heaven&Hell一起向全社会发起“翻书越岭”活动，向大家征集闲置文学书，号召大家一起捐出一本书，让孩子们见到更大的世界，成为更好的人，通往无限可能的未来。",
    paragraph:
      "少年儿童是祖国的未来、是中华民族的希望。留守儿童、困境儿童问题是社会发展中出现的新矛盾、新问题，守护他们，让他们与其他儿童一样共享改革开放成果、提高生活学习质量，是我们民政人义不容辞的责任。近日，为切实加强农村留守儿童和困境儿童关爱服务，民政部此次联合教育部、公安部、司法部、财政部、人力资源社会保障部、国务院妇儿工委办公室、共青团中央、全国妇联、中国残联等十部门制定出台了《关于进一步健全农村留守儿童和困境儿童关爱服务体系的意见》，旨在为农村留守儿童和困境儿童的健康成长保障护航。随着儿童福利体制改革的深入、保障人群的扩大、工作机制的调整和社会环境的变化等，北京市朝阳区儿童福利院在保障基本人员编制的基础上，探索PPP（委托运行管理）模式运行，降低儿童福利院全生命周期成本、建立风险共担机制、转变政府职能、提升服务效能。前期研究论证，编制实施方案；保障平稳运行，明确权责利关系。\n让我们共同守护留守儿童、困境儿童的明天为他们的未来出一份力！公益只有起点，爱心没有终点，“守护雏鹰计划”持续进行中，我们将继续携手并肩、倾情奉献，让阳光照进留守儿童心里，温暖心灵，点亮前程！",
    imgList: [
      "https://c.pxhere.com/photos/7b/e1/children_school_laughing_fun_happiness_education_elementary_childhood-759682.jpg!s2",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.mhyMUZaXW-zBVu25mYnsswHaE6?w=281&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.yIbZHqw5i-AwcXEQDQ0WggHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    ],
    aim: 10000,
    present: 0,
  },
];

function Donate() {
  const [inProgressList, setinProgressList] = useState();

  const [underPlanningList, setunderPlanningList] = useState();

  const inProgressIDList = [60001, 60002, 60003, 60004];
  const underPlanningIDList = [90001, 90002, 90003, 90004];

  const getListData = (useless, callback) => {
    //权宜之计
    callback(projectBriefList_default);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getListData(inProgressIDList, (data) => {
      setinProgressList(data);
    });
    getListData(underPlanningIDList, (data) => {
      setunderPlanningList(data);
    });
  }, []);

  return (
    <div>
      <DonateList projectData={inProgressList}></DonateList>
    </div>
  );
}

export default Donate;
