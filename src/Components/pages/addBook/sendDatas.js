export default function SendBookDatas(values) {
  const book = {
    title: values.title,
    author: values.author,
    description: values.description,
  };

  fetch("http://localhost:8080/book", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(book),
  }).then((res) => {
    addOwner();
  });
  function addOwner() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user.id + " " + values.title);
    fetch(
      `http://localhost:8080/owner/addOwner?idUser=${user.id}&title=${values.title}`,
      {
        method: "POST",
      }
    ).then((res) => {
      if (res.status !== 200) {
        alert("Something went wrong!");
        window.location.href("/Addbook");
      }
    });
  }
}
