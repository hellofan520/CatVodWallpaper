// ============ 图片 URL 列表（自行在此添加/删减） ============
const IMAGES = [
  "https://pic1.imgdb.cn/i/034uYOrBM7ExFA53y5MGLf.jpg",
  "https://pic1.imgdb.cn/i/034uYOqmIuMox0eprtjHF1.jpg",
  "https://pic1.imgdb.cn/i/034uYOJv4AT22RJukxqdW3.jpg",
  "https://pic1.imgdb.cn/i/034uYOJpu2bYKWLurlajWk.jpg",
  "https://pic1.imgdb.cn/i/034uYOJcjut57RNyzAA9Jw.jpg",
  "https://pic1.imgdb.cn/i/034uYOHPOYQT9wyYUXnqtn.jpg",
  "https://pic1.imgdb.cn/i/034uYOGlobfA5VS5cosoO1.jpg",
  "https://pic1.imgdb.cn/i/034uYNha7A0ao5MERYQ92a.jpg",
  "https://pic1.imgdb.cn/i/034uYNeoM3IYuVVSls3l9g.jpg",
  "https://pic1.imgdb.cn/i/034uYNdF4TDzKQpw1VdBAb.jpg",
  "https://pic1.imgdb.cn/i/034uYNcacEaM5TCjJeWRxa.jpg",
  "https://pic1.imgdb.cn/i/034uYNcH1TvoZxwvV0wxRo.jpg",
  "https://pic1.imgdb.cn/i/034uYNZLVkYIsMaygHiZSR.jpg",
  "https://pic1.imgdb.cn/i/034uYN6OnvOUQXv1nsKwEy.jpg",
  "https://pic1.imgdb.cn/i/034uYN4Ifd1HrtBGLFXSPT.jpg",
  "https://pic1.imgdb.cn/i/034uYN3xcIlPWYMn2vgwEU.jpg",
  "https://pic1.imgdb.cn/i/034uYN3fa083TYJNG9PAXA.jpg",
  "https://pic1.imgdb.cn/i/034uYN2pKlSakGLvLl9adB.jpg",
  "https://pic1.imgdb.cn/i/034uYMyYxtEf4TYTYIMj2M.jpg",
  "https://pic1.imgdb.cn/i/034uYM2Z7apo0eVsiN0L53.jpg",
  "https://pic1.imgdb.cn/i/034uYM1iTkv3Qmi5ySnBmk.jpg",
  "https://pic1.imgdb.cn/i/034uYLyqg9NYyNuSN10xz2.jpg",
  "https://pic1.imgdb.cn/i/034uYLu4QovTjRsbulA7Mm.jpg",
  "https://pic1.imgdb.cn/i/034uYLrTOXO003OvZsPzyn.jpg",
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