// ============ 图片 URL 列表（自行在此添加/删减） ============
const IMAGES = [
  "https://pic1.imgdb.cn/i/034tkzvpYyWs2SunXjB87q.jpg",
  "https://pic1.imgdb.cn/i/034tkzrLYP4poGIbSMMeE1.jpg",
  "https://pic1.imgdb.cn/i/034tkzoOsSPp27piCwPDb1.jpg",
  "https://pic1.imgdb.cn/i/034tkzYk4ZZqZ8LmsYZKAO.jpg",
  "https://pic1.imgdb.cn/i/034tkzUi27vtDKfOAg77lc.jpg",
  "https://pic1.imgdb.cn/i/034tkz2jfJJloq4gVg2UoQ.jpg",
  "https://pic1.imgdb.cn/i/034tkygVIjVBdfZvK2RgmV.jpg",
  "https://pic1.imgdb.cn/i/034tkyTlK1G3Ig1XdYAycs.jpg",
  "https://pic1.imgdb.cn/i/034tkyGslP0E0L0qrJTjVk.jpg",
  "https://pic1.imgdb.cn/i/034tky2iN6cD1RKBfBKikC.jpg",
  "https://pic1.imgdb.cn/i/034tDE9VsMksHKHMXLZqsJ.jpg",
  "https://pic1.imgdb.cn/i/034tDE7hHnj3c4ZXhZ8eMq.jpg",
  "https://pic1.imgdb.cn/i/034tDE7UWF9OxbqPismUBx.jpg",
  "https://pic1.imgdb.cn/i/034tDE2CzE3uyjWdBqILRj.jpg",
  "https://pic1.imgdb.cn/i/034tDE1hnJh8hgJE9tzpQ4.jpg",
  "https://pic1.imgdb.cn/i/034tDE03XC7sW6X2PvLNAb.jpg",
  "https://pic1.imgdb.cn/i/034tCxHZEnZpimvVAafNRg.jpg",
];

// 洗牌轮播：牌堆发空了就重新洗一副，一轮内不重复
let deck = [];

export default {
  async fetch() {
    if (IMAGES.length === 0) {
      return new Response("no images configured", { status: 500 });
    }
    if (deck.length === 0) {
      deck = [...IMAGES].sort(() => Math.random() - 0.5);
    }
    return Response.redirect(deck.pop(), 302);
  },
};