import axios from "axios";

const ids = await Bun.file("articles.json").text().then((text) =>
  JSON.parse(text)
);

const urls = [];

for (const id of ids) {
  const url = `https://www.irozhlas.cz/node/${id}`;
  const redirectedUrl = await axios.get(`https://irozhlas.cz/node/${id}`).then((
    res,
  ) => res.request._redirectable._currentUrl);
  console.log(redirectedUrl);
  urls.push(redirectedUrl);
}

Bun.write("urls.json", JSON.stringify(urls));
