# TASKS

更新时间：2026-03-02（Australia/Melbourne）
状态：`Open / Doing / Blocked / Done`

## P1（本周关键）
| ID | 任务 | Owner | 状态 | 完成标准 |
|---|---|---|---|---|
| T-001 | 目录迁移：`web_1 -> web` | Agent | Done | `web/` 成为新站唯一目录 |
| T-002 | 旧站清理：删除 `website/` | Agent | Done | 根目录不存在 `website/` |
| T-003 | 文档迁移与重写到 `web/docs/` | Agent | Done | `PROJECT/TASKS/HANDOFF` 已重写并可维护 |
| T-004 | 补齐首发路由：`/products/[slug]`、`/contact` | Jay + Agent | Open | 页面可访问且导航可达 |
| T-005 | 替换首页与产品页真实素材（图片/文案） | Jay + Alvin | Open | 占位素材全部替换完成 |
| T-006 | 关闭关键参数确认项（`PC-003/004/006/010`） | 刘工 | Open | 对应项在根目录 `PENDING_CONFIRMATIONS.md` 标记 Closed |

## P2（随后推进）
| ID | 任务 | Owner | 状态 | 前置条件 |
|---|---|---|---|---|
| T-007 | 产品详情模板与数据结构统一 | Jay + Agent | Open | T-004 完成 |
| T-008 | 联系表单后端联调（Email/API） | Jay | Deferred | 进入下一阶段再启动 |
| T-009 | QA 与上线发布（Vercel） | Jay | Open | T-004/T-005/T-006 满足上线最低要求 |

## 备注
- 根目录文档（`BACKGROUND.md`、`OVERVIEW.md`、`ACTION_BOARD.md`、`PENDING_CONFIRMATIONS.md`、`ASSETS_INDEX.md`）本次未改动。
