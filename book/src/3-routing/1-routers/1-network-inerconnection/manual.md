# Инструкции

## Предварительная подготовка лабораторного окружения

1. Запустить виртуальную машину **AstraLinuxCN-GNS3**
2. Запустить прилагаемый проект в среде симуляции сети **GNS3**

Для запуска проекта в **GNS3** необходимо:

- [↓ Загрузить файл проекта network-interconnection.gns3project](./network-interconnection.gns3project){download}
- Скопировать файл проекта `network-interconnection.gns3project` в виртуальную машину
- Импортировать файл `network-interconnection.gns3project` в GNS3
- Запустить все узлы проекта


## Настройка устройств компьютерной сети

### Настройка маршрутизатора R1

Известно, что маршрутизатор находится в конфигурации по умолчанию.

#### Шаг 1. Определить текущую конфигурацию маршрутизатора R1

На этом шаге необходимо уяснить название, состояние и существующую IP-конфигурацию сетевых интерфейсов маршрутизатора.
Это возможно сделать при помощи известной команды:

```sh
R1#show ip interface brief
```
::: details Результат выполнения команды
```sh
Interface                  IP-Address      OK? Method Status                Protocol
Ethernet0/0                unassigned      YES NVRAM  administratively down down
Ethernet0/1                unassigned      YES NVRAM  administratively down down
Ethernet0/2                unassigned      YES NVRAM  administratively down down
Ethernet0/3                unassigned      YES NVRAM  administratively down down
Ethernet1/0                unassigned      YES NVRAM  administratively down down
Ethernet1/1                unassigned      YES NVRAM  administratively down down
Ethernet1/2                unassigned      YES NVRAM  administratively down down
Ethernet1/3                unassigned      YES NVRAM  administratively down down
Serial2/0                  unassigned      YES NVRAM  administratively down down
Serial2/1                  unassigned      YES NVRAM  administratively down down
Serial2/2                  unassigned      YES NVRAM  administratively down down
Serial2/3                  unassigned      YES NVRAM  administratively down down
Serial3/0                  unassigned      YES NVRAM  administratively down down
Serial3/1                  unassigned      YES NVRAM  administratively down down
Serial3/2                  unassigned      YES NVRAM  administratively down down
Serial3/3                  unassigned      YES NVRAM  administratively down down
```
:::

::: info Вывод
В текущей конфигурации (т.е. в конфигурации по умолчанию) маршрутизатор **R1**:
- не имеет IP-конфигурации на интерфейсах
- все интерфейсы административно выключены
:::

Таким образом, для выполнения задачи по настройке маршрутизатора R1 необходимо:

1. Для интерфейса `Ethernet 0/0`:
    - указать IP-адрес `192.168.1.254` с маской подсети `255.255.255.0`
    - включить интерфейс
2. Для интерфейса `Ethernet 0/1` (аналогично):
    - указать IP-адрес `192.168.2.254` с маской подсети `255.255.255.0`
    - включить интерфейс

#### Шаг 2. Настроить интерфейс `Ethernet 0/0`

Для настройки интерфейса `Ethernet 0/0` необходимо выполнить следующие команды:

```sh
R1#configure terminal
R1(config)#interface Ethernet 0/0
R1(config-if)#ip address 192.168.1.254 255.255.255.0
R1(config-if)#no shutdown
R1(config-if)#exit
```

Результат возможно проверить выполнив уже упомянутую команду: 

```sh
R1(config)#do show ip interface brief
```

::: details Результат выполнения команды
```sh
Interface                  IP-Address      OK? Method Status                Protocol
# [!code focus]
Ethernet0/0                192.168.1.254   YES manual up                    up
Ethernet0/1                unassigned      YES NVRAM  administratively down down
Ethernet0/2                unassigned      YES NVRAM  administratively down down
Ethernet0/3                unassigned      YES NVRAM  administratively down down
Ethernet1/0                unassigned      YES NVRAM  administratively down down
Ethernet1/1                unassigned      YES NVRAM  administratively down down
Ethernet1/2                unassigned      YES NVRAM  administratively down down
Ethernet1/3                unassigned      YES NVRAM  administratively down down
Serial2/0                  unassigned      YES NVRAM  administratively down down
Serial2/1                  unassigned      YES NVRAM  administratively down down
Serial2/2                  unassigned      YES NVRAM  administratively down down
Serial2/3                  unassigned      YES NVRAM  administratively down down
Serial3/0                  unassigned      YES NVRAM  administratively down down
Serial3/1                  unassigned      YES NVRAM  administratively down down
Serial3/2                  unassigned      YES NVRAM  administratively down down
Serial3/3                  unassigned      YES NVRAM  administratively down down
```
:::

#### Шаг 3. Настроить интерфейс `Ethernet 0/1`

Самостоятельно выполните настройку интерфейса `Ethernet 0/1` в соответствии с заданием.

<!--
::: details 
```sh
R1(config)#interface Ethernet 0/1
R1(config-if)#ip address 192.168.2.254 255.25
R1(config-if)#no shutdown
R1(config-if)#end
```
:::
-->

#### Шаг 4. Проверить результат выполненной настройки

Выполните команду отображения IP-конфигурации сетевых интерфейсов:

```sh
R1#show ip interface brief
```

::: details Результат выполнения команды
```sh
Interface                  IP-Address      OK? Method Status                Protocol
# [!code focus]
Ethernet0/0                192.168.1.254   YES manual up                    up
# [!code focus]
Ethernet0/1                192.168.2.254   YES manual up                    up
Ethernet0/2                unassigned      YES NVRAM  administratively down down
Ethernet0/3                unassigned      YES NVRAM  administratively down down
Ethernet1/0                unassigned      YES NVRAM  administratively down down
Ethernet1/1                unassigned      YES NVRAM  administratively down down
Ethernet1/2                unassigned      YES NVRAM  administratively down down
Ethernet1/3                unassigned      YES NVRAM  administratively down down
Serial2/0                  unassigned      YES NVRAM  administratively down down
Serial2/1                  unassigned      YES NVRAM  administratively down down
Serial2/2                  unassigned      YES NVRAM  administratively down down
Serial2/3                  unassigned      YES NVRAM  administratively down down
Serial3/0                  unassigned      YES NVRAM  administratively down down
Serial3/1                  unassigned      YES NVRAM  administratively down down
Serial3/2                  unassigned      YES NVRAM  administratively down down
Serial3/3                  unassigned      YES NVRAM  administratively down down
```
:::

Далее выполните команду **отображения таблицы маршрутизации**:

```sh
R1#show ip route
```

::: details Результат выполнения команды
```sh
Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
       ia - IS-IS inter area, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP
       a - application route
       + - replicated route, % - next hop override, p - overrides from PfR

Gateway of last resort is not set

      192.168.1.0/24 is variably subnetted, 2 subnets, 2 masks
C        192.168.1.0/24 is directly connected, Ethernet0/0
L        192.168.1.254/32 is directly connected, Ethernet0/0
      192.168.2.0/24 is variably subnetted, 2 subnets, 2 masks
C        192.168.2.0/24 is directly connected, Ethernet0/1
L        192.168.2.254/32 is directly connected, Ethernet0/1
```
:::

::: info Вывод
После конфигурирования IP-адресов на интерфейсах в таблице маршрутизации автоматически появляются **маршруты прямого подключения** (directly connected routes) к следующим сетям:
- `192.168.1.0/24 is directly connected, Ethernet0/0`
- `192.168.2.0/24 is directly connected, Ethernet0/1`

С этого момента маршрутизатор выполняет **межсетевую маршрутизацию** самостоятельно.
:::

### Настройка оконечных устройств

::: warning Предупреждение
В этом разделе показана **заведомо неполная** конфигурация хоста Linux.  
Вначале будут заданы **только IP-адрес и маска подсети**, но не будет указан **шлюз по умолчанию**.

Такое состояние используется специально, чтобы продемонстрировать последствия типичной ошибки (`Network is unreachable` и т.п.).
:::

#### Шаг 1. Определить текущую конфигурацию хоста PC1

На этом шаге необходимо определить название, состояние и существующую IP-конфигурацию сетевых интерфейсов хоста.
Это возможно сделать при помощи известной команды:

```sh
root@PC1:~# ip address show
```

::: details Результат выполнения команды
```sh
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
5: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 1000
    link/ether da:8e:1c:18:5d:46 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::d88e:1cff:fe18:5d46/64 scope link
       valid_lft forever preferred_lft forever
```
:::

::: info Вывод
В текущей конфигурации **PC1**:
- имеет сетевой интерфейс `eth0` в административном состоянии &ndash; **включен** (`<BROADCAST,MULTICAST,UP,LOWER_UP>`)
- сетевой интерфейс `eth0` не имеет IP-конфигурации
:::

#### Шаг 2. Указать IP-адрес и маску подсети на интерфейсе `eth0` хоста PC1

Укажите IP-адрес и маску подсети при помощи следующей команды:

```sh
root@PC1:~# ip address add dev eth0 192.168.1.1/24
```

#### Шаг 3. Определить текущую конфигурацию хоста PC2

Самостоятельно определите название, состояние и существующую IP-конфигурацию сетевых интерфейсов хоста **PC2** известным способом.

#### Шаг 4. Указать IP-адрес и маску подсети на интерфейсе `eth0` хоста PC2

Самостоятельно выполните команды для настройки IP-адреса и маски подсети на **PC2** в соответствии с заданием.

<!-- ```sh
root@PC2:~# ip address add dev eth0 192.168.2.1/24
``` -->

#### Шаг 5. Диагностика неисправностей в компьютерной сети

Для проверки связи между **PC1** и **PC2** воспользуйтесь утилитой `ping` выполнив на **PC1** следующую команду:

```sh
root@PC1:~# ping 192.168.2.1
```
::: details Результат выполнения команды
```sh
ping: connect: Network is unreachable
```
:::

Попытка передачи между **PC1** и **PC2** завершается ошибкой **Сеть недостижима** (`Network is unreachable`).
Для определения выявления неисправностей далее будут выполнены команды диагностика.

Выполните команду проверки доступности IP-адреса интерфейса `Ethernet 0/0` маршрутизатора **R1**:

```sh
root@PC1:~# ping 192.168.1.254 -c 3
PING 192.168.1.254 (192.168.1.254) 56(84) bytes of data.
64 bytes from 192.168.1.254: icmp_seq=1 ttl=255 time=0.895 ms
64 bytes from 192.168.1.254: icmp_seq=2 ttl=255 time=0.407 ms
64 bytes from 192.168.1.254: icmp_seq=3 ttl=255 time=0.439 ms

--- 192.168.1.254 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2015ms
rtt min/avg/max/mdev = 0.407/0.580/0.895/0.222 ms
```

Связь между **PC1** и **R1** есть.

Теперь выполните команду для отображения таблицы маршрутизации на хосте **PC1**:

```sh
root@PC1:~# ip route show
```
::: details Результат выполнения команды
```sh
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.1
```
:::

Обратите внимание, что сейчас на хосте **PC1** существует единственный маршрут для **локальной подсети**  `192.168.1.0/24`.
Для связи хоста с устройствами в других подсетях необходимо задать **маршрут по умолчанию**.

#### Шаг 6. Указать маршрут по умолчанию для хоста PC1

Для настройки маршрута по умолчанию необходимо указать IP-адреса шлюза.
В роли шлюза выступает маршрутизатор **R1**.
Таким образом необходимо указать IP-адреса интерфейса к которому присоеденина локальная сеть хоста (т.е. интерфейс `Ethernet 0/0` с IP-адресом `192.168.1.254`).
Выполните следующую команду для настройки маршрута по умолчанию через `192.168.1.254`:

```sh
root@PC1:~# ip route add default via 192.168.1.254
```

Затем выполните команду для отображения таблицы маршрутизации на хосте **PC1**:

```sh
root@PC1:~# ip route show
```
::: details Результат выполнения команды
```sh
# [!code focus]
default via 192.168.1.254 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.1
```
:::

Теперь на хосте **PC1** существует маршрут по умолчанию `default via 192.168.1.254 dev eth0` по которому будут отправлять пакеты в другие подсети.

#### Шаг 7. Повторная диагностика неисправностей в компьютерной сети

Повторите проверку связи между **PC1** и **PC2** при помощи утилиты `ping` выполнив на **PC1**:

```sh
root@PC1:~# ping 192.168.2.1
```
::: details Результат выполнения команды
```sh
PING 192.168.2.1 (192.168.2.1) 56(84) bytes of data.

--- 192.168.2.1 ping statistics ---
3 packets transmitted, 0 received, 100% packet loss, time 2032ms
```
:::

Связи между **PC1** и **PC2** нет как и прежде. Но теперь изменился "синдром неисправности".
**PC1** действительно отправляет ICMP-пакеты, но ответы не приходят.

::: info Вопрос
*До какого узла доходит ICMP-пакет сейчас?*
:::

Выполните команду проверки доступности IP-адреса интерфейса `Ethernet 0/1` маршрутизатора **R1**,
таким образом можно убедиться что маршрутизатор действительно передает пакеты от **PC1** в другую подсеть:

```sh
root@PC1:~# ping 192.168.2.254 -c 3
```
::: details  Результат выполнения команды
```sh
PING 192.168.2.254 (192.168.2.254) 56(84) bytes of data.
64 bytes from 192.168.2.254: icmp_seq=1 ttl=255 time=0.427 ms
64 bytes from 192.168.2.254: icmp_seq=2 ttl=255 time=0.472 ms
64 bytes from 192.168.2.254: icmp_seq=3 ttl=255 time=0.436 ms

--- 192.168.2.254 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2031ms
rtt min/avg/max/mdev = 0.427/0.445/0.472/0.019 ms
```
:::

Проверка связи выполнена успешно.
Таким образом маршрутизатор **R1** производит передачу пакетов из подсети `192.168.1.0/24` в `192.168.2.0/24`.

Отобразите сетевой трафик на хосте **PC2**, который проходит через интерфейс `eth0`.
Для этого воспользуйтесь утилитой `tcpdump` и выполните следующую команду:

```sh
root@PC2:~# tcpdump -i any
```

Теперь на **PC1** отправьте ICMP-запрос выполнив `ping 192.168.2.1 -c 1`.
После этого в консоле **PC2** должен быть вывод перехваченного пакета:

```sh
root@PC2:~# tcpdump -i any 
tcpdump: data link type LINUX_SLL2
tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
listening on any, link-type LINUX_SLL2 (Linux cooked v2), snapshot length 262144 bytes
# [!code focus]
10:49:42.570301 eth0  In  IP 192.168.1.1 > 192.168.2.1: ICMP echo request, id 60665, seq 1, length 64
```

В результате ICMP-запросы доходят до **PC2**, но так как на хосте не указан шлюз по умолчанию ICMP-ответ не отправляется.
Таким образом неиспраность локализована на хосте **PC2**.

#### Шаг 6. Указать маршрут по умолчанию для хоста PC2

Самостоятельно укажите маршурт по умолчанию для хоста **PC2** в соответствии с заданием.

<!-- root@PC2:~# ip route add default via 192.168.2.254 -->

## Определение технического состояния компьютерной сети

Проверьте связь между **PC1** и **PC2** при помощи утилиты `ping` выполнив на **PC1**:

```sh
root@PC2:~# ping 192.168.1.1 -c 3
PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.
64 bytes from 192.168.1.1: icmp_seq=1 ttl=63 time=0.814 ms
64 bytes from 192.168.1.1: icmp_seq=2 ttl=63 time=0.512 ms
64 bytes from 192.168.1.1: icmp_seq=3 ttl=63 time=0.591 ms

--- 192.168.1.1 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2055ms
rtt min/avg/max/mdev = 0.512/0.639/0.814/0.127 ms
```

Проверка успешно пройдена.

Кроме утилиты `ping` для проверки доступности узла, часто применяется утилита `traceroute`, которая позволяет отобразить маршрут прохождения трафика до указанного узла.
Выполните ее на **PC1**:

```sh
root@PC1:~# traceroute 192.168.2.1
traceroute to 192.168.2.1 (192.168.2.1), 30 hops max, 60 byte packets
 1  192.168.1.254 (192.168.1.254)  0.733 ms  0.723 ms  0.716 ms
 2  192.168.2.1 (192.168.2.1)  0.745 ms  0.741 ms  0.735 ms
```

В результате вы наблюдаете промежуточной узел **R1** `192.168.1.254` (его называют **хоп** от англ. **hop** &ndash; **скачок**), который находится по маршруту следования пакетов.

::: details Выводы
Сегмент сети находится в исправном состоянии.
Между подсетями `192.168.1.0/24` и `192.168.2.0/24` настроена прямая маршутизация.
Хосты **PC1** и **PC2** имеют сетевую доступность между собой.
:::

## Эксперимент. Cломаный `traceroute`

Проведите эксперимент со следующим вопросом. Каков будет результат команды `traceroute 192.168.2.1` если на **PC2** удалить маршрут по умолчанию?

Удалим маршрут по умолчанию на **PC2** при помощи следующей команды:

```sh
root@PC2:~# ip route del default
```

После выполните на **PC1** команду `traceroute 192.168.2.1`.

::: details Результат выполнения команды
```sh
root@PC1:~# traceroute 192.168.2.1
traceroute to 192.168.2.1 (192.168.2.1), 30 hops max, 60 byte packets
 1  192.168.1.254 (192.168.1.254)  0.579 ms  0.590 ms  0.589 ms
 2  * * *
 3  * * *
 4  * * *
 5  * * *
 6  * * *
 7  * * *
 8  * * *
 9  * * *
10  * * *
11  * * *
12  * * *
13  * * *
14  * * *
15  * * *
16  * * *
17  * * *
18  * * *
19  * * *
20  * * *
21  * * *
22  * * *
23  * * *
24  * * *
25  * * *
26  * * *
27  * * *
28  * * *
29  * * *
30  * * *
```
:::

В результате вы наблюдаете, что запрос доходит до хопа **R1** и после чего теряется.
Это также позволяет локализовать неисправность.

## Эксперимент. Ошибка `Destination Host Unreachable`

На хосте **PC1** выполните `ping` IP-адреса из несуществующей сети, например `192.168.66.6`.
Команда следующая:

```sh
root@PC1:~# ping 192.168.66.6 -c 3
PING 192.168.66.6 (192.168.66.6) 56(84) bytes of data.
From 192.168.1.254 icmp_seq=1 Destination Host Unreachable
From 192.168.1.254 icmp_seq=2 Destination Host Unreachable
From 192.168.1.254 icmp_seq=3 Destination Host Unreachable

--- 192.168.66.6 ping statistics ---
3 packets transmitted, 0 received, +3 errors, 100% packet loss, time 2056ms
```

В результате получена ошибка &ndash **Хост назначения недостежим** (`Destination Host Unreachable`).

Теперь аналогично воспользуйтесь `traceroute` до хоста из несуществующей сети.
Команда следующая:

```sh
root@PC1:~# traceroute 192.168.66.6     
traceroute to 192.168.66.6 (192.168.66.6), 30 hops max, 60 byte packets
 1  192.168.1.254 (192.168.1.254)  0.717 ms  0.686 ms  0.670 ms
 2  192.168.1.254 (192.168.1.254)  0.653 ms !H  0.629 ms !H  0.616 ms !H
```

Этот вывод показывает, что пакеты столкнулись с проблемой на первом же узле (шлюзе), который не знает, куда отправлять данные дальше.
Вот подробная расшифровка:

- Первый хоп (`192.168.1.254`): Пакет успешно дошел до вашего роутера или ближайшего шлюза.
- Второй хоп (дублирование `192.168.1.254`): говорит о том, что этот узел сразу вернул ICMP-сообщение об ошибке типа 3 (`Destination Unreachable`) обратно отправителю.
    
Флаг `!H` означает `хост недоступен` (`Host Unreachable`). Маршрутизатор просмотрел свою таблицу маршрутизации, не нашел там пути к сети `192.168.66.0/24`, после чего вернул  ICMP-сообщение об ошибке типа 3.
