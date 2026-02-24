# Инструкции

## Предварительная подготовка лабораторного окружения

1. Запустить виртуальную машину **AstraLinuxCN-GNS3**
2. Запустить прилагаемый проект в среде симуляции сети **GNS3**

Для запуска проекта в **GNS3** необходимо:

- [↓ Загрузить файл проекта network-interconnection.gns3project](./network-interconnection.gns3project){download}
- Скопировать файл проекта `network-interconnection.gns3project` в виртуальную машину
- Импоритировать файл `network-interconnection.gns3project` в GNS3
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

Выполните команду:

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

На этом шаге необходимо уяснить название, состояние и существующую IP-конфигурацию сетевых интерфейсов хоста.
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


#### Шаг 4. Указать IP-адрес и маску подсети на интерфейсе `eth0` хоста PC2

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

::: info 
Связи между **PC1** и **PC2** нет. 
:::

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

```sh
root@PC1:~# ip route show
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.1
```

```sh
root@PC1:~# ip route add default via 192.168.1.254
```

```sh
root@PC1:~# ip route show
default via 192.168.1.254 dev eth0
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.1
```

```sh
root@PC1:~# ping 192.168.2.1 -c 3
PING 192.168.2.1 (192.168.2.1) 56(84) bytes of data.

--- 192.168.2.1 ping statistics ---
3 packets transmitted, 0 received, 100% packet loss, time 2032ms
```

```sh
root@PC1:~# ping 192.168.2.254 -c 3
PING 192.168.2.254 (192.168.2.254) 56(84) bytes of data.
64 bytes from 192.168.2.254: icmp_seq=1 ttl=255 time=0.427 ms
64 bytes from 192.168.2.254: icmp_seq=2 ttl=255 time=0.472 ms
64 bytes from 192.168.2.254: icmp_seq=3 ttl=255 time=0.436 ms

--- 192.168.2.254 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2031ms
rtt min/avg/max/mdev = 0.427/0.445/0.472/0.019 ms
```

До куда доходит пакет?


root@PC2:~# ip route add default via 192.168.2.254

root@PC2:~# ping 192.168.1.1 -c 3
PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.
64 bytes from 192.168.1.1: icmp_seq=1 ttl=63 time=0.814 ms
64 bytes from 192.168.1.1: icmp_seq=2 ttl=63 time=0.512 ms
64 bytes from 192.168.1.1: icmp_seq=3 ttl=63 time=0.591 ms

--- 192.168.1.1 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2055ms
rtt min/avg/max/mdev = 0.512/0.639/0.814/0.127 ms





## Определение технического состояния компьютерной сети

root@PC1:~# traceroute 192.168.1.254
traceroute to 192.168.1.254 (192.168.1.254), 30 hops max, 60 byte packets
 1  192.168.1.254 (192.168.1.254)  0.467 ms  0.530 ms  0.524 ms
root@PC1:~# traceroute 192.168.2.254
traceroute to 192.168.2.254 (192.168.2.254), 30 hops max, 60 byte packets
 1  192.168.1.254 (192.168.1.254)  0.629 ms  0.619 ms  0.611 ms
root@PC1:~# traceroute 192.168.2.1
traceroute to 192.168.2.1 (192.168.2.1), 30 hops max, 60 byte packets
 1  192.168.1.254 (192.168.1.254)  0.733 ms  0.723 ms  0.716 ms
 2  192.168.2.1 (192.168.2.1)  0.745 ms  0.741 ms  0.735 ms


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


R1#write memory
