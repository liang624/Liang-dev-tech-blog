import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md",
        {
          text: "深入模块分析",
          icon: "laptop-code",
          children: [
            "day11.md",
            "day12.md",
          ]
        }]
    },
    {
      text: "技术学习",
      icon: "laptop-code",
      prefix: "md/test/",
      children: ["day01.md"],
    },
  ],
});

