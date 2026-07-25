# Level-Constrained Planning — Project Page

这是项目的 GitHub Pages 静态展示页。它不需要安装 Node.js 或任何依赖。

## 添加素材

请按下面的文件名将素材放进对应目录；网页会自动以它们替换占位画面：

```text
assets/
├─ images/
│  ├─ hero.jpg                     # 首屏主图，建议横向 16:10
│  ├─ system-overview.png          # 系统闭环图
│  ├─ experiment-1.jpg             # 无障碍实验图片
│  ├─ experiment-2.jpg             # 多障碍实验图片
│  ├─ video-no-obstacle-cover.jpg  # 视频 1 封面（可选）
│  └─ video-obstacle-cover.jpg     # 视频 2 封面（可选）
├─ videos/
│  ├─ sr5-no-obstacle.mp4
│  └─ sr5-obstacle.mp4
└─ docs/
   └─ technical-report.pdf
```

视频请使用 MP4（H.264 + AAC），推荐每个文件小于 100 MB。若没有对应素材，页面会保留有文件名提示的占位区。

## 发布到 GitHub Pages

1. 将这些文件提交并推送到仓库的 `main` 分支。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 分支选择 `main`，目录选择 `/(root)`，点击 **Save**。
5. 等待约一分钟后，访问：`https://haoyangc2001.github.io/levelConstrainedPlanning/`

网页仓库：<https://github.com/haoyangc2001/level-constrained-planning-page>

项目的算法代码仓库可保持私有；请勿将代码、密钥或非公开实验数据放入本网页仓库。
