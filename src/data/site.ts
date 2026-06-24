export type RouteKey = 'home' | 'shallow' | 'deep' | 'openSea' | 'vault';

type PostLink = {
  title: string;
  purpose: string;
  date: string;
  time: string;
  href?: string;
};

type ShallowPost = PostLink & {
  id: string;
  series?: string;
  handoff?: {
    label: string;
    text: string;
    href: string;
  };
};

type DeepLayer = {
  level: string;
  title: string;
  text: string;
  posts: PostLink[];
};

type ContentSeries = {
  kicker: string;
  title: string;
  text: string;
  segments: {
    label: string;
    active?: boolean;
    posts: PostLink[];
  }[];
};

export const navItems = [
  { key: 'shallow', label: '浅水区', href: '#/shallow' },
  { key: 'openSea', label: '公海', href: '#/open-sea' },
  { key: 'deep', label: '深水区', href: '#/deep' },
  { key: 'vault', label: '藏宝库', href: '#/vault' },
] as const;

export const routeEntries = [
  {
    code: '01',
    title: '浅水区',
    role: '快速入门',
    text: '工具上手、基础术语和榨干系列，先把一个问题讲到能照做。',
    href: '#/shallow',
  },
  {
    code: '02',
    title: '公海',
    role: '随笔观察',
    text: '短观察、阶段判断和想法归档，放在入门和深水之间。',
    href: '#/open-sea',
  },
  {
    code: '03',
    title: '深水区',
    role: '进阶实操',
    text: '把工具、流程和判断组合起来，适合慢读、复盘和系统化使用。',
    href: '#/deep',
  },
  {
    code: '04',
    title: '藏宝库',
    role: '工具收藏',
    text: '只放长期有用的工具、网站和资源入口，先保持简约、可找、可更新。',
    href: '#/vault',
  },
] as const;

export const shallowPosts: ShallowPost[] = [
  {
    id: 'S-01',
    title: 'AI术语扫盲：小白真正会踩的词',
    purpose: '先把模型、提示词、上下文这些基础词听懂，不在入口处迷路。',
    date: '待定',
    time: '6 分钟',
  },
  {
    id: 'S-02',
    title: '选 AI 工具就像选队友，大多数人选错了',
    purpose: '建立工具选择的第一套判断，不再被榜单和热词带着走。',
    date: '待定',
    time: '9 分钟',
  },
  {
    id: 'J-01',
    title: '榨干 Gmail：从收件箱到工作入口',
    purpose: '把账号、标签、过滤器和收件习惯整理成一套能直接照做的邮箱入门路径。',
    date: '待定',
    time: '12 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-02',
    title: '榨干 Wise：跨境账户基础指南',
    purpose: '先讲清楚注册、换汇、收付款和风险边界，适合第一次认真使用的人。',
    date: '待定',
    time: '14 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-03',
    title: '榨干 Apple ID：地区、付款与安全',
    purpose: '把 Apple ID 的地区选择、订阅、付款和安全设置一次讲明白。',
    date: '待定',
    time: '11 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-04',
    title: '榨干 PayPal：注册、绑定与风控边界',
    purpose: '把 PayPal 的公开可讲部分整理成基础手册，先避开高风险操作。',
    date: '待定',
    time: '13 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-05',
    title: '榨干飞书 AI：文档、知识库与协作',
    purpose: '把飞书 AI 当成协作入口，而不是另一个聊天框。',
    date: '待定',
    time: '10 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-06',
    title: '榨干 giffgaff：电话卡、验证与长期保号',
    purpose: '把境外号码从“临时验证码”整理成可维护的账号基础设施。',
    date: '待定',
    time: '12 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-07',
    title: '榨干 PayGo：开卡、充值与日常使用',
    purpose: '先讲清楚开卡、余额、充值和使用边界，适合第一次配置的人。',
    date: '待定',
    time: '12 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-08',
    title: '榨干苹果设备选机：普通人怎么少花冤枉钱',
    purpose: '从需求、预算和使用周期出发，帮你判断该买哪一档设备。',
    date: '待定',
    time: '15 分钟',
    series: '榨干系列',
  },
  {
    id: 'J-09',
    title: '榨干苹果技巧：把系统自带能力用起来',
    purpose: '先整理普通人最容易忽略、但能立刻提升效率的系统功能。',
    date: '待定',
    time: '10 分钟',
    series: '榨干系列',
  },
  {
    id: 'S-03',
    title: '你用豆包聊天，有人用它赚钱',
    purpose: '把豆包从聊天框变成可执行的日常工作入口。',
    date: '待定',
    time: '9 分钟',
  },
  {
    id: 'S-04',
    title: 'DeepSeek V4 从入门到进阶',
    purpose: '用一篇文章建立国产模型的基础使用路径。',
    date: '待定',
    time: '5 分钟',
  },
  {
    id: 'S-05',
    title: 'Kimi 入门到进阶',
    purpose: '理解长文、资料整理和搜索增强场景里 Kimi 的位置。',
    date: '待定',
    time: '5 分钟',
  },
  {
    id: 'S-06',
    title: 'Windows 用户转 Mac 保姆级指南',
    purpose: '从系统习惯开始补齐工具环境，不把电脑本身变成阻力。',
    date: '2026.05.17',
    time: '8 分钟',
    series: 'Mac 新手系列',
  },
  {
    id: 'S-07',
    title: 'Mac 新手必装清单',
    purpose: '把装机清单从“别人推荐什么”变成“我真的需要什么”。',
    date: '2026.05.18',
    time: '23 分钟',
    series: 'Mac 新手系列',
    handoff: {
      label: '继续阅读',
      text: 'Mac 系列的入门段到这里结束，下一步进入深水区：文件管理与效率系统。',
      href: '#/deep',
    },
  },
] ;

export const deepLayers: DeepLayer[] = [
  {
    level: 'L1',
    title: '方法层',
    text: '只收纳暂时不属于任何系列的独立方法长文。',
    posts: [],
  },
  {
    level: 'L2',
    title: '系统层',
    text: '只收纳暂时不属于任何系列的独立系统长文。',
    posts: [],
  },
  {
    level: 'L3',
    title: '判断层',
    text: '只收纳暂时不属于任何系列的独立判断长文。',
    posts: [],
  },
] ;

export const deepSeries: ContentSeries[] = [
  {
    kicker: 'Mac Series',
    title: 'Mac 新手系列',
    text: '先完成系统迁移与装机，再进入文件管理和效率系统。这个系列横跨浅水区与深水区，只在系列模块里完整呈现。',
    segments: [
      {
        label: '浅水区 · 入门段',
        posts: [
          {
            title: 'Windows 用户转 Mac 保姆级指南',
            purpose: '先把系统习惯换过来，理解 Mac 和 Windows 的基础差异。',
            date: '2026.05.17',
            time: '8 分钟',
            href: '#/shallow',
          },
          {
            title: 'Mac 新手必装清单',
            purpose: '确定第一批真正需要的工具，不被装机清单带跑。',
            date: '2026.05.18',
            time: '23 分钟',
            href: '#/shallow',
          },
        ],
      },
      {
        label: '深水区 · 系统段',
        active: true,
        posts: [
          {
            title: 'Mac 文件管理：我以前整理文件的方法全错了',
            purpose: '把文件从“放整齐”推进到“找得回来、长期可用”。',
            date: '2026.05.31',
            time: '7 分钟',
            href: '#/deep',
          },
          {
            title: 'Mac 最高效率使用指南',
            purpose: '把快捷键、触控板、Raycast 和窗口管理组合成稳定工作路径。',
            date: '2026.06.03',
            time: '10 分钟',
            href: '#/deep',
          },
        ],
      },
    ],
  },
  {
    kicker: 'Writing Series',
    title: 'AI 写作系列',
    text: '把 AI 写作从单次提示词，推进到可复用的长文工作流与 Skill 化方法。相关文章只在这个系列里呈现。',
    segments: [
      {
        label: '深水区 · 写作方法',
        active: true,
        posts: [
          {
            title: '为什么你的 AI 写不出好文章？',
            purpose: '把 AI 写作从提示词堆叠推进到 Skill 化长文流程。',
            date: '2026.04.28',
            time: '6 分钟',
            href: '#/deep',
          },
          {
            title: '把全网 AI 写作方法拆了，拼成一套写作 Skill',
            purpose: '从外部方法里提取可复用结构，而不是收藏爆款技巧。',
            date: '待定',
            time: '10 分钟',
            href: '#/deep',
          },
        ],
      },
    ],
  },
  {
    kicker: 'AI System Series',
    title: 'AI 相关系列',
    text: '先临时收纳 AI 记忆与 AI 浏览器两篇。后续如果主题变多，再拆成更准确的独立系列。',
    segments: [
      {
        label: '深水区 · 系统观察',
        active: true,
        posts: [
          {
            title: 'AI 记忆同步：大多数人第一步就做反了',
            purpose: '把多 AI 协作里的记忆、上下文和同步边界讲清楚。',
            date: '2026.03.28',
            time: '7 分钟',
            href: '#/deep',
          },
          {
            title: 'AI 浏览器混战：真正被抢走的不是搜索框',
            purpose: '判断入口变化背后的产品控制权，而不是只看功能强弱。',
            date: '2026.05.24',
            time: '11 分钟',
            href: '#/deep',
          },
        ],
      },
    ],
  },
];

export const driftNotes = [
  { code: 'D-01', title: '当推理变成水电，贵的不是脑子', text: 'AI 推理成本下降之后，真正稀缺的是知道把智能用到哪里。', date: '待定' },
] as const;

export const vaultItems = [
  { code: 'T-01', title: '内容情报', text: '热榜、趋势、选题和工具访问量，用来判断一个话题值不值得进入。', state: '精选' },
  { code: 'T-02', title: 'AI 工作台', text: '本地模型、资料问答、长期记忆和提示词资产。', state: '精选' },
  { code: 'T-03', title: '内容生产', text: '录屏、剪辑、字幕、配音和视觉生产工具。', state: '精选' },
  { code: 'T-04', title: '文档资料', text: 'PDF、OCR、书签、笔记和文件转 Markdown。', state: '精选' },
  { code: 'T-05', title: '自托管系统', text: '自动化、相册、记账、网站分析等长期可控工具。', state: '精选' },
] as const;
