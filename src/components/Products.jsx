import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Tooltip, Typography } from "@mui/material";
import marketplace from "../data/marketplace";
import { Link } from "react-router-dom";
const Products = ({ index, image, item, description, rating, amount }) => {
  return (
    <>
      <Card sx={{ minWidth: 200, maxWidth: 250, maxHeight: "550px", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "space-between",padding:"10px" }}>
        <CardMedia
          component="img"
          alt="img"
          sx={{ maxHeight: "250px", maxWidth: "250px", minHeight: "250px", minWidth: "250px" }}
          image={image}
        />
        <CardContent sx={{ padding: "8px" }}>
          <Typography gutterBottom fontSize="20px" component="div" textAlign="left">
            {item.slice(0, 20)}
          </Typography>
          <Tooltip title={<h3>{description}</h3>} >
            <Typography variant="body2" color="text.secondary" textAlign="left">
              {description.slice(0, 50)}...
            </Typography>
          </Tooltip>
        </CardContent>
        <CardActions>
          <Rating name="half-rating" value={parseInt(rating)} readOnly />
        </CardActions>
        <CardActions>
          <Typography fontWeight="bold">{`₹` + amount}</Typography>
        </CardActions>
        <Box
         
        >
          <Link to={index.toString()}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => console.log(marketplace[index])}
              sx={{
                "&:hover": {
                  backgroundColor: "blue", // Change background color on hover
                  color: "white"
                },
                width:"100%"
              }}
            >
              View
            </Button>
          </Link>
        </Box>
      </Card>
    </>
  )
};
export default Products