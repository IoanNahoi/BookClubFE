export default function SendBookDatas(values) {
  const book = {
    title: values.title,
    author: values.author,
    description: values.description,
  };
  console.log(JSON.stringify(book));
  fetch("http://localhost:8080/book", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(book),
  }).then((res) => {
    console.log(res.status);
  });
}
