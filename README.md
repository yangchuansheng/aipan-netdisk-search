# 盘搜搜-网盘资源搜索Web

🔥 盘搜搜-网盘资源搜索：是一个免费开源项目!

-------------------
👉 [盘搜搜-网盘资源搜索](https://pansou.icloudnative.io)

### 🔥更新日志

- 新增批量删除功能
- 新增博客功能 （分支：[feat-admin-panel](https://github.com/unilei/aipan-netdisk-search/tree/feat-add-admin-panel)）
- 新增批量上传数据 [csv示例](/assets//readme//demo/demo-multi.csv) [xlsx 示例](/assets/readme/demo/demo-multi.xls)
- 增加后台管理, 访问路径：`/login` | `/admin/dashboard` | `/admin/clouddrive`
- 后台可以增加自己的网盘资源

### 🔥视频介绍

[观看视频](https://r2music.kkpans.com/aipannetdisk-intro.mp4)

---- 
<video src="https://r2music.kkpans.com/aipannetdisk-intro.mp4" controls ></video>

### 建议
项目使用的是第三方的API，对ip有访问限制，建议自己部署使用。

## 快速开始

### 在 Vercel 上部署

`手动安装一样的，只需要配置对应的env就行了`

[之前部署过的，一定查看此文档](/README_VERCEL.md)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/unilei/aipan-netdisk-search.git&project-name=aipan-netdisk-search&repository-name=aipan-netdisk-search)

### 在 Vercel 上手动部署 操作方法

```bash

1. fork 本项目
2. 在 [Vercel] 官网点击 [New Project]
3. 点击 [Import Git Repository] 并选择你 fork 的此项目并点击 [import]
4. 然后直接点 [Deploy] 接着等部署完成即可

```

### Docker执行

#### docker cli

##### 编译

```bash

docker build \
  --build-arg ADMIN_USER=your_admin_user \
  --build-arg ADMIN_PASSWORD=your_admin_password \
  --build-arg ADMIN_EMAIL=your_admin_email \
  --build-arg JWT_SECRET=your_jwt_secret \
  --build-arg DATABASE_URL=your_database_url \
  -t unilei/aipan-netdisk-search:latest .
```

### 这是个例子

``` bash

docker build \
  --build-arg ADMIN_USER="aipan" \
  --build-arg ADMIN_PASSWORD="aipan123" \
  --build-arg ADMIN_EMAIL="aipan@email.com" \
  --build-arg JWT_SECRET='aipannetdisk' \
  --build-arg DATABASE_SCHEMA="你创建的schema" \
  --build-arg DATABASE_URL="postgresql://数据库用户名:数据库密码@你的服务器ip:5432/数据库名字?schema=你创建的schema&pgbouncer=true&connect_timeout=15" \
  -t unilei/aipan-netdisk-search:latest .

```

##### 运行

```bash
docker run -p 3000:3000 unilei/aipan-netdisk-search:latest
```
##### 停止

```bash
docker stop unilei/aipan-netdisk-search:latest
```

#### Docker-compose

##### 编译

```bash
docker compose build
```
##### 运行

```bash
docker compose up -d
```

##### 停止

```bash
docker compose down
```

### 1. 克隆项目

```bash
git clone https://github.com/unilei/aipan-netdisk-search.git
```

### 2. 安装依赖
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

### 3. 设置prisma

```bash

npx prisma generate
npx prisma migrate deploy

```
### 3. 运行到浏览器

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

### 4. 在浏览器打开 [http://localhost:3001](http://localhost:3001)

![success_deploy.jpg](/assets/readme/screen-1.png)
![success_deploy.jpg](/assets/readme/screen-2.png)
![success_deploy.jpg](/assets/readme/screen-3.png)
![success_deploy.jpg](/assets/readme/screen-4.png)

#### 如何部署到自己服务器？ NUXT.JS 打包部署文档

[部署文档](https://nuxt.com/docs/getting-started/deployment)

### 打赏

![打赏](/assets/donation/wechat_pay.jpg)

### 交流

![交流](/assets/readme/wechat.jpg)
