import { Input } from "@material-ui/core";
import { Button, Container } from "@mui/material";
import { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: ""
  });

  const handleChange = (prop) => (event) => {
    setProduct({ ...product, [prop]: event.target.value });
    console.log(prop + " " + event.target.value);
  };
  return (
    <>
      <Container>
        <Input
          value={product.title}
          onChange={handleChange("title")}
          placeholder="Enter Product Name"
          fullWidth
        />
        <Input
          value={product.price}
          onChange={handleChange("price")}
          placeholder="Enter Price"
          fullWidth
        />
        <Input
          value={product.category}
          onChange={handleChange("category")}
          placeholder="Enter Category"
          fullWidth
        />
        <Input
          value={product.description}
          onChange={handleChange("description")}
          placeholder="Enter Description"
          fullWidth
        />
        <Button variant="contained" fullwidth>
          Sumbit
        </Button>
      </Container>
    </>
  );
};
export default Form;
