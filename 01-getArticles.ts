import axios from "axios";

async function getDataFromAPI(url: string, params: any) {
  return await axios
    .get(url, params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error("error");
    });
}

let i = 0;
let j = 0;
let resultAll = [];
let batch = {};
let articles = [];
let page = 0;

do {
  batch = await getDataFromAPI(
    "https://irozhlas.cz/api/v2/tag/7725517/articles",
    { params: { page: page } },
  );
  articles.push(...batch.data);
  page++;
} while (batch.data.length > 0);

Bun.write("articles.json", JSON.stringify(articles.map((a) => a.id)));
