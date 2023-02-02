import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ToplistContext } from "@/context/toplist-context";

export default function BasicSelect() {
  let toplistItemsArr = React.useContext(ToplistContext);

  const [sorting, setSorting] = React.useState("");

  const handleChange = (event) => {
    setSorting(event.target.value);
    toplistItemsArr.sortItems(sorting);
  };

  return (
    <Box sx={{ maxWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"lowToHigh"}>Rating: Low to high</MenuItem>
          <MenuItem value={"highToLow"}>Rating: High to low</MenuItem>
          <MenuItem value={"Old"}>Addition time: Old</MenuItem>
          <MenuItem value={"New"}>Addition time: New</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
