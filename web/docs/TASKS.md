# TASKS

更新时间：2026-03-06（Australia/Melbourne）
状态：`Open / Doing / Blocked / Done`

## P1（本周关键）
| ID | 任务 | Owner | 状态 | 完成标准 |
|---|---|---|---|---|
| T-001 | 目录迁移：`web_1 -> web` | Agent | Done | `web/` 成为新站唯一目录 |
| T-002 | 旧站清理：删除 `website/` | Agent | Done | 根目录不存在 `website/` |
| T-003 | 文档迁移与重写到 `web/docs/` | Agent | Done | `PROJECT/TASKS/HANDOFF` 已重写并可维护 |
| T-004 | 补齐首发路由：`/products/[slug]`、`/contact` | Jay + Agent | Done | 页面可访问且导航可达 |
| T-005 | 替换首页与产品页真实素材（图片/文案） | Jay + Alvin | Open | 关键占位素材替换完成 |
| T-006 | 关闭关键参数确认项（`PC-003/004/006`） | 刘工 | Open | 对应项在根目录 `PENDING_CONFIRMATIONS.md` 标记 Closed |
| T-007 | 产品详情模板与数据结构统一 | Jay + Agent | Done | 6 个型号支持 Detail + Datasheet 路由与模板 |
| T-013 | 产品线口径同步（3 主线 + 2 配套） | Jay + 刘工 | Done | 根目录文档与 `web/docs` 口径一致 |
| T-010 | 替换 Datasheet 2/3 类技术真图（close-up + dimension） | Jay + Alvin | Open | 每个首发型号至少完成一套可发布技术图（优先基于 `A-024/A-025` 输出） |
| T-011 | 接入真实 Datasheet PDF 下载 | Jay | Open | `/products/[slug]/datasheet` 下载入口可用（参考 `A-023` 口径确认后接入） |
| T-012 | 发布前 QA（移动端 + 入口链路 + 可访问策略） | Jay | Open | QA 清单通过并确认 Production 可公开访问 |
| T-014 | 补齐快锁式带电线夹资料包 | 刘工 + Alvin | Open | 明确型号与参数，提供至少一套主图/结构图/安装图 |
| T-015 | 跟进电动安装工具资料与上线批次 | 刘工 + Jay | Open | 明确交付时间与是否纳入当前版本官网 |
| T-016 | 新产品试验清单与站点占位策略 | Jay + Bob | Open | 输出“试验中产品”内部清单与站点展示规则 |

## P2（随后推进）
| ID | 任务 | Owner | 状态 | 前置条件 |
|---|---|---|---|---|
| T-008 | 联系表单后端联调（Email/API） | Jay | Deferred | 进入下一阶段再启动 |
| T-009 | Vercel 生产发布 | Jay | Open | T-005/T-006/T-010/T-011/T-012 达到上线标准 |

## 备注
- 根目录文档（`BACKGROUND.md`、`OVERVIEW.md`、`ACTION_BOARD.md`、`PENDING_CONFIRMATIONS.md`、`ASSETS_INDEX.md`）仅维护项目级摘要与节奏。
