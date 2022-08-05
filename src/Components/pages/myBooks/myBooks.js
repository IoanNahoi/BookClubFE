import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MenuAppBar from "../../NavBar/MenuAppBar";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [querry, setQuerry] = useState("");
  const [title, setTitle] = React.useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/book/myBooks?idOwner=${user.id}`)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div>
      <MenuAppBar />
      <h1>My Books!</h1>
      <input
        type="text"
        placeholder="Search by title"
        className="search"
        onChange={(e) => setQuerry(e.target.value)}
      />
      <div>
        <Slider {...settings}>
          {books
            .filter((book) =>
              book.title.toLowerCase().includes(querry.toLowerCase())
            )
            .map((e) => (
              <Card sx={{ maxWidth: 400 }} key={e.id}>
                <CardMedia
                  component="img"
                  alt="book"
                  height="140"
                  image="https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg"
                />
                <CardContent>
                  <Typography
                    value={title}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {e.title}
                  </Typography>
                  <Typography variant="h7" component="div">
                    {"Author: " + e.author}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Slider>
      </div>
    </div>
  );
};
export default MyBooks;
