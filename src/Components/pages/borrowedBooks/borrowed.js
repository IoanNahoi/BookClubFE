import React, { useEffect, useState } from "react";
import NavBarLogged from "../../NavBar/navbarLogged";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Borrowed = () => {
  const [books, setBooks] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [period, setPeriod] = React.useState("");
  const [booksFromMe, setBooksFromMe] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/borrow/whatIBorrowed?idUser=${user.id}`)
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:8080/borrow/seeWhoBorrowed?id=${user.id}`)
      .then((res) => res.json())
      .then((result) => {
        setBooksFromMe(result);
      });
  }, []);
  const handleChange = (event) => {
    setPeriod(event.target.value);
  };
  const handleSubmit = (title) => {
    fetch(
      `http://localhost:8080/borrow/extendPeriod?days=${period}&idUser=${user.id}&bookName=${title}`,
      {
        method: "PUT",
      }
    ).then((res) => {
      if (res.status !== 200) {
        alert("Something went wrong!");
        window.location.href("/MainPage");
      } else if (res.status === 200) {
        alert("Period extended!");
        window.location.reload();
      }
    });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <NavBarLogged />
      <h1>Books I borrowed!</h1>
      <div>
        <Slider {...settings}>
          {books.map((e) => (
            // getBook(e.borrowed_book.title),
            <Card sx={{ maxWidth: 400 }} key={e.id_borrow}>
              <CardMedia
                component="img"
                alt="book"
                height="140"
                image="https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.borrowed_book.title}
                </Typography>
                <Typography variant="h7" component="div">
                  {"Must return until " + e.date_when_return}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Description:\n" + e.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleSubmit(e.borrowed_book.title)}
                  size="small"
                  key={e.id}
                >
                  Extend
                </Button>
                <FormControl sx={{ minWidth: 100, maxHeight: 50 }}>
                  <InputLabel>Period</InputLabel>
                  <Select
                    labelId="period"
                    id="period"
                    value={period}
                    label="Days to borrow"
                    onChange={handleChange}
                  >
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </CardActions>
            </Card>
          ))}
        </Slider>
      </div>
      <h1>See who borrowed my books</h1>
      <div>
        <Slider {...settings}>
          {booksFromMe.map((el) => (
            <Card sx={{ maxWidth: 400 }} key={el.id_borrow}>
              <CardMedia
                component="img"
                alt="book"
                height="140"
                image="https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.borrowed_book.title}
                </Typography>
                <Typography variant="h7" component="div">
                  {"Borrowed by:" +
                    el.user_who_borrowed.firstName +
                    " " +
                    el.user_who_borrowed.lastName}
                </Typography>
                <Typography variant="h7" component="div">
                  {el.date_when_return}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Borrowed;
