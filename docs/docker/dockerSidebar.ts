export const dockerSidebar = {
  "/docker/": [
    {
      text: "docker学习",
      children: [
        {
          text: '参考资料',
          link: "/docker/index.md"
        },
        {
          text: '为什么使用docker',
          link: 'https://www.php.cn/docker/486801.html'
        },
        {
          text: 'docker命令',
          collapsible: true,
          children: [
            {
              text: 'run',
              link: '/docker/dockercommand.md'
            },
            {
              text: 'ps',
              link: '/docker/dockercommand.md'
            },
            {
              text: 'logs',
              link: '/docker/dockercommand.md'
            },
            {
              text: 'stop',
              link: '/docker/dockercommand.md'
            }
          ],
        },
        {
          text: 'Dockerfile编写',
          link: "/docker/dockerfile/index.md"
        },
      ],
    },
  ],
};
