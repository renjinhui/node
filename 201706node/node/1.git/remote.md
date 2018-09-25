## 提交代码到github上
- 先在github上创建远程仓库
- 初始化git仓库
- 添加readme文件
- 添加忽略文件.gitignore 这个文件需要上传(先创建忽略文件在添加缓存区)
- 空文件夹不会被提交（想提交并且还是空的）添加.gitkeep
- 添加暂存区->添加到历史区-> 添加一个远程地址 ->提交到github上
```
git add .
git commit -m ''
git remote add origin 地址
git push origin master
```
## 查看远程仓库
```
git remote -v
```

## 删除远程地址
```
git remote rm origin
```



## 使用git发布静态网站
- 需要创建一个固定的分支（gh-pages）将我们的代码传到这个特定的分支上
```
git checkout -b gh-pages
git add .
git commit -m 'static'
git push origin gh-pages
```

> 推送成功后 在当前项目下有个按钮settings中可以找到，对应的网址；


## 如果线上代码和线下代码不一致
- 先让你将代码拉取到本地，合并后再提交
```
git pull origin master
修改冲突
git push origin master
```

>
