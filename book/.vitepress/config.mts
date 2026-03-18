import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "./src",
  title: "🕸️ практикум",
  description: "Практикум по компьютерным сетям",
  themeConfig: {
    outline: "deep",

    sidebar: [
      { text: "Главная страница", link: "/" },
      // {
      //   text: "Т1 – Основы сетей",
      //   collapsed: false,
      //   link: "/1-basics",
      //   items: [
      //     {
      //       text: "Симулятор GNS3",
      //       collapsed: true,
      //       items: [
      //         {
      //           text: "Задание &ndash; Сеть хост-хост",
      //           link: "/1-basics/gns3/host-to-host-network-iproute2",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // { text: "Т2 – Коммутация" },
      {
        text: "Т3 – Маршрутизация",
        collapsed: false,
        link: "/3-routing",
        items: [
          {
            text: "Т3.1 – Основы маршрутизации",
            link: "/3-routing/1-routers/",
            collapsed: true,
            items: [
              {
                text: "🎯 1 – Объединение сетей маршрутизатором",
                link: "/3-routing/1-routers/1-network-inerconnection/",
                collapsed: true,
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
                link: "/3-routing/1-routers/2-static-routing/",
                collapsed: true,
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
              {
                text: "🎯 3 – Роутер на палочке",
                link: "/3-routing/1-routers/3-roas/",
                collapsed: true,
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/1-routers/3-roas/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/1-routers/3-roas/key-takeaways",
                  },
                ],
              },
              {
                text: "🎯 4 – Коммутируемые виртуальные интерфейсы",
                link: "/3-routing/1-routers/4-svi/",
                collapsed: true,
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/1-routers/4-svi/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/1-routers/4-svi/key-takeaways",
                  },
                ],
              },
              {
                text: "🎯 5 – Маршрутизируемый порт",
                link: "/3-routing/1-routers/5-routed-port/",
                collapsed: true,
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/1-routers/5-routed-port/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/1-routers/5-routed-port/key-takeaways",
                  },
                ],
              },
              {
                text: "🎯 6 – Администрирование корпоративной сети Comb",
                link: "/3-routing/1-routers/6-comb-static-routing/",
                collapsed: true,
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/1-routers/6-comb-static-routing/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/1-routers/6-comb-static-routing/key-takeaways",
                  },
                ],
              },
            ],
          },
          {
            text: "Т3.2 – Динамическая маршрутизация",
            collapsed: true,
            items: [
              {
                text: "🎯 1 – OSPF для одной области",
                link: "/3-routing/2-dynamic-routing/1-single-area-ospf/",
                collapsed: true,
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/2-dynamic-routing/1-single-area-ospf/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/2-dynamic-routing/1-single-area-ospf/key-takeaways",
                  },
                ],
              },
              {
                text: "🎯 2 – Администрирование корпоративной сети Либра",
                link: "/3-routing/2-dynamic-routing/2-libra-dynamic-routing/",
                collapsed: true,
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/2-dynamic-routing/2-libra-dynamic-routing/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/2-dynamic-routing/2-libra-dynamic-routing/key-takeaways",
                  },
                ],
              },
              {
                text: "🎯 3 – OSPF для нескольких областей",
                link: "/3-routing/2-dynamic-routing/3-multi-area-ospf/",
                collapsed: true,
                items: [
                  {
                    text: "Инструкции",
                    link: "/3-routing/2-dynamic-routing/3-multi-area-ospf/manual",
                  },
                  {
                    text: "Выводы",
                    link: "/3-routing/2-dynamic-routing/3-multi-area-ospf/key-takeaways",
                  },
                ],
              },
            ]
          }
        ],
      },
    ],
  },
});
