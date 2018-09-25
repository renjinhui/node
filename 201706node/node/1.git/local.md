## node6周
- 第一周 git node基础
- 第二周 buffer fs http
- 第三周 express框架
- 第四周 mongodb 博客项目
- 第五周 爬虫 聊天室
- 第六周 项目实战课 react + node
- 第七周 做项目 react+ express + mongodb

## svn,cvs,git(速度快，分布式)
- 穿越
- 使用git会在当前目录下产生一个文件.git文件
- 冲突需要手动解决

## svn 和git做对比
- svn 集中式（集中存放）


## 界面化 sourceTree/命令行
- webstorm sublime vscode

## 使用git
- 没有配置过用户，不能提交代码
```
$ git config --list
```
配置使用git的用户
```
$ git config --global user.name <name>
$ git config --global user.email <email>
```

## 创建目录
```
mkdir <filename>
```

## 初始化git仓库
```
git init
```

## 删除文件夹
```
rm -rf .git
```

## 创建文件
```
touch index.txt
```

## 查看文件内容
```
cat index.txt
```



## vi 编辑
```
vi index.txt
i 表示插入
esc+:wq保存并退出
```


## 添加到暂存区
```
git add .
```

## 添加到历史区
```
git commit -m '信息'
```

## 查看提交历史
```
git log --author="根据字段搜索"
```

## 比较三个区的不同
- git diff 比较的是 工作区和暂存区
- git diff --cached 比较的是 暂存区和历史区
- git diff (分支名) 工作区和历史区


## 输出内容到文件中
```
echo world >> index.txt
```

## 回滚工作区
- 用暂存区的覆盖掉工作
```
git checkout <file>
```


## 将暂存区中的内容 回到上一次的暂存区
```
git reset HEAD .
```

## 回滚历史区
- 强制用历史区的版本，覆盖掉工作区和暂存区
```
git reset --hard 版本id
```

## 可以打印所有日志
```
git reflog
```

## git分支管理
- 查看分支
```
git branch 
```
- 创建分支
```
git branch dev
```
- 切换分支
```
git checkout dev
```
- 删除分支
```
git branch -D dev
```
- 创建并切换分支
```
git checkout -b dev
```

## 合并分支
- git merge

## 解决冲突
- 删除所以没用的，留下需要的在次提交

