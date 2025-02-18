// .vitepress/config.mts
import { getThemeConfig } from "file:///D:/sugar-blog/node_modules/.pnpm/@sugarat+theme@0.5.4_@eleme_4aa194b1960b2a7943784930edbbe204/node_modules/@sugarat/theme/node.mjs";
import { defineConfig } from "file:///D:/sugar-blog/node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_8857e84062902e02e6c8b595bf999c45/node_modules/vitepress/dist/node/index.js";
var baseUrl = "https://sugarat.top";
var weekly = `${baseUrl}/weekly`;
var RSSWeekly = {
  title: "\u89C6\u91CE\u4FEE\u70BC - \u6280\u672F\u5468\u520A",
  baseUrl,
  description: "\u6BCF\u5468\u4F1A\u7CBE\u9009\u51FA\u4E00\u4E9B \u4F18\u8D28&\u6709\u8DA3 \u7684\u5185\u5BB9\u505A\u63A8\u9001\uFF08\u5927\u524D\u7AEF\u4E3A\u4E3B\uFF09\uFF0C\u5305\u542B\u4F46\u4E0D\u9650\u4E8E \u4F18\u8D28\u6587\u7AE0\uFF0C\u5F00\u6E90\u5E93\uFF0C\u5DE5\u5177\u7F51\u7AD9\uFF0C\u6709\u610F\u601D\u7684\u77E5\u8BC6",
  id: weekly,
  link: weekly,
  language: "zh-cn",
  filter(value) {
    return value.url.startsWith("/weekly/") && !value.url.endsWith("/weekly/");
  },
  image: "https://img.cdn.sugarat.top/mdImg/MTcwNTIwMDEzNjM5Mw==705200136393",
  favicon: "https://sugarat.top/favicon.ico",
  copyright: "Copyright (c) 2018-present, \u7CA5\u91CC\u6709\u52FA\u7CD6",
  url: `${baseUrl}/weekly.rss`,
  icon: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5155" width="200" height="200"><title>\u89C6\u91CE\u4FEE\u70BC\u5468\u520A RSS \u8BA2\u9605</title><path d="M831.8 128l-640 0c-35.3 0-64 28.7-64 64l0 640c0 35.3 28.7 64 64 64l640 0c35.3 0 64-28.7 64-64L895.8 192C895.8 156.7 867.1 128 831.8 128zM707.4 193l0 185.8L673 344.3c-6.4-6.4-14.9-9.5-23.3-9.4-8.4-0.2-16.9 2.9-23.3 9.4L592 378.8 592 193 707.4 193zM831.8 833.1l-640 0L191.8 193 528 193l0 263c0 0.5 0 1.1 0 1.6 0 0.3 0 0.5 0.1 0.7 0 0.3 0 0.5 0.1 0.8 0 0.3 0.1 0.6 0.1 0.9 0 0.2 0 0.4 0.1 0.6 0 0.3 0.1 0.7 0.2 1 0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.2 0.7 0.3 1 0.1 0.2 0.1 0.4 0.2 0.5 0.1 0.3 0.2 0.6 0.3 0.9 0.1 0.2 0.1 0.4 0.2 0.6 0.1 0.3 0.2 0.5 0.3 0.8 0.1 0.2 0.2 0.5 0.3 0.7 0.1 0.2 0.2 0.5 0.3 0.7 0.1 0.3 0.2 0.5 0.3 0.8 0.1 0.2 0.2 0.4 0.3 0.6 0.1 0.3 0.3 0.6 0.4 0.8 0.1 0.2 0.2 0.3 0.3 0.5 0.2 0.3 0.3 0.6 0.5 0.9 0.1 0.2 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.6 0.6 0.9 0.1 0.1 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.6 0.6 0.8 0.1 0.2 0.2 0.3 0.4 0.5 0.2 0.2 0.4 0.5 0.6 0.7 0.2 0.2 0.4 0.4 0.5 0.6 0.2 0.2 0.3 0.4 0.5 0.6 0.7 0.8 1.5 1.5 2.2 2.2 0.2 0.2 0.4 0.3 0.6 0.5 0.2 0.2 0.4 0.4 0.6 0.5 0.2 0.2 0.5 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.3 0.2 0.6 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.4 0.9 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.3 0.9 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.1 0.6 0.3 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.9 0.3 0.2 0.1 0.4 0.1 0.5 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0.2 0.2 0 0.4 0.1 0.5 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0 0.6 0.1 0.9 0.1 0.3 0 0.5 0 0.8 0.1 0.2 0 0.5 0 0.7 0.1 0.5 0 1.1 0 1.6 0 0 0 0 0 0 0l0 0c0.5 0 1.1 0 1.6 0 0.3 0 0.5 0 0.7-0.1 0.3 0 0.5 0 0.8-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.4 0 0.6-0.1 0.3 0 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.3-0.1 0.5-0.1 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.5-0.2 0.3-0.1 0.6-0.2 0.9-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.3-0.1 0.5-0.2 0.8-0.4 0.2-0.1 0.4-0.2 0.6-0.3 0.3-0.1 0.6-0.3 0.8-0.4 0.2-0.1 0.3-0.2 0.5-0.3 0.3-0.2 0.6-0.3 0.9-0.5 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.9-0.6 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.4 0.2-0.2 0.5-0.4 0.7-0.6 0.2-0.2 0.4-0.3 0.6-0.5 0.2-0.2 0.4-0.3 0.6-0.5 0.4-0.4 0.8-0.7 1.1-1.1l67.1-67.1 67.1 67.1c0 0 0 0 0 0 0.4 0.4 0.7 0.7 1.1 1.1 0.2 0.2 0.4 0.3 0.6 0.5 0.2 0.2 0.4 0.4 0.6 0.5 0.2 0.2 0.5 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.3 0.2 0.6 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.4 0.9 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.3 0.9 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.1 0.6 0.3 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.9 0.3 0.2 0.1 0.4 0.1 0.5 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0.2 0.2 0 0.4 0.1 0.5 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0 0.6 0.1 0.9 0.1 0.3 0 0.5 0 0.8 0.1 0.2 0 0.5 0 0.7 0.1 1.1 0.1 2.1 0.1 3.2 0 0.3 0 0.5 0 0.7-0.1 0.3 0 0.5 0 0.8-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.4 0 0.6-0.1 0.3 0 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.3-0.1 0.5-0.1 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.5-0.2 0.3-0.1 0.6-0.2 0.9-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.2 0.6-0.3 0.3-0.1 0.6-0.3 0.8-0.4 0.2-0.1 0.3-0.2 0.5-0.3 0.3-0.2 0.6-0.3 0.9-0.5 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.9-0.6 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.4 0.2-0.2 0.5-0.4 0.7-0.6 0.2-0.2 0.4-0.3 0.6-0.5 0.2-0.2 0.4-0.3 0.6-0.5 0.8-0.7 1.5-1.5 2.2-2.2 0.2-0.2 0.3-0.4 0.5-0.6 0.2-0.2 0.4-0.4 0.5-0.6 0.2-0.2 0.4-0.5 0.6-0.7 0.1-0.2 0.2-0.3 0.4-0.5 0.2-0.3 0.4-0.6 0.6-0.8 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.4-0.6 0.6-0.9 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.3-0.6 0.5-0.9 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.3 0.3-0.6 0.4-0.8 0.1-0.2 0.2-0.4 0.3-0.6 0.1-0.3 0.2-0.5 0.4-0.8 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.3 0.2-0.5 0.3-0.8 0.1-0.2 0.1-0.4 0.2-0.6 0.1-0.3 0.2-0.6 0.3-0.9 0.1-0.2 0.1-0.4 0.2-0.5 0.1-0.3 0.2-0.6 0.3-1 0-0.2 0.1-0.3 0.1-0.5 0.1-0.3 0.2-0.7 0.2-1 0-0.2 0.1-0.4 0.1-0.5 0.1-0.3 0.1-0.7 0.2-1 0-0.2 0.1-0.4 0.1-0.6 0-0.3 0.1-0.6 0.1-0.9 0-0.3 0-0.5 0.1-0.8 0-0.2 0-0.5 0.1-0.7 0-0.5 0-1.1 0-1.6L771.1 193l60.3 0L831.4 833.1z" p-id="5156"></path><path d="M468.7 416c0 17.7-14.3 32-32 32l-148 0c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l148 0C454.4 384 468.7 398.3 468.7 416L468.7 416z" p-id="5157"></path><path d="M772.3 565c0 17.7-14.3 32-32 32L291.3 597c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l449.1 0C758 533 772.3 547.3 772.3 565L772.3 565z" p-id="5158"></path><path d="M771.4 702c0 17.7-14.3 32-32 32L291.3 734c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l448.2 0C757.1 670 771.4 684.4 771.4 702L771.4 702z" p-id="5159"></path></svg>',
  ariaLabel: "\u89C6\u91CE\u4FEE\u70BC\u5468\u520ARSS\u8BA2\u9605",
  filename: "weekly.rss"
};
var RSS = {
  title: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
  baseUrl,
  description: "\u4F60\u7684\u6307\u5C16,\u62E5\u6709\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF\uFF08\u5927\u524D\u7AEF\u76F8\u5173\u6280\u672F\u5206\u4EAB\uFF09",
  id: baseUrl,
  link: baseUrl,
  language: "zh-cn",
  image: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
  favicon: "https://sugarat.top/favicon.ico",
  copyright: "Copyright (c) 2018-present, \u7CA5\u91CC\u6709\u52FA\u7CD6",
  url: `${baseUrl}/feed.rss`,
  filter(value) {
    return !value.url.endsWith("/weekly/") && !value.url.endsWith("/case/bad/");
  },
  /**
   * 最近100篇，避免太大影响解析
   */
  limit: 100
};
var blogTheme = getThemeConfig({
  imageStyle: {
    coverPreview: [
      // 七牛云
      {
        rule: "//img.cdn.sugarat.top",
        suffix: "~cover.webp"
      },
      // 又拍云CDN
      {
        rule: "//cdn.upyun.sugarat.top",
        suffix: "-cover"
      }
    ]
  },
  themeColor: "el-blue",
  RSS: [RSS, RSSWeekly],
  author: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
  comment: {
    repo: "ATQQ/sugar-blog",
    repoId: "MDEwOlJlcG9zaXRvcnkyNDEyNDUyOTk",
    category: "Announcements",
    categoryId: "DIC_kwDODmEcc84COVc6",
    inputPosition: "top"
  },
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: "https://oml2d-models.sugarat.top/Senko_Normals/senko.model3.json"
      },
      {
        path: "https://oml2d-models.sugarat.top/mai/model.json"
      }
    ]
  },
  popover: {
    title: "\u516C\u544A",
    body: [
      { type: "text", content: "\u{1F447}\u516C\u4F17\u53F7\u{1F447}---\u{1F447} \u5FAE\u4FE1 \u{1F447}" },
      {
        type: "image",
        src: "https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp"
      },
      {
        type: "text",
        content: "\u6B22\u8FCE\u5927\u5BB6\u79C1\u4FE1&\u52A0\u7FA4\u4EA4\u6D41"
      },
      {
        type: "button",
        content: "\u5173\u4E8E\u4F5C\u8005",
        link: "/aboutme"
      },
      {
        type: "button",
        content: "\u52A0\u7FA4\u4EA4\u6D41",
        props: {
          type: "success"
        },
        link: "/group"
      }
    ],
    duration: -1,
    twinkle: true
  },
  friend: {
    list: [
      {
        nickname: "\u4E03\u4ED4\u7684\u535A\u5BA2",
        des: "\u8BB0\u5F55\u81EA\u5DF1\u5728\u5199\u7A0B\u5E8F\u8FC7\u7A0B\u4E2D\u7684\u53D1\u73B0\u3001\u95EE\u9898\u3001\u6210\u679C",
        url: "https://www.baby7blog.com",
        avatar: "https://www.baby7blog.com/favicon.ico"
      },
      {
        nickname: "\u8302\u8302\u7269\u8BED",
        des: "\u8302\u8302\u7684\u6210\u957F\u4E4B\u8DEF\uFF0C\u5305\u542B\u524D\u7AEF\u5E38\u7528\u77E5\u8BC6\u3001\u6E90\u7801\u9605\u8BFB\u7B14\u8BB0\u3001\u5404\u79CD\u5947\u6DEB\u6280\u5DE7\u3001\u65E5\u5E38\u63D0\u6548\u5DE5\u5177\u7B49",
        url: "https://notes.fe-mm.com",
        avatar: "https://notes.fe-mm.com/logo.png"
      },
      {
        nickname: "\u674E\u5E74\u7CD5",
        des: "\u4F5B\u7CFB\u7684\u6253\u5DE5\u4EBA",
        avatar: "https://cdn.upyun.sugarat.top/mdImg/sugar/617be739258b761b7dfed4fa0869326c",
        url: "https://rimochiko.github.io/"
      },
      {
        nickname: "\u51B4\u7FBD",
        des: "\u51B4\u7FBD\u7684\u535A\u5BA2",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/mqyqingfeng.png",
        url: "https://yayujs.com/"
      },
      {
        nickname: "Linbudu",
        des: "\u672A\u6765\u7684\u4E0D\u53EF\u77E5\uFF0C\u662F\u524D\u8FDB\u7684\u539F\u52A8\u529B",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/linbudu.jfif",
        url: "https://linbudu.top/"
      },
      {
        nickname: "\u5C0F\u4E5D",
        des: "\u65E5\u76CA\u52AA\u529B\uFF0C\u800C\u540E\u98CE\u751F\u6C34\u8D77",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/jiangly.png",
        url: "https://jiangly.com/"
      },
      {
        nickname: "\u82B1\u55B5\u7535\u53F0      ",
        des: "\u66F9\u8C6A\u4FA0\u548C\u4F59\u6E7E\u6E7E\u8FD8\u6709\u4E24\u53EA\u732B\u7684\u751F\u6D3B\u8BB0\u5F55~",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/fmcat.jpeg",
        url: "https://www.fmcat.top"
      },
      {
        nickname: "\u5F20\u6210\u5A01\u7684\u7F51\u7EDC\u65E5\u5FD7",
        des: "\u77E5\u4E0D\u8DB3\u800C\u594B\u8FDB\uFF0C\u671B\u8FDC\u5C71\u800C\u524D\u884C",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/zhangchengwei.png",
        url: "https://www.zhangchengwei.work"
      },
      {
        url: "https://leelaa.cn",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/leelaa.png",
        des: "\u80AF\u4E86\u4E2A\u5FB7\u7684\u535A\u5BA2",
        nickname: "LEEDAISEN"
      },
      {
        url: "https://next.blackcell.fun/",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/blackcell.jpeg",
        des: "\u7269\u4EE5\u7C7B\u805A \u4EBA\u4EE5\u7FA4\u5206",
        nickname: "BlackCell"
      },
      {
        url: "https://tenyon.cn",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/tenyon.webp",
        des: "\u5DE5\u592B\u4E3A\u827A\uFF0C\u7B03\u5FD7\u6210\u6280",
        nickname: "Yovvis's Blog"
      },
      {
        nickname: "\u5F3A\u5C11\u6765\u4E86",
        des: "\u4E92\u8054\u7F51\u4EA7\u54C1\u7ECF\u7406",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/fengxiaoqiang.png",
        url: "https://fengxiaoqiang.com/"
      },
      {
        nickname: "\u535A\u53CB\u5708",
        des: "\u72EC\u7ACB\u535A\u5BA2\u4EBA\u7684\u4E13\u5C5E\u670B\u53CB\u5708\uFF01",
        avatar: "https://cdn.upyun.sugarat.top/mdImg/sugar/bdee5d11a1e036ca3634943d34469f59",
        url: "https://www.boyouquan.com/home"
      },
      {
        nickname: "Simon He",
        des: "\u9664\u4E86coding\uFF0C\u6211\u4EC0\u4E48\u90FD\u4E0D\u4F1A",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/simonme.png",
        url: "https://simonme.netlify.app/"
      },
      {
        nickname: "laiky",
        des: "\u4E00\u540D\u5168\u6808\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C.NET\u5168\u6808\u7ECF\u9A8C",
        avatar: "https://cdn.upyun.sugarat.top/avatar/blog/llxz.png",
        url: "http://llxz.top/"
      },
      {
        nickname: "\u83DC\u56ED\u524D\u7AEF",
        des: "\u5C0F\u767D\u90FD\u80FD\u770B\u61C2\u7684\u7B14\u8BB0",
        avatar: "https://note.noxussj.top/logo.png",
        url: "https://note.noxussj.top/?s=y8"
      },
      {
        nickname: "Hacxy Blog",
        des: "\u6307\u5C16\u6539\u53D8\u547D\u8FD0\u{1F60B}",
        avatar: "https://hacxy.cn/logo.png",
        url: "https://hacxy.cn"
      }
    ].map((v) => {
      if (v.avatar.includes("//cdn.upyun.sugarat.top")) {
        v.avatar = `${v.avatar}-wh50`;
      }
      return v;
    }),
    random: true,
    limit: 6
  },
  search: {
    showDate: true,
    pageResultCount: 4
  },
  recommend: {
    showSelf: true,
    nextText: "\u4E0B\u4E00\u9875",
    style: "sidebar"
  },
  authorList: [
    {
      nickname: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
      url: "https://sugarat.top/aboutme.html",
      des: "\u4F60\u7684\u6307\u5C16,\u62E5\u6709\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF"
    }
  ],
  footer: {
    copyright: `\u7CA5\u91CC\u6709\u52FA\u7CD6 2018 - ${(/* @__PURE__ */ new Date()).getFullYear()}`,
    icpRecord: {
      name: "\u8700ICP\u590719011724\u53F7",
      link: "https://beian.miit.gov.cn/"
    },
    message: '<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank" style="display:flex;align-items:center;justify-content:center;">\u672C\u7F51\u7AD9\u7531 <img src="https://cdn.upyun.sugarat.top/logo/upyun.png-upyun" style="width:56px;height:24px;" alt="\u53C8\u62CD\u4E91"> \u63D0\u4F9BCDN\u52A0\u901F/\u4E91\u5B58\u50A8\u670D\u52A1</a>'
  },
  hotArticle: {
    pageSize: 12
  },
  buttonAfterArticle: {
    openTitle: '\u6295"\u5E01"\u652F\u6301',
    closeTitle: "\u4E0B\u6B21\u4E00\u5B9A",
    content: '<img src="https://img.cdn.sugarat.top/mdImg/MTY0Nzc1NTYyOTE5Mw==647755629193">',
    icon: "wechatPay"
  }
});
var config_default = defineConfig({
  extends: blogTheme,
  metaChunk: true,
  srcExclude: ["CHANGELOG.md"],
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  ignoreDeadLinks: true,
  sitemap: {
    hostname: "https://sugarat.top"
  },
  lang: "zh-cn",
  title: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
  description: "\u7CA5\u91CC\u6709\u52FA\u7CD6\u7684\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u8BB0\u5F55\u968F\u7B14\u4E0E\u5B66\u4E60\u7B14\u8BB0\uFF0C\u5927\u524D\u7AEF\u76F8\u5173\u7684\u77E5\u8BC6\uFF0C\u9AD8\u9891\u9762\u8BD5\u9898\uFF0C\u4E2A\u4EBA\u9762\u7ECF\u7B49",
  head: [
    // <meta name="baidu-site-verification" content="codeva-b08avp82Uj" />
    ["meta", { name: "baidu-site-verification", content: "codeva-b08avp82Uj" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/png" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/favicon.ico",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    ["meta", { name: "author", content: "\u7CA5\u91CC\u6709\u52FA\u7CD6" }],
    ["link", { rel: "mask-icon", href: "/favicon.ico", color: "#ffffff" }],
    [
      "link",
      { rel: "apple-touch-icon", href: "/favicon.ico", sizes: "180x180" }
    ]
  ],
  // vite: {
  //   plugins: [
  //     La51Plugin({
  //       id: 'Jgmg5avjAUvoyePS',
  //       ck: 'Jgmg5avjAUvoyePS',
  //       importMode: 'async'
  //     })
  //   ]
  // },
  vue: {
    template: {
      compilerOptions: {
        // https://github.com/vuejs/vitepress/discussions/468
        isCustomElement: (tag) => {
          return ["center"].includes(tag.toLocaleLowerCase());
        }
      }
    }
  },
  lastUpdated: true,
  themeConfig: {
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'F919JCK8WY',
    //     apiKey: '3eca209ad24bdfc26db63382dd5e4490',
    //     indexName: 'sugarat_top',
    //     placeholder: '请输入要搜索的内容...'
    //   }
    // },
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    logo: "https://cdn.upyun.sugarat.top/avatar/blog/zlyst-avatar.jpeg-wh100",
    editLink: {
      pattern: "https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path",
      text: "\u53BB GitHub \u4E0A\u7F16\u8F91\u5185\u5BB9"
    },
    nav: [
      {
        text: "\u5173\u4E8E\u6211",
        link: "/aboutme"
      },
      {
        text: "\u5907\u6218\u6625\u79CB",
        items: [
          { text: "\u5FC3\u5F97\u603B\u7ED3", link: "/offer/experience/" },
          { text: "\u6821\u62DB\u8003\u70B9\u6C47\u603B", link: "/offer/campus/" },
          { text: "\u9762\u7ECF\u6C47\u603B", link: "/offer/sum-interview/" },
          { text: "\u590D\u4E60\u81EA\u67E5", link: "/offer/review/" }
        ]
      },
      {
        text: "\u6280\u672F\u7B14\u8BB0",
        items: [
          { text: "\u6280\u672F\u6559\u7A0B", link: "/technology/learn/" },
          { text: "\u6A21\u677F\u5DE5\u7A0B", link: "/technology/tpl/" },
          { text: "\u6E90\u7801\u5B66\u4E60", link: "/technology/source/" },
          { text: "\u6280\u672F\u6982\u5FF5", link: "/technology/theory/" },
          { text: "\u4E2A\u4EBA\u4F5C\u54C1", link: "/technology/works/" },
          { text: "\u5B66\u4E60\u7B14\u8BB0", link: "/technology/study/" }
        ]
      },
      {
        text: "\u8BA1\u7B97\u673A\u57FA\u7840",
        items: [
          { text: "\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784", link: "/computerBase/algorithm/" },
          { text: "\u64CD\u4F5C\u7CFB\u7EDF", link: "/computerBase/os/" },
          { text: "\u8BA1\u7B97\u673A\u7F51\u7EDC", link: "/computerBase/Internet/" },
          { text: "\u8BBE\u8BA1\u6A21\u5F0F", link: "/computerBase/design/" },
          { text: "\u5251\u6307offer", link: "/computerBase/offer/" }
          // { text: '力扣', link: '/computerBase/leetcode/' }
        ]
      },
      {
        text: "\u5927\u524D\u7AEF",
        items: [
          { text: "javascript", link: "/bigWeb/js/" },
          { text: "vue", link: "/bigWeb/vue/" },
          { text: "html", link: "/bigWeb/html/" },
          { text: "css", link: "/bigWeb/css/" },
          { text: "\u{1F30F}\u6D4F\u89C8\u5668\u4E13\u9898", link: "/bigWeb/browser/" },
          { text: "Web\u6027\u80FD\u4F18\u5316", link: "/bigWeb/performance/" },
          { text: "regexp", link: "/bigWeb/regexp/" },
          { text: "node", link: "/bigWeb/node/" }
        ]
      },
      {
        text: "\u9762\u8BD5",
        items: [
          { text: "\u5FC3\u5F97\u603B\u7ED3", link: "/offer/experience/" },
          { text: "\u6821\u62DB\u8003\u70B9\u6C47\u603B", link: "/offer/campus/" },
          { text: "\u9762\u7ECF\u6C47\u603B", link: "/offer/sum-interview/" },
          { text: "\u590D\u4E60\u81EA\u67E5", link: "/offer/review/" },
          { text: "\u95EE\u89E3", link: "/interview/problem/" },
          { text: "javascript", link: "/interview/js/" },
          { text: "css", link: "/interview/css/" },
          { text: "\u624B\u6495\u4EE3\u7801", link: "/interview/code/" },
          { text: "\u6027\u80FD\u4F18\u5316", link: "/interview/performance/" },
          // { text: "网络", link: "/interview/internet/" },
          // { text: '操作系统', link: '/interview/os/' },
          // { text: '设计模式', link: '/interview/design/' },
          { text: "\u7EFC\u5408\u95EE\u9898", link: "/interview/other/" },
          { text: "\u9762\u7ECF\u6C47\u603B", link: "/offer/sum-interview/" },
          { text: "\u5C0F\u7A0B\u5E8F", link: "/interview/mini/" }
          // { text: '面经', link: '/interview/experience/' }
        ]
      },
      {
        text: "\u624B\u6495\u4EE3\u7801",
        items: [
          { text: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5", link: "/coding/algorithm/" },
          { text: "javascript", link: "/coding/js/" },
          { text: "css", link: "/coding/css/" }
        ]
      },
      // {
      //   text: '个人站点',
      //   items: [
      //     {
      //       text: 'GitHub',
      //       link: 'https://github.com/ATQQ/sugar-blog'
      //     },
      //     {
      //       text: '博客园',
      //       link: 'https://www.cnblogs.com/roseAT/'
      //     },
      //     {
      //       text: '掘金',
      //       link: 'https://juejin.im/user/1028798615918983'
      //     }
      //     // {
      //     //   text: "GitBook-blog",
      //     //   link: "https://sugar-at.gitbook.io/blog-article/",
      //     //   icon: "reco-blog",
      //     // },
      //     // {
      //     //   text: "GitBook-ES6",
      //     //   link: "https://sugar-js.gitbook.io/-1/",
      //     //   icon: "reco-document",
      //     // },
      //   ]
      // },
      {
        text: "\u7EBF\u4E0A\u4F5C\u54C1",
        items: [
          {
            text: "\u8F7B\u53D6(\u6587\u4EF6\u6536\u96C6)",
            link: "https://ep2.sugarat.top"
          },
          {
            text: "\u4E2A\u4EBA\u56FE\u5E8A",
            link: "https://imgbed.sugarat.top"
          },
          {
            text: "\u8003\u52E4\u5C0F\u7A0B\u5E8F",
            link: "https://hdkq.sugarat.top/"
          },
          {
            text: "\u65F6\u5149\u604B\u4EBA",
            link: "https://lover.sugarat.top"
          },
          {
            text: "\u5728\u7EBF\u7B80\u5386\u751F\u6210",
            link: "https://resume.sugarat.top/"
          }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ATQQ/sugar-blog" },
      {
        icon: "x",
        link: "https://x.com/Mr_XiaoZou"
      }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcc3VnYXItYmxvZ1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxzdWdhci1ibG9nXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovc3VnYXItYmxvZy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnXG5pbXBvcnQgdHlwZSB7IFRoZW1lIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5cblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL3N1Z2FyYXQudG9wJ1xuY29uc3Qgd2Vla2x5ID0gYCR7YmFzZVVybH0vd2Vla2x5YFxuY29uc3QgUlNTV2Vla2x5OiBUaGVtZS5SU1NPcHRpb25zID0ge1xuICB0aXRsZTogJ1x1ODlDNlx1OTFDRVx1NEZFRVx1NzBCQyAtIFx1NjI4MFx1NjcyRlx1NTQ2OFx1NTIwQScsXG4gIGJhc2VVcmwsXG4gIGRlc2NyaXB0aW9uOiAnXHU2QkNGXHU1NDY4XHU0RjFBXHU3Q0JFXHU5MDA5XHU1MUZBXHU0RTAwXHU0RTlCIFx1NEYxOFx1OEQyOCZcdTY3MDlcdThEQTMgXHU3Njg0XHU1MTg1XHU1QkI5XHU1MDVBXHU2M0E4XHU5MDAxXHVGRjA4XHU1OTI3XHU1MjREXHU3QUVGXHU0RTNBXHU0RTNCXHVGRjA5XHVGRjBDXHU1MzA1XHU1NDJCXHU0RjQ2XHU0RTBEXHU5NjUwXHU0RThFIFx1NEYxOFx1OEQyOFx1NjU4N1x1N0FFMFx1RkYwQ1x1NUYwMFx1NkU5MFx1NUU5M1x1RkYwQ1x1NURFNVx1NTE3N1x1N0Y1MVx1N0FEOVx1RkYwQ1x1NjcwOVx1NjEwRlx1NjAxRFx1NzY4NFx1NzdFNVx1OEJDNicsXG4gIGlkOiB3ZWVrbHksXG4gIGxpbms6IHdlZWtseSxcbiAgbGFuZ3VhZ2U6ICd6aC1jbicsXG4gIGZpbHRlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS51cmwuc3RhcnRzV2l0aCgnL3dlZWtseS8nKSAmJiAhdmFsdWUudXJsLmVuZHNXaXRoKCcvd2Vla2x5LycpXG4gIH0sXG4gIGltYWdlOiAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UY3dOVEl3TURFek5qTTVNdz09NzA1MjAwMTM2MzkzJyxcbiAgZmF2aWNvbjogJ2h0dHBzOi8vc3VnYXJhdC50b3AvZmF2aWNvbi5pY28nLFxuICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcbiAgdXJsOiBgJHtiYXNlVXJsfS93ZWVrbHkucnNzYCxcbiAgaWNvbjogJzxzdmcgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCI1MTU1XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48dGl0bGU+XHU4OUM2XHU5MUNFXHU0RkVFXHU3MEJDXHU1NDY4XHU1MjBBIFJTUyBcdThCQTJcdTk2MDU8L3RpdGxlPjxwYXRoIGQ9XCJNODMxLjggMTI4bC02NDAgMGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCA2NDBjMCAzNS4zIDI4LjcgNjQgNjQgNjRsNjQwIDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRMODk1LjggMTkyQzg5NS44IDE1Ni43IDg2Ny4xIDEyOCA4MzEuOCAxMjh6TTcwNy40IDE5M2wwIDE4NS44TDY3MyAzNDQuM2MtNi40LTYuNC0xNC45LTkuNS0yMy4zLTkuNC04LjQtMC4yLTE2LjkgMi45LTIzLjMgOS40TDU5MiAzNzguOCA1OTIgMTkzIDcwNy40IDE5M3pNODMxLjggODMzLjFsLTY0MCAwTDE5MS44IDE5MyA1MjggMTkzbDAgMjYzYzAgMC41IDAgMS4xIDAgMS42IDAgMC4zIDAgMC41IDAuMSAwLjcgMCAwLjMgMCAwLjUgMC4xIDAuOCAwIDAuMyAwLjEgMC42IDAuMSAwLjkgMCAwLjIgMCAwLjQgMC4xIDAuNiAwIDAuMyAwLjEgMC43IDAuMiAxIDAgMC4yIDAuMSAwLjMgMC4xIDAuNSAwLjEgMC4zIDAuMSAwLjcgMC4yIDEgMCAwLjIgMC4xIDAuMyAwLjEgMC41IDAuMSAwLjMgMC4yIDAuNyAwLjMgMSAwLjEgMC4yIDAuMSAwLjQgMC4yIDAuNSAwLjEgMC4zIDAuMiAwLjYgMC4zIDAuOSAwLjEgMC4yIDAuMSAwLjQgMC4yIDAuNiAwLjEgMC4zIDAuMiAwLjUgMC4zIDAuOCAwLjEgMC4yIDAuMiAwLjUgMC4zIDAuNyAwLjEgMC4yIDAuMiAwLjUgMC4zIDAuNyAwLjEgMC4zIDAuMiAwLjUgMC4zIDAuOCAwLjEgMC4yIDAuMiAwLjQgMC4zIDAuNiAwLjEgMC4zIDAuMyAwLjYgMC40IDAuOCAwLjEgMC4yIDAuMiAwLjMgMC4zIDAuNSAwLjIgMC4zIDAuMyAwLjYgMC41IDAuOSAwLjEgMC4yIDAuMiAwLjMgMC4zIDAuNCAwLjIgMC4zIDAuNCAwLjYgMC42IDAuOSAwLjEgMC4xIDAuMiAwLjMgMC4zIDAuNCAwLjIgMC4zIDAuNCAwLjYgMC42IDAuOCAwLjEgMC4yIDAuMiAwLjMgMC40IDAuNSAwLjIgMC4yIDAuNCAwLjUgMC42IDAuNyAwLjIgMC4yIDAuNCAwLjQgMC41IDAuNiAwLjIgMC4yIDAuMyAwLjQgMC41IDAuNiAwLjcgMC44IDEuNSAxLjUgMi4yIDIuMiAwLjIgMC4yIDAuNCAwLjMgMC42IDAuNSAwLjIgMC4yIDAuNCAwLjQgMC42IDAuNSAwLjIgMC4yIDAuNSAwLjQgMC43IDAuNiAwLjIgMC4xIDAuMyAwLjMgMC41IDAuNCAwLjMgMC4yIDAuNiAwLjQgMC44IDAuNiAwLjEgMC4xIDAuMyAwLjIgMC40IDAuMyAwLjMgMC4yIDAuNiAwLjQgMC45IDAuNiAwLjEgMC4xIDAuMyAwLjIgMC40IDAuMyAwLjMgMC4yIDAuNiAwLjMgMC45IDAuNSAwLjIgMC4xIDAuMyAwLjIgMC41IDAuMyAwLjMgMC4xIDAuNiAwLjMgMC44IDAuNCAwLjIgMC4xIDAuNCAwLjIgMC42IDAuMyAwLjMgMC4xIDAuNSAwLjIgMC44IDAuMyAwLjIgMC4xIDAuNSAwLjIgMC43IDAuMyAwLjIgMC4xIDAuNSAwLjIgMC43IDAuMyAwLjMgMC4xIDAuNSAwLjIgMC44IDAuMyAwLjIgMC4xIDAuNCAwLjEgMC42IDAuMiAwLjMgMC4xIDAuNiAwLjIgMC45IDAuMyAwLjIgMC4xIDAuNCAwLjEgMC41IDAuMiAwLjMgMC4xIDAuNiAwLjIgMSAwLjMgMC4yIDAgMC4zIDAuMSAwLjUgMC4xIDAuMyAwLjEgMC43IDAuMiAxIDAuMiAwLjIgMCAwLjQgMC4xIDAuNSAwLjEgMC4zIDAuMSAwLjcgMC4xIDEgMC4yIDAuMiAwIDAuNCAwLjEgMC42IDAuMSAwLjMgMCAwLjYgMC4xIDAuOSAwLjEgMC4zIDAgMC41IDAgMC44IDAuMSAwLjIgMCAwLjUgMCAwLjcgMC4xIDAuNSAwIDEuMSAwIDEuNiAwIDAgMCAwIDAgMCAwbDAgMGMwLjUgMCAxLjEgMCAxLjYgMCAwLjMgMCAwLjUgMCAwLjctMC4xIDAuMyAwIDAuNSAwIDAuOC0wLjEgMC4zIDAgMC42LTAuMSAwLjktMC4xIDAuMiAwIDAuNCAwIDAuNi0wLjEgMC4zIDAgMC43LTAuMSAxLTAuMiAwLjIgMCAwLjQtMC4xIDAuNS0wLjEgMC4zLTAuMSAwLjctMC4xIDEtMC4yIDAuMiAwIDAuMy0wLjEgMC41LTAuMSAwLjMtMC4xIDAuNi0wLjIgMS0wLjMgMC4yLTAuMSAwLjQtMC4xIDAuNS0wLjIgMC4zLTAuMSAwLjYtMC4yIDAuOS0wLjMgMC4yLTAuMSAwLjQtMC4xIDAuNi0wLjIgMC4zLTAuMSAwLjUtMC4yIDAuOC0wLjMgMC4yLTAuMSAwLjUtMC4yIDAuNy0wLjMgMC4yLTAuMSAwLjUtMC4yIDAuNy0wLjMgMC4zLTAuMSAwLjUtMC4yIDAuOC0wLjQgMC4yLTAuMSAwLjQtMC4yIDAuNi0wLjMgMC4zLTAuMSAwLjYtMC4zIDAuOC0wLjQgMC4yLTAuMSAwLjMtMC4yIDAuNS0wLjMgMC4zLTAuMiAwLjYtMC4zIDAuOS0wLjUgMC4xLTAuMSAwLjMtMC4yIDAuNC0wLjMgMC4zLTAuMiAwLjYtMC40IDAuOS0wLjYgMC4xLTAuMSAwLjMtMC4yIDAuNC0wLjMgMC4zLTAuMiAwLjYtMC40IDAuOC0wLjYgMC4yLTAuMSAwLjMtMC4yIDAuNS0wLjQgMC4yLTAuMiAwLjUtMC40IDAuNy0wLjYgMC4yLTAuMiAwLjQtMC4zIDAuNi0wLjUgMC4yLTAuMiAwLjQtMC4zIDAuNi0wLjUgMC40LTAuNCAwLjgtMC43IDEuMS0xLjFsNjcuMS02Ny4xIDY3LjEgNjcuMWMwIDAgMCAwIDAgMCAwLjQgMC40IDAuNyAwLjcgMS4xIDEuMSAwLjIgMC4yIDAuNCAwLjMgMC42IDAuNSAwLjIgMC4yIDAuNCAwLjQgMC42IDAuNSAwLjIgMC4yIDAuNSAwLjQgMC43IDAuNiAwLjIgMC4xIDAuMyAwLjMgMC41IDAuNCAwLjMgMC4yIDAuNiAwLjQgMC44IDAuNiAwLjEgMC4xIDAuMyAwLjIgMC40IDAuMyAwLjMgMC4yIDAuNiAwLjQgMC45IDAuNiAwLjEgMC4xIDAuMyAwLjIgMC40IDAuMyAwLjMgMC4yIDAuNiAwLjMgMC45IDAuNSAwLjIgMC4xIDAuMyAwLjIgMC41IDAuMyAwLjMgMC4xIDAuNiAwLjMgMC44IDAuNCAwLjIgMC4xIDAuNCAwLjIgMC42IDAuMyAwLjMgMC4xIDAuNSAwLjIgMC44IDAuMyAwLjIgMC4xIDAuNSAwLjIgMC43IDAuMyAwLjIgMC4xIDAuNSAwLjIgMC43IDAuMyAwLjMgMC4xIDAuNSAwLjIgMC44IDAuMyAwLjIgMC4xIDAuNCAwLjEgMC42IDAuMiAwLjMgMC4xIDAuNiAwLjIgMC45IDAuMyAwLjIgMC4xIDAuNCAwLjEgMC41IDAuMiAwLjMgMC4xIDAuNiAwLjIgMSAwLjMgMC4yIDAgMC4zIDAuMSAwLjUgMC4xIDAuMyAwLjEgMC43IDAuMiAxIDAuMiAwLjIgMCAwLjQgMC4xIDAuNSAwLjEgMC4zIDAuMSAwLjcgMC4xIDEgMC4yIDAuMiAwIDAuNCAwLjEgMC42IDAuMSAwLjMgMCAwLjYgMC4xIDAuOSAwLjEgMC4zIDAgMC41IDAgMC44IDAuMSAwLjIgMCAwLjUgMCAwLjcgMC4xIDEuMSAwLjEgMi4xIDAuMSAzLjIgMCAwLjMgMCAwLjUgMCAwLjctMC4xIDAuMyAwIDAuNSAwIDAuOC0wLjEgMC4zIDAgMC42LTAuMSAwLjktMC4xIDAuMiAwIDAuNCAwIDAuNi0wLjEgMC4zIDAgMC43LTAuMSAxLTAuMiAwLjIgMCAwLjQtMC4xIDAuNS0wLjEgMC4zLTAuMSAwLjctMC4xIDEtMC4yIDAuMiAwIDAuMy0wLjEgMC41LTAuMSAwLjMtMC4xIDAuNi0wLjIgMS0wLjMgMC4yLTAuMSAwLjQtMC4xIDAuNS0wLjIgMC4zLTAuMSAwLjYtMC4yIDAuOS0wLjMgMC4yLTAuMSAwLjQtMC4xIDAuNi0wLjIgMC4zLTAuMSAwLjUtMC4yIDAuOC0wLjMgMC4yLTAuMSAwLjUtMC4yIDAuNy0wLjMgMC4yLTAuMSAwLjUtMC4yIDAuNy0wLjMgMC4zLTAuMSAwLjUtMC4yIDAuOC0wLjMgMC4yLTAuMSAwLjQtMC4yIDAuNi0wLjMgMC4zLTAuMSAwLjYtMC4zIDAuOC0wLjQgMC4yLTAuMSAwLjMtMC4yIDAuNS0wLjMgMC4zLTAuMiAwLjYtMC4zIDAuOS0wLjUgMC4xLTAuMSAwLjMtMC4yIDAuNC0wLjMgMC4zLTAuMiAwLjYtMC40IDAuOS0wLjYgMC4xLTAuMSAwLjMtMC4yIDAuNC0wLjMgMC4zLTAuMiAwLjYtMC40IDAuOC0wLjYgMC4yLTAuMSAwLjMtMC4yIDAuNS0wLjQgMC4yLTAuMiAwLjUtMC40IDAuNy0wLjYgMC4yLTAuMiAwLjQtMC4zIDAuNi0wLjUgMC4yLTAuMiAwLjQtMC4zIDAuNi0wLjUgMC44LTAuNyAxLjUtMS41IDIuMi0yLjIgMC4yLTAuMiAwLjMtMC40IDAuNS0wLjYgMC4yLTAuMiAwLjQtMC40IDAuNS0wLjYgMC4yLTAuMiAwLjQtMC41IDAuNi0wLjcgMC4xLTAuMiAwLjItMC4zIDAuNC0wLjUgMC4yLTAuMyAwLjQtMC42IDAuNi0wLjggMC4xLTAuMSAwLjItMC4zIDAuMy0wLjQgMC4yLTAuMyAwLjQtMC42IDAuNi0wLjkgMC4xLTAuMSAwLjItMC4zIDAuMy0wLjQgMC4yLTAuMyAwLjMtMC42IDAuNS0wLjkgMC4xLTAuMiAwLjItMC4zIDAuMy0wLjUgMC4xLTAuMyAwLjMtMC42IDAuNC0wLjggMC4xLTAuMiAwLjItMC40IDAuMy0wLjYgMC4xLTAuMyAwLjItMC41IDAuNC0wLjggMC4xLTAuMiAwLjItMC41IDAuMy0wLjcgMC4xLTAuMiAwLjItMC41IDAuMy0wLjcgMC4xLTAuMyAwLjItMC41IDAuMy0wLjggMC4xLTAuMiAwLjEtMC40IDAuMi0wLjYgMC4xLTAuMyAwLjItMC42IDAuMy0wLjkgMC4xLTAuMiAwLjEtMC40IDAuMi0wLjUgMC4xLTAuMyAwLjItMC42IDAuMy0xIDAtMC4yIDAuMS0wLjMgMC4xLTAuNSAwLjEtMC4zIDAuMi0wLjcgMC4yLTEgMC0wLjIgMC4xLTAuNCAwLjEtMC41IDAuMS0wLjMgMC4xLTAuNyAwLjItMSAwLTAuMiAwLjEtMC40IDAuMS0wLjYgMC0wLjMgMC4xLTAuNiAwLjEtMC45IDAtMC4zIDAtMC41IDAuMS0wLjggMC0wLjIgMC0wLjUgMC4xLTAuNyAwLTAuNSAwLTEuMSAwLTEuNkw3NzEuMSAxOTNsNjAuMyAwTDgzMS40IDgzMy4xelwiIHAtaWQ9XCI1MTU2XCI+PC9wYXRoPjxwYXRoIGQ9XCJNNDY4LjcgNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMybC0xNDggMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMCAwYzAtMTcuNyAxNC4zLTMyIDMyLTMybDE0OCAwQzQ1NC40IDM4NCA0NjguNyAzOTguMyA0NjguNyA0MTZMNDY4LjcgNDE2elwiIHAtaWQ9XCI1MTU3XCI+PC9wYXRoPjxwYXRoIGQ9XCJNNzcyLjMgNTY1YzAgMTcuNy0xNC4zIDMyLTMyIDMyTDI5MS4zIDU5N2MtMTcuNyAwLTMyLTE0LjMtMzItMzJsMCAwYzAtMTcuNyAxNC4zLTMyIDMyLTMybDQ0OS4xIDBDNzU4IDUzMyA3NzIuMyA1NDcuMyA3NzIuMyA1NjVMNzcyLjMgNTY1elwiIHAtaWQ9XCI1MTU4XCI+PC9wYXRoPjxwYXRoIGQ9XCJNNzcxLjQgNzAyYzAgMTcuNy0xNC4zIDMyLTMyIDMyTDI5MS4zIDczNGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMCAwYzAtMTcuNyAxNC4zLTMyIDMyLTMybDQ0OC4yIDBDNzU3LjEgNjcwIDc3MS40IDY4NC40IDc3MS40IDcwMkw3NzEuNCA3MDJ6XCIgcC1pZD1cIjUxNTlcIj48L3BhdGg+PC9zdmc+JyxcbiAgYXJpYUxhYmVsOiAnXHU4OUM2XHU5MUNFXHU0RkVFXHU3MEJDXHU1NDY4XHU1MjBBUlNTXHU4QkEyXHU5NjA1JyxcbiAgZmlsZW5hbWU6ICd3ZWVrbHkucnNzJyxcbn1cbmNvbnN0IFJTUzogVGhlbWUuUlNTT3B0aW9ucyA9IHtcbiAgdGl0bGU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxuICBiYXNlVXJsLFxuICBkZXNjcmlwdGlvbjogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNixcdTYyRTVcdTY3MDlcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0ZcdUZGMDhcdTU5MjdcdTUyNERcdTdBRUZcdTc2RjhcdTUxNzNcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcdUZGMDknLFxuICBpZDogYmFzZVVybCxcbiAgbGluazogYmFzZVVybCxcbiAgbGFuZ3VhZ2U6ICd6aC1jbicsXG4gIGltYWdlOiAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcbiAgZmF2aWNvbjogJ2h0dHBzOi8vc3VnYXJhdC50b3AvZmF2aWNvbi5pY28nLFxuICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcbiAgdXJsOiBgJHtiYXNlVXJsfS9mZWVkLnJzc2AsXG4gIGZpbHRlcih2YWx1ZSkge1xuICAgIHJldHVybiAhdmFsdWUudXJsLmVuZHNXaXRoKCcvd2Vla2x5LycpICYmICF2YWx1ZS51cmwuZW5kc1dpdGgoJy9jYXNlL2JhZC8nKVxuICB9LFxuICAvKipcbiAgICogXHU2NzAwXHU4RkQxMTAwXHU3QkM3XHVGRjBDXHU5MDdGXHU1MTREXHU1OTJBXHU1OTI3XHU1RjcxXHU1NENEXHU4OUUzXHU2NzkwXG4gICAqL1xuICBsaW1pdDogMTAwXG59XG5cbmNvbnN0IGJsb2dUaGVtZSA9IGdldFRoZW1lQ29uZmlnKHtcbiAgaW1hZ2VTdHlsZToge1xuICAgIGNvdmVyUHJldmlldzogW1xuICAgICAgLy8gXHU0RTAzXHU3MjVCXHU0RTkxXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICcvL2ltZy5jZG4uc3VnYXJhdC50b3AnLFxuICAgICAgICBzdWZmaXg6ICd+Y292ZXIud2VicCdcbiAgICAgIH0sXG4gICAgICAvLyBcdTUzQzhcdTYyQ0RcdTRFOTFDRE5cbiAgICAgIHtcbiAgICAgICAgcnVsZTogJy8vY2RuLnVweXVuLnN1Z2FyYXQudG9wJyxcbiAgICAgICAgc3VmZml4OiAnLWNvdmVyJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgdGhlbWVDb2xvcjogJ2VsLWJsdWUnLFxuICBSU1M6IFtSU1MsIFJTU1dlZWtseV0sXG4gIGF1dGhvcjogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4gIGNvbW1lbnQ6IHtcbiAgICByZXBvOiAnQVRRUS9zdWdhci1ibG9nJyxcbiAgICByZXBvSWQ6ICdNREV3T2xKbGNHOXphWFJ2Y25reU5ERXlORFV5T1RrJyxcbiAgICBjYXRlZ29yeTogJ0Fubm91bmNlbWVudHMnLFxuICAgIGNhdGVnb3J5SWQ6ICdESUNfa3dET0RtRWNjODRDT1ZjNicsXG4gICAgaW5wdXRQb3NpdGlvbjogJ3RvcCdcbiAgfSxcbiAgb21sMmQ6IHtcbiAgICBtb2JpbGVEaXNwbGF5OiB0cnVlLFxuICAgIG1vZGVsczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9vbWwyZC1tb2RlbHMuc3VnYXJhdC50b3AvU2Vua29fTm9ybWFscy9zZW5rby5tb2RlbDMuanNvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9vbWwyZC1tb2RlbHMuc3VnYXJhdC50b3AvbWFpL21vZGVsLmpzb24nLFxuICAgICAgfVxuICAgIF0sXG4gIH0sXG4gIHBvcG92ZXI6IHtcbiAgICB0aXRsZTogJ1x1NTE2Q1x1NTQ0QScsXG4gICAgYm9keTogW1xuICAgICAgeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6ICdcdUQ4M0RcdURDNDdcdTUxNkNcdTRGMTdcdTUzRjdcdUQ4M0RcdURDNDctLS1cdUQ4M0RcdURDNDcgXHU1RkFFXHU0RkUxIFx1RDgzRFx1REM0NycgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWXhOVEF4T0RjMk5USXhNQT09NjE1MDE4NzY1MjEwfmZtdC53ZWJwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBjb250ZW50OiAnXHU2QjIyXHU4RkNFXHU1OTI3XHU1QkI2XHU3OUMxXHU0RkUxJlx1NTJBMFx1N0ZBNFx1NEVBNFx1NkQ0MSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICBjb250ZW50OiAnXHU1MTczXHU0RThFXHU0RjVDXHU4MDA1JyxcbiAgICAgICAgbGluazogJy9hYm91dG1lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNvbnRlbnQ6ICdcdTUyQTBcdTdGQTRcdTRFQTRcdTZENDEnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICB9LFxuICAgICAgICBsaW5rOiAnL2dyb3VwJyxcbiAgICAgIH1cbiAgICBdLFxuICAgIGR1cmF0aW9uOiAtMSxcbiAgICB0d2lua2xlOiB0cnVlXG4gIH0sXG4gIGZyaWVuZDoge1xuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTRFMDNcdTRFRDRcdTc2ODRcdTUzNUFcdTVCQTInLFxuICAgICAgICBkZXM6ICdcdThCQjBcdTVGNTVcdTgxRUFcdTVERjFcdTU3MjhcdTUxOTlcdTdBMEJcdTVFOEZcdThGQzdcdTdBMEJcdTRFMkRcdTc2ODRcdTUzRDFcdTczQjBcdTMwMDFcdTk1RUVcdTk4OThcdTMwMDFcdTYyMTBcdTY3OUMnLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy5iYWJ5N2Jsb2cuY29tJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly93d3cuYmFieTdibG9nLmNvbS9mYXZpY29uLmljbydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnXHU4MzAyXHU4MzAyXHU3MjY5XHU4QkVEJyxcbiAgICAgICAgZGVzOiAnXHU4MzAyXHU4MzAyXHU3Njg0XHU2MjEwXHU5NTdGXHU0RTRCXHU4REVGXHVGRjBDXHU1MzA1XHU1NDJCXHU1MjREXHU3QUVGXHU1RTM4XHU3NTI4XHU3N0U1XHU4QkM2XHUzMDAxXHU2RTkwXHU3ODAxXHU5NjA1XHU4QkZCXHU3QjE0XHU4QkIwXHUzMDAxXHU1NDA0XHU3OUNEXHU1OTQ3XHU2REVCXHU2MjgwXHU1REU3XHUzMDAxXHU2NUU1XHU1RTM4XHU2M0QwXHU2NTQ4XHU1REU1XHU1MTc3XHU3QjQ5JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9ub3Rlcy5mZS1tbS5jb20nLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL25vdGVzLmZlLW1tLmNvbS9sb2dvLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnXHU2NzRFXHU1RTc0XHU3Q0Q1JyxcbiAgICAgICAgZGVzOiAnXHU0RjVCXHU3Q0ZCXHU3Njg0XHU2MjUzXHU1REU1XHU0RUJBJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udXB5dW4uc3VnYXJhdC50b3AvbWRJbWcvc3VnYXIvNjE3YmU3MzkyNThiNzYxYjdkZmVkNGZhMDg2OTMyNmMnLFxuICAgICAgICB1cmw6ICdodHRwczovL3JpbW9jaGlrby5naXRodWIuaW8vJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTUxQjRcdTdGQkQnLFxuICAgICAgICBkZXM6ICdcdTUxQjRcdTdGQkRcdTc2ODRcdTUzNUFcdTVCQTInLFxuICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgJ2h0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL2F2YXRhci9ibG9nL21xeXFpbmdmZW5nLnBuZycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8veWF5dWpzLmNvbS8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ0xpbmJ1ZHUnLFxuICAgICAgICBkZXM6ICdcdTY3MkFcdTY3NjVcdTc2ODRcdTRFMERcdTUzRUZcdTc3RTVcdUZGMENcdTY2MkZcdTUyNERcdThGREJcdTc2ODRcdTUzOUZcdTUyQThcdTUyOUInLFxuICAgICAgICBhdmF0YXI6XG4gICAgICAgICAgJ2h0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL2F2YXRhci9ibG9nL2xpbmJ1ZHUuamZpZicsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbGluYnVkdS50b3AvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTVDMEZcdTRFNUQnLFxuICAgICAgICBkZXM6ICdcdTY1RTVcdTc2Q0FcdTUyQUFcdTUyOUJcdUZGMENcdTgwMENcdTU0MEVcdTk4Q0VcdTc1MUZcdTZDMzRcdThENzcnLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi51cHl1bi5zdWdhcmF0LnRvcC9hdmF0YXIvYmxvZy9qaWFuZ2x5LnBuZycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vamlhbmdseS5jb20vJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTgyQjFcdTU1QjVcdTc1MzVcdTUzRjAgICAgICAnLFxuICAgICAgICBkZXM6ICdcdTY2RjlcdThDNkFcdTRGQTBcdTU0OENcdTRGNTlcdTZFN0VcdTZFN0VcdThGRDhcdTY3MDlcdTRFMjRcdTUzRUFcdTczMkJcdTc2ODRcdTc1MUZcdTZEM0JcdThCQjBcdTVGNTV+JyxcbiAgICAgICAgYXZhdGFyOlxuICAgICAgICAgICdodHRwczovL2Nkbi51cHl1bi5zdWdhcmF0LnRvcC9hdmF0YXIvYmxvZy9mbWNhdC5qcGVnJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZm1jYXQudG9wJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTVGMjBcdTYyMTBcdTVBMDFcdTc2ODRcdTdGNTFcdTdFRENcdTY1RTVcdTVGRDcnLFxuICAgICAgICBkZXM6ICdcdTc3RTVcdTRFMERcdThEQjNcdTgwMENcdTU5NEJcdThGREJcdUZGMENcdTY3MUJcdThGRENcdTVDNzFcdTgwMENcdTUyNERcdTg4NEMnLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL2Nkbi51cHl1bi5zdWdhcmF0LnRvcC9hdmF0YXIvYmxvZy96aGFuZ2NoZW5nd2VpLnBuZycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnpoYW5nY2hlbmd3ZWkud29yaydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vbGVlbGFhLmNuJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udXB5dW4uc3VnYXJhdC50b3AvYXZhdGFyL2Jsb2cvbGVlbGFhLnBuZycsXG4gICAgICAgIGRlczogJ1x1ODBBRlx1NEU4Nlx1NEUyQVx1NUZCN1x1NzY4NFx1NTM1QVx1NUJBMicsXG4gICAgICAgIG5pY2tuYW1lOiAnTEVFREFJU0VOJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9uZXh0LmJsYWNrY2VsbC5mdW4vJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udXB5dW4uc3VnYXJhdC50b3AvYXZhdGFyL2Jsb2cvYmxhY2tjZWxsLmpwZWcnLFxuICAgICAgICBkZXM6ICdcdTcyNjlcdTRFRTVcdTdDN0JcdTgwNUEgXHU0RUJBXHU0RUU1XHU3RkE0XHU1MjA2JyxcbiAgICAgICAgbmlja25hbWU6ICdCbGFja0NlbGwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1cmw6ICdodHRwczovL3Rlbnlvbi5jbicsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL2F2YXRhci9ibG9nL3Rlbnlvbi53ZWJwJyxcbiAgICAgICAgZGVzOiAnXHU1REU1XHU1OTJCXHU0RTNBXHU4MjdBXHVGRjBDXHU3QjAzXHU1RkQ3XHU2MjEwXHU2MjgwJyxcbiAgICAgICAgbmlja25hbWU6ICdZb3Z2aXNcXCdzIEJsb2cnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1x1NUYzQVx1NUMxMVx1Njc2NVx1NEU4NicsXG4gICAgICAgIGRlczogJ1x1NEU5Mlx1ODA1NFx1N0Y1MVx1NEVBN1x1NTRDMVx1N0VDRlx1NzQwNicsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL2F2YXRhci9ibG9nL2Zlbmd4aWFvcWlhbmcucG5nJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9mZW5neGlhb3FpYW5nLmNvbS8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ1x1NTM1QVx1NTNDQlx1NTcwOCcsXG4gICAgICAgIGRlczogJ1x1NzJFQ1x1N0FDQlx1NTM1QVx1NUJBMlx1NEVCQVx1NzY4NFx1NEUxM1x1NUM1RVx1NjcwQlx1NTNDQlx1NTcwOFx1RkYwMScsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL21kSW1nL3N1Z2FyL2JkZWU1ZDExYTFlMDM2Y2EzNjM0OTQzZDM0NDY5ZjU5JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYm95b3VxdWFuLmNvbS9ob21lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdTaW1vbiBIZScsXG4gICAgICAgIGRlczogJ1x1OTY2NFx1NEU4NmNvZGluZ1x1RkYwQ1x1NjIxMVx1NEVDMFx1NEU0OFx1OTBGRFx1NEUwRFx1NEYxQScsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL2F2YXRhci9ibG9nL3NpbW9ubWUucG5nJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9zaW1vbm1lLm5ldGxpZnkuYXBwLydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5pY2tuYW1lOiAnbGFpa3knLFxuICAgICAgICBkZXM6ICdcdTRFMDBcdTU0MERcdTUxNjhcdTY4MDhcdTVGMDBcdTUzRDFcdTVERTVcdTdBMEJcdTVFMDhcdUZGMEMuTkVUXHU1MTY4XHU2ODA4XHU3RUNGXHU5QThDJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9jZG4udXB5dW4uc3VnYXJhdC50b3AvYXZhdGFyL2Jsb2cvbGx4ei5wbmcnLFxuICAgICAgICB1cmw6ICdodHRwOi8vbGx4ei50b3AvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmlja25hbWU6ICdcdTgzRENcdTU2RURcdTUyNERcdTdBRUYnLFxuICAgICAgICBkZXM6ICdcdTVDMEZcdTc2N0RcdTkwRkRcdTgwRkRcdTc3MEJcdTYxQzJcdTc2ODRcdTdCMTRcdThCQjAnLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL25vdGUubm94dXNzai50b3AvbG9nby5wbmcnLFxuICAgICAgICB1cmw6ICdodHRwczovL25vdGUubm94dXNzai50b3AvP3M9eTgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuaWNrbmFtZTogJ0hhY3h5IEJsb2cnLFxuICAgICAgICBkZXM6ICdcdTYzMDdcdTVDMTZcdTY1MzlcdTUzRDhcdTU0N0RcdThGRDBcdUQ4M0RcdURFMEInLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL2hhY3h5LmNuL2xvZ28ucG5nJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9oYWN4eS5jbidcbiAgICAgIH0sXG4gICAgXS5tYXAoKHYpID0+IHtcbiAgICAgIGlmICh2LmF2YXRhci5pbmNsdWRlcygnLy9jZG4udXB5dW4uc3VnYXJhdC50b3AnKSkge1xuICAgICAgICB2LmF2YXRhciA9IGAke3YuYXZhdGFyfS13aDUwYFxuICAgICAgfVxuICAgICAgcmV0dXJuIHZcbiAgICB9KSxcbiAgICByYW5kb206IHRydWUsXG4gICAgbGltaXQ6IDYsXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIHNob3dEYXRlOiB0cnVlLFxuICAgIHBhZ2VSZXN1bHRDb3VudDogNCxcbiAgfSxcbiAgcmVjb21tZW5kOiB7XG4gICAgc2hvd1NlbGY6IHRydWUsXG4gICAgbmV4dFRleHQ6ICdcdTRFMEJcdTRFMDBcdTk4NzUnLFxuICAgIHN0eWxlOiAnc2lkZWJhcidcbiAgfSxcbiAgYXV0aG9yTGlzdDogW1xuICAgIHtcbiAgICAgIG5pY2tuYW1lOiAnXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcbiAgICAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AvYWJvdXRtZS5odG1sJyxcbiAgICAgIGRlczogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNixcdTYyRTVcdTY3MDlcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnXG4gICAgfVxuICBdLFxuICBmb290ZXI6IHtcbiAgICBjb3B5cmlnaHQ6IGBcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYgMjAxOCAtICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWAsXG4gICAgaWNwUmVjb3JkOiB7XG4gICAgICBuYW1lOiAnXHU4NzAwSUNQXHU1OTA3MTkwMTE3MjRcdTUzRjcnLFxuICAgICAgbGluazogJ2h0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vJ1xuICAgIH0sXG4gICAgbWVzc2FnZTogJzxhIGhyZWY9XCJodHRwczovL3d3dy51cHl1bi5jb20vP3V0bV9zb3VyY2U9bGlhbm1lbmcmdXRtX21lZGl1bT1yZWZlcnJhbFwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1wiPlx1NjcyQ1x1N0Y1MVx1N0FEOVx1NzUzMSA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL2xvZ28vdXB5dW4ucG5nLXVweXVuXCIgc3R5bGU9XCJ3aWR0aDo1NnB4O2hlaWdodDoyNHB4O1wiIGFsdD1cIlx1NTNDOFx1NjJDRFx1NEU5MVwiPiBcdTYzRDBcdTRGOUJDRE5cdTUyQTBcdTkwMUYvXHU0RTkxXHU1QjU4XHU1MEE4XHU2NzBEXHU1MkExPC9hPidcbiAgfSxcbiAgaG90QXJ0aWNsZToge1xuICAgIHBhZ2VTaXplOiAxMlxuICB9LFxuICBidXR0b25BZnRlckFydGljbGU6IHtcbiAgICBvcGVuVGl0bGU6ICdcdTYyOTVcIlx1NUUwMVwiXHU2NTJGXHU2MzAxJyxcbiAgICBjbG9zZVRpdGxlOiAnXHU0RTBCXHU2QjIxXHU0RTAwXHU1QjlBJyxcbiAgICBjb250ZW50OiAnPGltZyBzcmM9XCJodHRwczovL2ltZy5jZG4uc3VnYXJhdC50b3AvbWRJbWcvTVRZME56YzFOVFl5T1RFNU13PT02NDc3NTU2MjkxOTNcIj4nLFxuICAgIGljb246ICd3ZWNoYXRQYXknLFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZXh0ZW5kczogYmxvZ1RoZW1lLFxuICBtZXRhQ2h1bms6IHRydWUsXG4gIHNyY0V4Y2x1ZGU6IFsnQ0hBTkdFTE9HLm1kJ10sXG4gIG1hcmtkb3duOiB7XG4gICAgaW1hZ2U6IHtcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlXG4gICAgfVxuICB9LFxuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXG4gIHNpdGVtYXA6IHtcbiAgICBob3N0bmFtZTogJ2h0dHBzOi8vc3VnYXJhdC50b3AnLFxuICB9LFxuICBsYW5nOiAnemgtY24nLFxuICB0aXRsZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4gIGRlc2NyaXB0aW9uOlxuICAgICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDZcdTc2ODRcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcdUZGMENcdThCQjBcdTVGNTVcdTk2OEZcdTdCMTRcdTRFMEVcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjBcdUZGMENcdTU5MjdcdTUyNERcdTdBRUZcdTc2RjhcdTUxNzNcdTc2ODRcdTc3RTVcdThCQzZcdUZGMENcdTlBRDhcdTk4OTFcdTk3NjJcdThCRDVcdTk4OThcdUZGMENcdTRFMkFcdTRFQkFcdTk3NjJcdTdFQ0ZcdTdCNDknLFxuICBoZWFkOiBbXG4gICAgLy8gPG1ldGEgbmFtZT1cImJhaWR1LXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cImNvZGV2YS1iMDhhdnA4MlVqXCIgLz5cbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdiYWlkdS1zaXRlLXZlcmlmaWNhdGlvbicsIGNvbnRlbnQ6ICdjb2RldmEtYjA4YXZwODJVaicgfV0sXG4gICAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnI2ZmZmZmZicgfV0sXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycsIHR5cGU6ICdpbWFnZS9wbmcnIH1dLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgcmVsOiAnYWx0ZXJuYXRlIGljb24nLFxuICAgICAgICBocmVmOiAnL2Zhdmljb24uaWNvJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgIHNpemVzOiAnMTZ4MTYnXG4gICAgICB9XG4gICAgXSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdhdXRob3InLCBjb250ZW50OiAnXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyB9XSxcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ21hc2staWNvbicsIGhyZWY6ICcvZmF2aWNvbi5pY28nLCBjb2xvcjogJyNmZmZmZmYnIH1dLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHsgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5pY28nLCBzaXplczogJzE4MHgxODAnIH1cbiAgICBdLFxuICBdLFxuICAvLyB2aXRlOiB7XG4gIC8vICAgcGx1Z2luczogW1xuICAvLyAgICAgTGE1MVBsdWdpbih7XG4gIC8vICAgICAgIGlkOiAnSmdtZzVhdmpBVXZveWVQUycsXG4gIC8vICAgICAgIGNrOiAnSmdtZzVhdmpBVXZveWVQUycsXG4gIC8vICAgICAgIGltcG9ydE1vZGU6ICdhc3luYydcbiAgLy8gICAgIH0pXG4gIC8vICAgXVxuICAvLyB9LFxuICB2dWU6IHtcbiAgICB0ZW1wbGF0ZToge1xuICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MvZGlzY3Vzc2lvbnMvNDY4XG4gICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4ge1xuICAgICAgICAgIHJldHVybiBbJ2NlbnRlciddLmluY2x1ZGVzKHRhZy50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBvdXRsaW5lOiB7XG4gICAgICBsZXZlbDogWzIsIDNdLFxuICAgICAgbGFiZWw6ICdcdTc2RUVcdTVGNTUnXG4gICAgfSxcbiAgICAvLyBzZWFyY2g6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiAnYWxnb2xpYScsXG4gICAgLy8gICBvcHRpb25zOiB7XG4gICAgLy8gICAgIGFwcElkOiAnRjkxOUpDSzhXWScsXG4gICAgLy8gICAgIGFwaUtleTogJzNlY2EyMDlhZDI0YmRmYzI2ZGI2MzM4MmRkNWU0NDkwJyxcbiAgICAvLyAgICAgaW5kZXhOYW1lOiAnc3VnYXJhdF90b3AnLFxuICAgIC8vICAgICBwbGFjZWhvbGRlcjogJ1x1OEJGN1x1OEY5M1x1NTE2NVx1ODk4MVx1NjQxQ1x1N0QyMlx1NzY4NFx1NTE4NVx1NUJCOS4uLidcbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuICAgIGxhc3RVcGRhdGVkVGV4dDogJ1x1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFx1NEU4RScsXG4gICAgbG9nbzogJ2h0dHBzOi8vY2RuLnVweXVuLnN1Z2FyYXQudG9wL2F2YXRhci9ibG9nL3pseXN0LWF2YXRhci5qcGVnLXdoMTAwJyxcbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BVFFRL3N1Z2FyLWJsb2cvdHJlZS9tYXN0ZXIvcGFja2FnZXMvYmxvZ3ByZXNzLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdcdTUzQkIgR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NTE4NVx1NUJCOSdcbiAgICB9LFxuICAgIG5hdjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU1MTczXHU0RThFXHU2MjExJyxcbiAgICAgICAgbGluazogJy9hYm91dG1lJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NTkwN1x1NjIxOFx1NjYyNVx1NzlDQicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RkMzXHU1Rjk3XHU2MDNCXHU3RUQzJywgbGluazogJy9vZmZlci9leHBlcmllbmNlLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTY4MjFcdTYyREJcdTgwMDNcdTcwQjlcdTZDNDdcdTYwM0InLCBsaW5rOiAnL29mZmVyL2NhbXB1cy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU5NzYyXHU3RUNGXHU2QzQ3XHU2MDNCJywgbGluazogJy9vZmZlci9zdW0taW50ZXJ2aWV3LycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTU5MERcdTRFNjBcdTgxRUFcdTY3RTUnLCBsaW5rOiAnL29mZmVyL3Jldmlldy8nIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjI4MFx1NjcyRlx1N0IxNFx1OEJCMCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2MjgwXHU2NzJGXHU2NTU5XHU3QTBCJywgbGluazogJy90ZWNobm9sb2d5L2xlYXJuLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTZBMjFcdTY3N0ZcdTVERTVcdTdBMEInLCBsaW5rOiAnL3RlY2hub2xvZ3kvdHBsLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTZFOTBcdTc4MDFcdTVCNjZcdTRFNjAnLCBsaW5rOiAnL3RlY2hub2xvZ3kvc291cmNlLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTYyODBcdTY3MkZcdTY5ODJcdTVGRjUnLCBsaW5rOiAnL3RlY2hub2xvZ3kvdGhlb3J5LycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTRFMkFcdTRFQkFcdTRGNUNcdTU0QzEnLCBsaW5rOiAnL3RlY2hub2xvZ3kvd29ya3MvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1NUI2Nlx1NEU2MFx1N0IxNFx1OEJCMCcsIGxpbms6ICcvdGVjaG5vbG9neS9zdHVkeS8nIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU3Qjk3XHU2Q0Q1XHU0RTBFXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0JywgbGluazogJy9jb21wdXRlckJhc2UvYWxnb3JpdGhtLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTY0Q0RcdTRGNUNcdTdDRkJcdTdFREYnLCBsaW5rOiAnL2NvbXB1dGVyQmFzZS9vcy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU4QkExXHU3Qjk3XHU2NzNBXHU3RjUxXHU3RURDJywgbGluazogJy9jb21wdXRlckJhc2UvSW50ZXJuZXQvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRicsIGxpbms6ICcvY29tcHV0ZXJCYXNlL2Rlc2lnbi8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1MjUxXHU2MzA3b2ZmZXInLCBsaW5rOiAnL2NvbXB1dGVyQmFzZS9vZmZlci8nIH1cbiAgICAgICAgICAvLyB7IHRleHQ6ICdcdTUyOUJcdTYyNjMnLCBsaW5rOiAnL2NvbXB1dGVyQmFzZS9sZWV0Y29kZS8nIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NTkyN1x1NTI0RFx1N0FFRicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnamF2YXNjcmlwdCcsIGxpbms6ICcvYmlnV2ViL2pzLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICd2dWUnLCBsaW5rOiAnL2JpZ1dlYi92dWUvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ2h0bWwnLCBsaW5rOiAnL2JpZ1dlYi9odG1sLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdjc3MnLCBsaW5rOiAnL2JpZ1dlYi9jc3MvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1RDgzQ1x1REYwRlx1NkQ0Rlx1ODlDOFx1NTY2OFx1NEUxM1x1OTg5OCcsIGxpbms6ICcvYmlnV2ViL2Jyb3dzZXIvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1dlYlx1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNicsIGxpbms6ICcvYmlnV2ViL3BlcmZvcm1hbmNlLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdyZWdleHAnLCBsaW5rOiAnL2JpZ1dlYi9yZWdleHAvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ25vZGUnLCBsaW5rOiAnL2JpZ1dlYi9ub2RlLycgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU5NzYyXHU4QkQ1JyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdcdTVGQzNcdTVGOTdcdTYwM0JcdTdFRDMnLCBsaW5rOiAnL29mZmVyL2V4cGVyaWVuY2UvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1NjgyMVx1NjJEQlx1ODAwM1x1NzBCOVx1NkM0N1x1NjAzQicsIGxpbms6ICcvb2ZmZXIvY2FtcHVzLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTk3NjJcdTdFQ0ZcdTZDNDdcdTYwM0InLCBsaW5rOiAnL29mZmVyL3N1bS1pbnRlcnZpZXcvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1NTkwRFx1NEU2MFx1ODFFQVx1NjdFNScsIGxpbms6ICcvb2ZmZXIvcmV2aWV3LycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTk1RUVcdTg5RTMnLCBsaW5rOiAnL2ludGVydmlldy9wcm9ibGVtLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdqYXZhc2NyaXB0JywgbGluazogJy9pbnRlcnZpZXcvanMvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ2NzcycsIGxpbms6ICcvaW50ZXJ2aWV3L2Nzcy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2MjRCXHU2NDk1XHU0RUUzXHU3ODAxJywgbGluazogJy9pbnRlcnZpZXcvY29kZS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2JywgbGluazogJy9pbnRlcnZpZXcvcGVyZm9ybWFuY2UvJyB9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTdGNTFcdTdFRENcIiwgbGluazogXCIvaW50ZXJ2aWV3L2ludGVybmV0L1wiIH0sXG4gICAgICAgICAgLy8geyB0ZXh0OiAnXHU2NENEXHU0RjVDXHU3Q0ZCXHU3RURGJywgbGluazogJy9pbnRlcnZpZXcvb3MvJyB9LFxuICAgICAgICAgIC8vIHsgdGV4dDogJ1x1OEJCRVx1OEJBMVx1NkEyMVx1NUYwRicsIGxpbms6ICcvaW50ZXJ2aWV3L2Rlc2lnbi8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU3RUZDXHU1NDA4XHU5NUVFXHU5ODk4JywgbGluazogJy9pbnRlcnZpZXcvb3RoZXIvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1OTc2Mlx1N0VDRlx1NkM0N1x1NjAzQicsIGxpbms6ICcvb2ZmZXIvc3VtLWludGVydmlldy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1QzBGXHU3QTBCXHU1RThGJywgbGluazogJy9pbnRlcnZpZXcvbWluaS8nIH1cbiAgICAgICAgICAvLyB7IHRleHQ6ICdcdTk3NjJcdTdFQ0YnLCBsaW5rOiAnL2ludGVydmlldy9leHBlcmllbmNlLycgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2MjRCXHU2NDk1XHU0RUUzXHU3ODAxJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDUnLCBsaW5rOiAnL2NvZGluZy9hbGdvcml0aG0vJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ2phdmFzY3JpcHQnLCBsaW5rOiAnL2NvZGluZy9qcy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnY3NzJywgbGluazogJy9jb2RpbmcvY3NzLycgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICB0ZXh0OiAnXHU0RTJBXHU0RUJBXHU3QUQ5XHU3MEI5JyxcbiAgICAgIC8vICAgaXRlbXM6IFtcbiAgICAgIC8vICAgICB7XG4gICAgICAvLyAgICAgICB0ZXh0OiAnR2l0SHViJyxcbiAgICAgIC8vICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vQVRRUS9zdWdhci1ibG9nJ1xuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgdGV4dDogJ1x1NTM1QVx1NUJBMlx1NTZFRCcsXG4gICAgICAvLyAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuY25ibG9ncy5jb20vcm9zZUFULydcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIHtcbiAgICAgIC8vICAgICAgIHRleHQ6ICdcdTYzOThcdTkxRDEnLFxuICAgICAgLy8gICAgICAgbGluazogJ2h0dHBzOi8vanVlamluLmltL3VzZXIvMTAyODc5ODYxNTkxODk4MydcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgICAgLy8ge1xuICAgICAgLy8gICAgIC8vICAgdGV4dDogXCJHaXRCb29rLWJsb2dcIixcbiAgICAgIC8vICAgICAvLyAgIGxpbms6IFwiaHR0cHM6Ly9zdWdhci1hdC5naXRib29rLmlvL2Jsb2ctYXJ0aWNsZS9cIixcbiAgICAgIC8vICAgICAvLyAgIGljb246IFwicmVjby1ibG9nXCIsXG4gICAgICAvLyAgICAgLy8gfSxcbiAgICAgIC8vICAgICAvLyB7XG4gICAgICAvLyAgICAgLy8gICB0ZXh0OiBcIkdpdEJvb2stRVM2XCIsXG4gICAgICAvLyAgICAgLy8gICBsaW5rOiBcImh0dHBzOi8vc3VnYXItanMuZ2l0Ym9vay5pby8tMS9cIixcbiAgICAgIC8vICAgICAvLyAgIGljb246IFwicmVjby1kb2N1bWVudFwiLFxuICAgICAgLy8gICAgIC8vIH0sXG4gICAgICAvLyAgIF1cbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTdFQkZcdTRFMEFcdTRGNUNcdTU0QzEnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdThGN0JcdTUzRDYoXHU2NTg3XHU0RUY2XHU2NTM2XHU5NkM2KScsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9lcDIuc3VnYXJhdC50b3AnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU0RTJBXHU0RUJBXHU1NkZFXHU1RThBJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2ltZ2JlZC5zdWdhcmF0LnRvcCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTgwMDNcdTUyRTRcdTVDMEZcdTdBMEJcdTVFOEYnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vaGRrcS5zdWdhcmF0LnRvcC8nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU2NUY2XHU1MTQ5XHU2MDRCXHU0RUJBJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2xvdmVyLnN1Z2FyYXQudG9wJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1NTcyOFx1N0VCRlx1N0I4MFx1NTM4Nlx1NzUxRlx1NjIxMCcsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9yZXN1bWUuc3VnYXJhdC50b3AvJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vQVRRUS9zdWdhci1ibG9nJyB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAneCcsXG4gICAgICAgIGxpbms6ICdodHRwczovL3guY29tL01yX1hpYW9ab3UnXG4gICAgICB9XG4gICAgXVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UCxTQUFTLHNCQUFzQjtBQUV2UixTQUFTLG9CQUFvQjtBQUc3QixJQUFNLFVBQVU7QUFDaEIsSUFBTSxTQUFTLEdBQUcsT0FBTztBQUN6QixJQUFNLFlBQThCO0FBQUEsRUFDbEMsT0FBTztBQUFBLEVBQ1A7QUFBQSxFQUNBLGFBQWE7QUFBQSxFQUNiLElBQUk7QUFB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QSxRQUNWLEtBQUs7QUFBQSxRQUNMLFFBQ0U7QUFBQSxRQUNGLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixLQUFLO0FBQUEsUUFDTCxRQUNFO0FBQUEsUUFDRixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLFFBQ0wsVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixLQUFLO0FBQUEsUUFDTCxVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxRQUNMLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRixFQUFFLElBQUksQ0FBQyxNQUFNO0FBQ1gsVUFBSSxFQUFFLE9BQU8sU0FBUyx5QkFBeUIsR0FBRztBQUNoRCxVQUFFLFNBQVMsR0FBRyxFQUFFLE1BQU07QUFBQSxNQUN4QjtBQUNBLGFBQU87QUFBQSxJQUNULENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixpQkFBaUI7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFdBQVcsMENBQWdCLG9CQUFJLEtBQUssR0FBRSxZQUFZLENBQUM7QUFBQSxJQUNuRCxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxvQkFBb0I7QUFBQSxJQUNsQixXQUFXO0FBQUEsSUFDWCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7QUFFRCxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxZQUFZLENBQUMsY0FBYztBQUFBLEVBQzNCLFVBQVU7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUNGLE1BQU07QUFBQTtBQUFBLElBRUosQ0FBQyxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsU0FBUyxvQkFBb0IsQ0FBQztBQUFBLElBQzFFLENBQUMsUUFBUSxFQUFFLE1BQU0sZUFBZSxTQUFTLFVBQVUsQ0FBQztBQUFBLElBQ3BELENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGdCQUFnQixNQUFNLFlBQVksQ0FBQztBQUFBLElBQ2pFO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRLEVBQUUsTUFBTSxVQUFVLFNBQVMsaUNBQVEsQ0FBQztBQUFBLElBQzdDLENBQUMsUUFBUSxFQUFFLEtBQUssYUFBYSxNQUFNLGdCQUFnQixPQUFPLFVBQVUsQ0FBQztBQUFBLElBQ3JFO0FBQUEsTUFDRTtBQUFBLE1BQ0EsRUFBRSxLQUFLLG9CQUFvQixNQUFNLGdCQUFnQixPQUFPLFVBQVU7QUFBQSxJQUNwRTtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVBLEtBQUs7QUFBQSxJQUNILFVBQVU7QUFBQSxNQUNSLGlCQUFpQjtBQUFBO0FBQUEsUUFFZixpQkFBaUIsQ0FBQyxRQUFRO0FBQ3hCLGlCQUFPLENBQUMsUUFBUSxFQUFFLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQztBQUFBLFFBQ3BEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsSUFDWCxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVUEsaUJBQWlCO0FBQUEsSUFDakIsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1IsU0FDRTtBQUFBLE1BQ0YsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNIO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHFCQUFxQjtBQUFBLFVBQzNDLEVBQUUsTUFBTSx3Q0FBVSxNQUFNLGlCQUFpQjtBQUFBLFVBQ3pDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHdCQUF3QjtBQUFBLFVBQzlDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGlCQUFpQjtBQUFBLFFBQ3pDO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHFCQUFxQjtBQUFBLFVBQzNDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLG1CQUFtQjtBQUFBLFVBQ3pDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHNCQUFzQjtBQUFBLFVBQzVDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHNCQUFzQjtBQUFBLFVBQzVDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHFCQUFxQjtBQUFBLFVBQzNDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHFCQUFxQjtBQUFBLFFBQzdDO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSw4Q0FBVyxNQUFNLDJCQUEyQjtBQUFBLFVBQ3BELEVBQUUsTUFBTSw0QkFBUSxNQUFNLG9CQUFvQjtBQUFBLFVBQzFDLEVBQUUsTUFBTSxrQ0FBUyxNQUFNLDBCQUEwQjtBQUFBLFVBQ2pELEVBQUUsTUFBTSw0QkFBUSxNQUFNLHdCQUF3QjtBQUFBLFVBQzlDLEVBQUUsTUFBTSxxQkFBVyxNQUFNLHVCQUF1QjtBQUFBO0FBQUEsUUFFbEQ7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLGNBQWMsTUFBTSxjQUFjO0FBQUEsVUFDMUMsRUFBRSxNQUFNLE9BQU8sTUFBTSxlQUFlO0FBQUEsVUFDcEMsRUFBRSxNQUFNLFFBQVEsTUFBTSxnQkFBZ0I7QUFBQSxVQUN0QyxFQUFFLE1BQU0sT0FBTyxNQUFNLGVBQWU7QUFBQSxVQUNwQyxFQUFFLE1BQU0sMkNBQVcsTUFBTSxtQkFBbUI7QUFBQSxVQUM1QyxFQUFFLE1BQU0sK0JBQVcsTUFBTSx1QkFBdUI7QUFBQSxVQUNoRCxFQUFFLE1BQU0sVUFBVSxNQUFNLGtCQUFrQjtBQUFBLFVBQzFDLEVBQUUsTUFBTSxRQUFRLE1BQU0sZ0JBQWdCO0FBQUEsUUFDeEM7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLDRCQUFRLE1BQU0scUJBQXFCO0FBQUEsVUFDM0MsRUFBRSxNQUFNLHdDQUFVLE1BQU0saUJBQWlCO0FBQUEsVUFDekMsRUFBRSxNQUFNLDRCQUFRLE1BQU0sd0JBQXdCO0FBQUEsVUFDOUMsRUFBRSxNQUFNLDRCQUFRLE1BQU0saUJBQWlCO0FBQUEsVUFDdkMsRUFBRSxNQUFNLGdCQUFNLE1BQU0sc0JBQXNCO0FBQUEsVUFDMUMsRUFBRSxNQUFNLGNBQWMsTUFBTSxpQkFBaUI7QUFBQSxVQUM3QyxFQUFFLE1BQU0sT0FBTyxNQUFNLGtCQUFrQjtBQUFBLFVBQ3ZDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLG1CQUFtQjtBQUFBLFVBQ3pDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSWhELEVBQUUsTUFBTSw0QkFBUSxNQUFNLG9CQUFvQjtBQUFBLFVBQzFDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHdCQUF3QjtBQUFBLFVBQzlDLEVBQUUsTUFBTSxzQkFBTyxNQUFNLG1CQUFtQjtBQUFBO0FBQUEsUUFFMUM7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLDhDQUFXLE1BQU0scUJBQXFCO0FBQUEsVUFDOUMsRUFBRSxNQUFNLGNBQWMsTUFBTSxjQUFjO0FBQUEsVUFDMUMsRUFBRSxNQUFNLE9BQU8sTUFBTSxlQUFlO0FBQUEsUUFDdEM7QUFBQSxNQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE0QkE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLE1BQzdEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
