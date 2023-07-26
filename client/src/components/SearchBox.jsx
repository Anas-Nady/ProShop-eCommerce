import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigateTo = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigateTo(`/search/${keyword}`);
    } else {
      navigateTo('/')
    }
  };
  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Product..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 d-inline">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
