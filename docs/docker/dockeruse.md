## docker run

```bash
docker run node node -v
```

::: tip
各个参数解析：

docker: Docker 的二进制执行文件。

run: 与前面的 docker 组合来运行一个容器。

node 指定要运行的镜像，Docker 首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。

node -v: 在启动的容器里执行的命令
:::

## docker run -i -t

```bash
docker run -i -t node /bin/bash
```

::: tip
各个参数解析：

-t: 在新容器内指定一个伪终端或终端。

-i: 允许你对容器内的标准输入 (STDIN) 进行交互。

/bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。
:::