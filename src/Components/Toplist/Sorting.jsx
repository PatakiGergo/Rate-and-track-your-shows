import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ToplistContext } from "@/context/toplist-context";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function BasicSelect() {
  let toplistItemsArr = React.useContext(ToplistContext);
  const [sorting, setSorting] = React.useState("");

  //setting to either lowtohigh or hightolow
  const handleChange = (event) => {
    const sortingType = event.target.value;
    setSorting(sortingType);
  };

  //utilizes sorting in context
  useEffect(() => {
    toplistItemsArr.sortItems(sorting);
  }, [sorting]);

  return (
    <Box>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          label="Age"
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          <MenuItem value={"lowToHigh"}>Rating: Low to high</MenuItem>
          <MenuItem value={"highToLow"}>Rating: High to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
