import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

const TodoItem = ({ todo }) => {
  console.log(todo);

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent></CardContent>
        </Card>
      </Box>
    </>
  );
};

export default TodoItem;
