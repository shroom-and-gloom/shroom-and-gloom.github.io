# Codex Brief — Shroom and Gloom

## 1. 当前站是什么

这是一个围绕 **Shroom and Gloom** 的英文 SEO 游戏资讯站。平台：steam。官方链接：https://store.steampowered.com/app/3271280/。主题：Skin Classic Game Portal (`portal`)；预设主题 `void-violet`；header `solid`；component `rounded`。

## 2. 为什么现在做这个词

人工已批准该候选进入建站流程。搜索机会摘要：请读取 SITE_PLAN.json 中的结构化搜索需求。

## 3. 搜索需求摘要

- 见 SITE_PLAN.json / SEO_PLAN.json

## 4. 已批准的网站页面

- `/` — Shroom and Gloom — manual_fast_path
- `wiki` — Shroom and Gloom wiki — manual_fast_path

## 5. 自动系统已经完成什么（V3）

- 规划、正文 Content Pack、On-page SEO、主题化品牌 SVG、内链、技术 SEO 与 Build QA 已写入 ZIP。
- Manifest / Audit：contentMode=deterministic, seoMode=deterministic, factPackSource=skipped, qaVersion=v3.0
- SERP：0 页 SERP brief；冲突 0
- `site.json` 中 `readyForLaunch=false`（人类填域名 / analytics 前不可索引）。
- 不要重新规划关键词或重写整站结构，除非 QA 明确标出问题。

## 6. Codex 只需可选收尾

- 可选视觉 / 文案 polish（不改变搜索意图与主词映射）。
- 填入真实部署 URL / custom domain。
- Analytics / Ads / verification（如需要）。
- 最终人工核对时间敏感事实；任何兑换码、数值、掉落率、版本、发布日期都不得猜测。
- 运行 `npm run typecheck`、`npm run lint`、`npm run build`（含 validate 与 SEO audit）。

## 7. 禁止擅自修改什么

除非 Manifest/QA 指出明确的关键词冲突、搜索意图冲突或技术 SEO Bug，不要改页面 URL、主关键词映射、已批准页面集合、P0/P1 优先级与核心内链。

## 8. 仍需核验的事实/素材

- Use only sourced Game Fact Pack statements.
- Do not invent codes, rewards, dates, or stats.

## 9. 最终 Build / SEO Audit 验收

事实与素材核验、typecheck/lint/build/SEO audit 全部通过，并且部署域名就绪后，才能将 `readyForLaunch` 改为 `true`。最终汇报修改内容、核验来源、仍需人工确认事项和命令结果。
