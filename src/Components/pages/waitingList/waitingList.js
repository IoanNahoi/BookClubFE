import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MenuAppBar from "../../NavBar/MenuAppBar";
import SendWaitingDatas from "./sendWaitingDatas";
const WaitingList = () => {
  const [books, setBooks] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    fetch(`http://localhost:8080/book/unavailable?id=${user.id}`)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);
  const [period, setPeriod] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [querry, setQuerry] = useState("");

  const handleSubmit = (title) => {
    setTitle(title);
    SendWaitingDatas(user.id, title);
  };

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };
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
      <h1>Submit for waiting list!</h1>
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
                <CardActions>
                  <Button
                    onClick={() => handleSubmit(e.title)}
                    size="small"
                    key={e.id}
                  >
                    Submit
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Slider>
      </div>
    </div>
  );
};
export default WaitingList;
