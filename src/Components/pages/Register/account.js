export default function Account(values) {
  const account = {
    username: values.username,
    password: values.password,
    email: values.email,
    firstName: values.firstname,
    lastName: values.lastname,
  };
  console.log(JSON.stringify(account));
  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(account),
  });
}
