import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import NavBarLogged from "../../NavBar/navbarLogged";
import "./availableBooks.css";
import BorrowUseForm from "./borrow";
export default function Availablebooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/book/available")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);
  const [period, setPeriod] = React.useState("");
  const [title, setTitle] = React.useState("");
  const handleSubmit = (title) => {
    setTitle(title);
    console.log(title + " " + period);
    BorrowUseForm(period, title);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setPeriod(event.target.value);
    // setTitle(title);
  };
  return (
    <div>
      <NavBarLogged />

      <div className="container">
        {books.map((e) => (
          <Card sx={{ maxWidth: 400 }} key={e.id}>
            <CardMedia
              component="img"
              alt="book"
              height="140"
              image="https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_549881917_361412.jpg"
            />
            <CardContent>
              <Typography
                // labelId="title"
                // id="title"
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
              <Typography variant="body2" color="text.secondary">
                {"Description:\n" + e.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleSubmit(e.title)}
                size="small"
                key={e.id}
              >
                Borrow
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
      </div>
    </div>
  );
}
