# 庞洁瑶 · 2026 英国牛津夏校行程网站

Pang Jieyao · UK Summer School 2026 — 专属的静态行程助手网页，已接入 Google Places 实时地点查询。

## 功能

- 📅 **每日行程**：13 天完整日程，点击卡片查看详情、提示与相关链接
- 🗺️ **牛津攻略**：Abingdon House 住宿、牛津必打卡、周末周边游、吃喝生活
- 🔍 **地点搜索**：点击景点/饭店旁的「查攻略」按钮，查看图片、评分、地址、营业时间、评论与嵌入式地图（默认使用 mock 数据；也可接入 Google Places API）
- 🗺️ **免 Key 地图**：牛津攻略页和地点弹窗中的地图使用 OpenStreetMap，无需信用卡或 API Key
- ✈️ **交通 & 机票**：国泰航班信息、大学接驳大巴、牛津当地交通、深圳湾口岸赴港机场时间规划
- 📝 **出行备忘**：文件清单、行李清单、出发/抵达注意事项、紧急联络
- 🌐 **中英双语**：默认中文，右上角一键切换英文
- 📱 **手机友好**：适配 iPhone Safari，底部标签导航，可添加到主屏幕

## 本地预览（推荐）

```bash
cd uk-trip-2026
python3 dev-server.py
```

然后用浏览器打开 `http://localhost:8787`。

`dev-server.py` 默认使用 mock 数据，不需要真实 API Key 即可测试前端效果。

## Cloudflare Pages 部署

> 注意：由于需要隐藏 API Key，本项目已迁移到 **Cloudflare Pages + Functions**，不再使用 GitHub Pages。
>
> 地图功能已改用 **OpenStreetMap**，无需信用卡。只有「地点搜索」需要 Google Places API Key；如果没有 Key，会自动使用 mock 数据。

### 1. 准备 API Key（可选）

如果你希望地点搜索返回真实数据，才需要这一步：

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建项目并启用 **Places API (New)**
3. 创建 **API Key**
4. （可选）限制 Key 的调用来源，提高安全性

### 2. 部署到 Cloudflare Pages

1. 在 GitHub 上将仓库公开，并确保文件在仓库根目录。
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → **Create a project**
3. 选择 GitHub 仓库 `uk-summer-school-2026`，分支 `main`
4. 构建设置：
   - **Build command**: 留空（无需构建）
   - **Build output directory**: `/`
5. 点击 **Save and Deploy**
6. 进入项目 → **Settings → Functions**，添加环境变量：
   - `GOOGLE_PLACES_API_KEY` = 你的 Google Places API Key（没有则留空，使用 mock 数据）
   - `MOCK_MODE` = `true`（没有 Key 时）或 `false`（有 Key 且想调用真实 API 时）
7. 等待部署完成，访问 Cloudflare 提供的域名即可

### 3. 本地使用 Wrangler 开发（需要 Node.js）

```bash
cd uk-trip-2026
npm install

# 复制环境变量模板并填写真实 Key
cp .dev.vars.example .dev.vars
# 编辑 .dev.vars

npm run dev
```

## 文件结构

```
uk-trip-2026/
├── index.html              # 主页面
├── styles.css              # 样式
├── app.js                  # 数据、渲染、搜索交互
├── manifest.json           # PWA 配置
├── functions/
│   └── api/
│       └── places.js       # Cloudflare Pages Function：/api/places 代理
├── dev-server.py           # Python 本地开发服务器（含 mock 数据）
├── wrangler.toml           # Cloudflare 配置
├── package.json            # Wrangler 脚本
├── .dev.vars.example       # 环境变量模板
├── .gitignore              # Git 忽略规则
├── README.md               # 本说明
└── assets/
    ├── itinerary.png       # 官方行程表原图
    ├── icon-192.png
    └── icon-512.png
```

## API 说明

- 前端通过 `fetch('/api/places?query=Radcliffe Camera Oxford&lang=zh')` 查询地点。
- 服务端函数 `functions/api/places.js` 调用 Google Places API（New），并将图片、评分、地址、营业时间、评论等返回给前端。
- 所有 API Key 均存储在 Cloudflare Pages 的环境变量中，不会暴露在前端代码里。

## 数据来源

- 岭南大学研究生暑期学校官方行程 PDF
- 国泰航空电子机票（PANG JIEYAO.pdf）
- 学生提醒清单 / 住宿指南
- 牛津大学官网、网络攻略整理
- OpenStreetMap 地图数据（免费、无需 API Key）
- Google Places API 实时地点数据（可选）

---

祝英国之行顺利！🎓🇬🇧
