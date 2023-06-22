"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectMui, { SelectChangeEvent } from "@mui/material/Select";

type Option = {
  lable: string;
  value: string;
};

export default function Select({
  label = "Age",
  options = [],
}: {
  label?: string;
  options?: Array<Option>;
}) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <SelectMui
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((item: Option) => {
          return (
            <MenuItem value={item.value} key={item.value}>
              {item.lable}
            </MenuItem>
          );
        })}
      </SelectMui>
    </FormControl>
  );
}
