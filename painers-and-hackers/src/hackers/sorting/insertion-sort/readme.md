# 插入排序

打牌时候常用的排序算法！

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/insertion-sort/2.png?sign=a781a8ee74210d11ae39e801f65f092c&t=1599215300)

## 引言

打牌可是算是人们很常见的娱乐方式，俗话说的好“小赌怡情，大赌伤身”。

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/insertion-sort/1.jpeg?sign=a5af040d8e25d4c3bf99cfb743e73d0e&t=1599214907)

相信大家都玩过斗地主，当你拿到牌的第一件事除了看看有没有大小王之外，就应该是将手里的牌排序了。

一般来说，大家应该使用的是一种常见的排序方法，在计算机算法里面叫做：插入排序，下面就来给大家介绍一下。

## 介绍

给一组数排序的方法有很多，插入排序绝对不是最快的一个，但是它有一个很大的特点：实时性。

也就是不用把需要排序的数全部获得之后才可是开始排序，我们可以一边排序，一边获得新的数。就像我们在打斗地主的时候，发牌者在发牌的同时，我们已经在给手中的牌排序了。

## 大概思路

插入排序的核心就是“插”。

假如在当前时刻我们手中的牌是有序的，比如：2、3、5、9，现在我拿到了一张4，那么我接下来就是给4在有序的牌中找到一个合适的位置，将其插入，让所有的牌仍然有序。

首先我会将4和9比较，发现9 > 4，于是我接着比，发现5 > 4，于是又将4和3比，终于发现一个比4小的数，于是将4插入3的后面。这个时候我手中的牌：2、3、4、5、9还是有序。

可以发现，在该排序算法中，始终有一个有序的“前缀”：前面那部分有序牌，并且前缀数量会不断增加，直到和所有牌的数量相等，这个时候所有的牌都是有序的了。

## 可视化

可视化的思路也非常的简单，把整张图片分成一个个的小格子。
每一排的小格子对应在排序过程中当前时刻这组数的顺序，也就是说第一排格子对应的数是乱序的，最后一排的格子对应的数是有序的。然后每一排的每一个格子，对应一个数，这个数越小，该格子的就越透明。

下面就是用插入排序的过程。

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/insertion-sort/1.gif?sign=14058676a0f7c955742443f9fe004b55&t=1599214877)

可以很明显的看到上面提到有序的“前缀”，并且这个前缀不断的增加，到了最后一排格子，越向左越透明。
