// ============ 图片 URL 列表（自行在此添加/删减） ============
const IMAGES = [
  "https://pic1.imgdb.cn/i/034tDE9VsMksHKHMXLZqsJ.jpg",
  "https://pic1.imgdb.cn/i/034tDE7hHnj3c4ZXhZ8eMq.jpg",
  "https://pic1.imgdb.cn/i/034tDE7UWF9OxbqPismUBx.jpg",
  "https://pic1.imgdb.cn/i/034tDE2CzE3uyjWdBqILRj.jpg",
  "https://pic1.imgdb.cn/i/034tDE1hnJh8hgJE9tzpQ4.jpg",
  "https://pic1.imgdb.cn/i/034tDE03XC7sW6X2PvLNAb.jpg",
  "https://pic1.imgdb.cn/i/034tCxUZam8KDc1Tfldysj.jpg",
  "https://pic1.imgdb.cn/i/034tCxHZEnZpimvVAafNRg.jpg",
];

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const format = (url.searchParams.get("format") || "").toLowerCase();

    // 列表为空时的兜底
    if (IMAGES.length === 0) {
      return new Response("no images configured", { status: 500 });
    }

    const pick = IMAGES[Math.floor(Math.random() * IMAGES.length)];

    // 默认 302 重定向：可直接当图片地址用（如影视App的 wallpaper）
    if (format === "" || format === "redirect") {
      return Response.redirect(pick, 302);
    }

    // ?format=text —— 返回纯文本 URL
    if (format === "text") {
      return new Response(pick + "\n", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    // ?format=json —— 返回 JSON
    if (format === "json") {
      return new Response(JSON.stringify({ url: pick }), {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "access-control-allow-origin": "*",
        },
      });
    }

    return new Response("unknown format, use ?format=text|json", { status: 400 });
  },
};
