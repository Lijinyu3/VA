# PROJECT

更新时间：2026-03-06（Australia/Melbourne）

## 用途
- 本文件是 `web/` 网站工程事实的单点说明。
- 新会话先读本文件，再读 `TASKS.md`，最后读 `HANDOFF.md` 最新记录。

## 项目快照
- 目标：2026-03-15 前上线 VA 英文首发网站。
- 核心：品牌展示 + 询盘转化。
- 当前代码主目录：`/Users/lee/Documents/SAI/VA/web`。
- 网站素材统一目录：`/Users/lee/Documents/SAI/VA/materials`。

## 文档治理规则
1. 工程细节以 `web/docs/*` 为唯一事实源。
2. 根目录文档（`/Users/lee/Documents/SAI/VA/*.md`）只维护项目级摘要与节奏。
3. 同一事实不双写细节，避免维护漂移。

## 当前实现状态（以代码为准）
- 已有路由：
1. `/`（Home）
2. `/products`（Products）
3. `/products/[slug]`（Product Detail）
4. `/products/[slug]/datasheet`（Datasheet）
5. `/about`（About）
6. `/contact`（Contact）

- 已打通页面链路：
1. Products 列表卡片可进入 `/products/[slug]`。
2. Product Detail 可进入 `/products/[slug]/datasheet`。
3. Contact 入口统一指向 `/contact`（Header / CTA）。

## 当前已实现能力
1. Product Detail + Datasheet 双层结构已落地。
2. 缺图占位策略已落地（`pending image cards`）。
3. Contact 页面前端占位提交已落地（无后端 API）。
4. 品牌口径已统一为 `VA`，模板品牌残留已清理。

## 当前真实阻塞
1. Datasheet 第 2/3 类技术图（结构特写 / 尺寸标注）尚未补齐真实素材。
2. 关键参数确认项仍未关闭（对应 `PC-003/004/006`，以及新增口径 `PC-011/012/013/016`）。
3. 配套产品资料未齐（快锁式带电线夹、电动安装工具，见 `PC-017/018`）。
4. Datasheet PDF 下载仍为占位，未接入正式文件。
5. 本地 `lint/build` 受环境影响：依赖与外网字体拉取存在限制。

## 已确认决策
| ID | 事项 | 结论 | 状态 |
|---|---|---|---|
| D-001 | 站点目标 | 品牌展示 + 获客询盘 | Confirmed |
| D-002 | 当前产品范围 | 主产品线：楔形线夹、穿刺线夹、柔性并沟线夹；配套：快锁式带电线夹、楔形线夹安装工具 | Confirmed |
| D-003 | 目录主入口 | `web/` 为唯一有效站点目录 | Confirmed |
| D-004 | 旧站处理 | `website/` 已删除 | Confirmed |
| D-005 | 技术栈 | Next.js 16.1.6 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui | Confirmed |
| D-006 | 表单后端策略 | 当前阶段不接 Email/API，仅保留前端转化入口 | Confirmed |
| D-007 | 文档位置 | 项目协作文档统一在 `web/docs/` | Confirmed |
| D-008 | Detail 页面策略 | `/products/[slug]` 展示第 1/4 类图片 | Confirmed |
| D-009 | Datasheet 页面策略 | `/products/[slug]/datasheet` 展示第 2/3 类图片 | Confirmed |
| D-010 | 缺图处理策略 | 占位卡 + 引导联系，不阻塞上线 | Confirmed |
| D-011 | 产品线确认来源 | 2026-03-06 与刘工沟通确认“3 主线 + 2 配套” | Confirmed |

## 待确认事项
| ID | 事项 | 当前状态 | 负责人 |
|---|---|---|---|
| P-001 | 技术参数口径（`PC-003/004/006/011/012/013`） | Pending | 刘工 |
| P-002 | Datasheet 技术图真图替换优先级 | Pending | Jay + Alvin |
| P-003 | 正式 datasheet PDF 文件与命名 | Pending | Jay |
| P-004 | 对外联系信息最终口径（电话/邮箱/地址） | Pending | Jay + Bob |
| P-005 | 配套产品资料补齐（快锁式带电线夹/电动安装工具） | Pending | 刘工 + Alvin |

## 实施约定
- 包管理器：`pnpm`。
- 常用命令：`pnpm dev`、`pnpm lint`、`pnpm build`。
- 内容与数据：优先维护在 `lib/` 与 `components/`，避免页面内重复硬编码。
- 未确认参数不对外承诺，统一引导询盘沟通。

## 目录约定
```text
web/
  app/
    products/
      [slug]/
        page.tsx
        datasheet/page.tsx
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

## 工程状态读取顺序
1. `web/docs/PROJECT.md`
2. `web/docs/TASKS.md`
3. `web/docs/HANDOFF.md`

## 更新规则
1. 影响目标、范围、技术边界的变更先更新本文件。
2. 执行状态只在 `TASKS.md` 维护。
3. 每次会话结束追加 `HANDOFF.md`，不回写历史。
