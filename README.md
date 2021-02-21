### Node LTS 查看工具

#### install

```
npm install ltsn-nodejs -g
```

#### command

```
  Usage:
    ltsn [8]

  Options:
    -v, --version             print the version of vc
    -h, --help                display this message

  Examples:
    $ ltsn 8
```

### 关于 Node LTS

Node.js core 在 Node.js 与 io.js 合并后，为了保证发布稳定有序，让开发者能够合理安排升级，开始使用 LTS（Long Term Support）来规划发布周期。第一个 LTS 版本是v4，发布于 2015 年 10 月。在这个规划下，Node.js 的版本相当于 master 分支在特定时间下经过稳定化处理的快照，时间到了就将master分支上稳定的部分整合起来，发布新的版本，因此 Node.js 的发布是以时间的流逝为准，在保证兼容性靠拢的前提下跳版本。

> 每一个 LTS 都会有一个代号，从元素周期表取元素名，按照字母表排序，挑选出合适的。v4 的代号是 Argon(氩)，v6 的代号是 Boron（硼）


Node维护了着两条发布流程线：奇数版本每年的10月份发布，偶数版本第二年的4月份发布。

当一个奇数版本发布后，最近的一个偶数版本会立即进入LTS维护计划，一直持续18个月（题主提到的LTS Start ）。再之后会有12个月的延长维护期（题主提到的Maintenance Start）。这两个期间可以支持的变更是不一样的：

- LTS期间支持的变更：bug fix，安全问题 fix, 文档更新和与未来新特性兼容问题的更新。
- Maintenanece期间支持的变更： 严重的bug fix，严重的安全问题 fix 或者文档更新。


### 版本术语

- `CURRENT`：最新的 Node.js 版本系列（单数）
- `Active`：正在积极维护和升级的版本系列，包括向后移植非破坏性功能和改进，解决错误以及修补安全漏洞
- `Maintenance`：维护的 LTS 版本系列，直到它的生命周期终止，只会在短时间内收到错误修复和安全补丁
- `LTS`： Long-Term Support 的缩写，代表 Node.js 长期支持的版本（版本号为复数）
- `EOL`：EOL 是 End of Life 的首字母缩写，进入到 EOL 时间线的版本，将不在维护

### 如何选择

#### 生产环境 

测试环境我们可以去尝试一些新特性，做一些实验性的项目，比如可以体验下 ECMAScript 的最新规范、以及 V8 频繁更新带来的性能等，奇数版本会在每年的 10 月份进行发布，但是要注意，奇数版本的维护周期仅有 8 个月，在兼容性方面不会向 LTS 版本那样有所保证，引入生产项目要谨慎

#### 生产环境 

- 基于小版本号升级来说，LTS和Maintenanece版本没有激进的新特性更新，更加适应于生产环境，升级小版本号的回归工作量和风险性会小很多
- 基于主版本号升级来说，LTS和Maintenanece版本维护的生命周期长，不需要经常升级主版本号，而奇数版本则不然，通常半年多就得升级一次主版本号

