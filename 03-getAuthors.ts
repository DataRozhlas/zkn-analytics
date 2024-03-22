const urls = await Bun.file("urls.json").text().then((text) =>
  JSON.parse(text)
);

const authors = urls.map((url: string) => {
  const author = url.split("_")[2];
  return `_${author}`;
});

const uniqueAuthors = [...new Set(authors)];

console.log(uniqueAuthors.join("|"));
