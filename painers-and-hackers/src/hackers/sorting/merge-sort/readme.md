# 归并排序

三个臭皮匠顶个诸葛亮。

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/merge-sort/1.png?sign=70739d7751baa48c8c57a576d7167de5&t=1599215478)

## 引言

俗话说的好：“三个臭皮匠顶个诸葛亮”，可见人多力量大的道理。

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/merge-sort/4.png?sign=e79ece63693e29fef70656f3944fccd5&t=1599215548)

的确，很多问题如果把它分成很多相似的、彼此不相关的部分，然后同时分别处理这些部分，最后再把所有的结果整合，可以很大提高做事的效率。

在计算机算法里，上面的这种思维被称为“分而治之”，下面我就通过一种效率很高的排序算法来介绍这种思想：归并排序。

## 介绍

给一系列数排序，在生活中再常见不过了，很多排序算法里都需要几乎将所有数两两比较，所以效率并不高。

归并排序就是把需要排序的数不断分组，只将组间的数两两比较，组内的数不用两两比较，大大提高率了比较的效率。

下面我们就一起看看算法大概的思路。

## 大概思路

归并排序的核心思想是：“分”和“合”。

我们先来看“分”，假如我们现在需要给4、2、8、6、0、1、5、2这8个数排序。我们将这8个数不断分成两部分，直到每组只有1个数。具体的分组过程见下图。

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/merge-sort/2.png?sign=984d3a0f6554c7a50ef737efa1ff08f0&t=1599215488)

“分”之后就该“合”了，“合”的策略如下。

合并的过程是从下到上的，首先我们比较4、2的大小，应为4>2，所以将其合并为[2, 4]替代[4, 2]。同理将8，6合并为[6, 8]。

在合并[2, 4]和[6, 8]的时候会发现它们各自都是有序的，所以它们各自最小的数之间较小的那个数，就应该是新的序列中最小的数。

因为2<4，所以新的序列的第一个数是[2]。

现在[4]和[6, 8]中，4<6，所以新的序列现在为[2, 4]。
因为第一个序列里面已经没有数了，所以直接把第二个序列里的数放入新序列的后面[2, 4, 6, 8]。

就这样不断地从下到上将两个各自有序的序列合并，最后就得到了4、2、8、6、0、1、5、2的排序结果。“合”的过程如下图。

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/merge-sort/3.png?sign=5a1a28365518f09c08ead780f2c2982c&t=1599215509)

## 可视化

可视化的思路也非常的简单，把整张图片分成一个个的小格子。

每一排的小格子对应在排序过程中当前时刻这组数的顺序，也就是说第一排格子对应的数是乱序的，最后一排的格子对应的数是有序的。然后每一排的每一个格子，对应一个数，这个数越小，该格子的就越透明。

下面就是用归并排序排序的过程。

![alt text](https://7765-wechatcloud-79m2p-1259642785.tcb.qcloud.la/algorithms/sorting/merge-sort/1.gif?sign=7a029a4f31e3017efd62239c8407f5da&t=1599215522)

可以清晰地看出数的分组，并且每组内是有序的（透明度从左到右依次减少），并且组数越来越少，最后所有数都有了正确的顺序。