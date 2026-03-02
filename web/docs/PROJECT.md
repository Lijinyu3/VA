# PROJECT

更新时间：2026-03-02（Australia/Melbourne）

## 用途
- 本文件是 `web/` 新网站项目的单点说明。
- 新会话先读本文件，再读 `TASKS.md`，最后读 `HANDOFF.md` 最新记录。

## 项目快照（迁移后）
- 目标：2026-03-15 前上线 VA 英文首发网站。
- 核心：品牌展示 + 询盘转化。
- 当前代码主目录：`/Users/lee/Documents/SAI/VA/web`。
- 网站素材统一目录：`/Users/lee/Documents/SAI/VA/materials`（单目录，便于查找与引用）。
- 已移除目录：`/Users/lee/Documents/SAI/VA/web_1`、`/Users/lee/Documents/SAI/VA/website`。

## 当前实现状态（以代码为准）
- 已有路由：
1. `/`（Home）
2. `/products`（Products）
3. `/about`（About）
- 待补齐路由（首发范围要求）：
1. `/products/[slug]`（Product Detail）
2. `/contact`（Contact）

## 已确认决策
| ID | 事项 | 结论 | 状态 |
|---|---|---|---|
| D-001 | 站点目标 | 品牌展示 + 获客询盘 | Confirmed |
| D-002 | 首发产品范围 | 楔形线夹、穿刺线夹 | Confirmed |
| D-003 | 目录主入口 | `web/` 为唯一有效站点目录 | Confirmed |
| D-004 | 旧站处理 | `website/` 已删除 | Confirmed |
| D-005 | 技术栈 | Next.js 16.1.6 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui | Confirmed |
| D-006 | 表单后端策略 | 当前阶段不接 Email/API，仅保留前端转化入口 | Confirmed |
| D-007 | 文档位置 | 项目协作文档统一在 `web/docs/` | Confirmed |

## 待确认事项
| ID | 事项 | 当前状态 | 负责人 |
|---|---|---|---|
| P-001 | 技术参数口径（对应 `PC-003/004/006/010`） | Pending | 刘工 |
| P-002 | 首页与产品页真实素材替换优先级 | Pending | Jay + Alvin |
| P-003 | 品牌对外信息（文案/邮箱/公司名）最终口径 | Pending | Jay + Bob |

## 实施约定
- 包管理器：`pnpm`。
- 常用命令：`pnpm dev`、`pnpm lint`、`pnpm build`。
- 内容与数据：优先维护在 `lib/` 与 `components/`，避免页面内硬编码大段重复数据。
- 未确认参数不对外承诺，统一以引导联系方式处理。

## 目录约定
```text
web/
  app/
  components/
  hooks/
  lib/
  public/
  styles/
  docs/
    PROJECT.md
    TASKS.md
    HANDOFF.md
```

## 更新规则
1. 影响目标、范围、技术边界的变更先更新本文件。
2. 执行进度只在 `TASKS.md` 维护。
3. 每次会话结束追加 `HANDOFF.md`，不回写历史记录。
