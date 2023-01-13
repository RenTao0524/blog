---
lang: zh-CN
title: RT的个人blog
description: 打卡每天的学习记录
---

:tada:
<!-- [[toc]] -->
## 1. [YAML](./yaml/index.md)
## 2. [docker](./docker/index.md)
## 3. [jenkins](./jenkins/index.md)

## [lerna](./lerna/index.md)
### demo1


## nestjs

## [vue](./vue/index.md)

## mysql

_你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style>
.red-div {
  color: red;
}
</style>
