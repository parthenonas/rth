import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "./src",
  title: "🕸️ практикум",
  description: "Практикум по компьютерным сетям",
  themeConfig: {
    outline: "deep",

    sidebar: [
      { text: "Главная страница", link: "/" },
      {
        text: "Т1 – Основы сетей",
        collapsed: false,
        link: "/1-basics",
        items: [
          {
            text: "Симулятор GNS3",
            collapsed: true,
            items: [
              {
                text: "Задание &ndash; Сеть хост-хост",
                link: "/1-basics/gns3/host-to-host-network-iproute2",
              },
            ],
          },
        ],
      },
      { text: "Т2 – Коммутация" },
      {
        text: "Т3 – Маршрутизация",
        collapsed: false,
        link: "/3-routing",
        items: [
          {
            text: "Т3.1 – Настрока маршрутизаторов",
            collapsed: true,
            items: [
              {
                text: "🎯 1 – Объединение сетей маршрутизатором",
                link: "/3-routing/1-routers/1-network-inerconnection",
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/1-routers/1-network-inerconnection/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/1-routers/1-network-inerconnection/key-takeaways",
                  },
                ],
              },
              {
                text: "🎯 2 – Статическая маршрутизация",
                link: "/3-routing/1-routers/2-static-routing",
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/1-routers/2-static-routing/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/1-routers/2-static-routing/key-takeaways",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
