## USC-WEB

### 文件结构简要说明

* package （子项目目录

  * config （子项目公共配置
  * utils （子项目工具集
  * web （web项目 本次开发的项目目录
  * （其他项目
* commitlint.config.js （commitlint、cz-git配置
* package.json （项目描述文件
* pnpm-lock.yaml （依赖锁文件
* pnpm-workspace.yaml （pnpm workspace配置

### 开发工具及环境

1. 编辑器 VS Code (必需的插件 ESlint、Git CZ Emoji

    ```bash
    // .vscode/settings.json
    {
      "prettier.enable": false, // 未安装则删除此项
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
    }
    ```
2. Node 版本 ^16 或 ^18
3. 包管理器 pnpm ^6 或 ^7

### 启动项目

确认node及pnpm版本后，在项目根目录执行命令

```bash
## 安装依赖
pnpm i
## 启动子项目的dev脚本，成功后会打开浏览器
pnpm dev
```

### 约束

为了增强项目的可维护性，有一些限制

1. 限制了包管理， 使用 pnpm 作为包管理器

    ```bash
    npm i -g pnpm
    ```
2. 限制了commit的方式，通过以下方式可以完成commit

    1. 安装 Git CZ Emoji， 在VS Code 源代码管理处提交
    ![image-20220616170045-bropuyr.png](https://s2.loli.net/2022/06/16/GPjmCyRx2oDkV1Y.png)

       

    2. 安装 `commitizen` 在项目目录使用 `cz` 命令提交

        ```bash
        npm i -g commitizen
        ```
        ![image-20220616170400-fsx4onj.png](https://s2.loli.net/2022/06/16/Tphgq9Cimdk3ZHR.png)