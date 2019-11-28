api 
https://api.github.com/search/repositories?q=react&sort=stars&order=desc

1. 根据输入框输入的值搜索, 并展示repo相关的名字 描述 点赞数 fork数 语言 评分 ssh url, clone url, 主页, 展示repo owner的名字 头像 类型 博客地址 拥有的repo个数, 主页

name
description
stargazers_count
forks_count
language
score
ssh_url
clone_url
html_url （repo主页）

owner:
login
avatar_url (<img src="">)
类型 type
博客地址 blog
repo个数 public_repos （type为user时无数据）
主页 html_url

1. 进入对应的个人页面并展示：
   2.1 此owner所有的repo
    repo resource api: repos_url (https://api.github.com/users/MatthewWu5/repos)
   
   2.2 关注此owner的所有人
    关注我的resource api: followers_url (https://api.github.com/users/MatthewWu5/followers)
    
    // owner resource api: url


.npmrc
registry=http://10.135.100.243:8081/nexus/repository/npm-group/
disturl=https://npm.taobao.org/dist


