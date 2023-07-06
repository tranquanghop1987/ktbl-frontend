'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMui, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Option = {
  lable: string;
  value: string;
};

function tranformData(value = ''): Array<Option> {
  return value
    ? value.split(',').map((item) => {
        return { lable: item, value: item };
      })
    : [];
}
export default function Select({
  label = 'Age',
  options = [],
  typeValue = 'object',
}: {
  label?: string;
  options?: Array<Option> | string;
  typeValue?: 'text' | 'object';
}) {
  const optionsRender: Array<Option> =
    typeValue === 'text' ? tranformData(options as string) : (options as Array<Option>);

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth className="select-mui text-left">
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <SelectMui
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label={label}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {optionsRender.map((item: Option, index) => {
          return (
            <MenuItem value={item.value} key={index}>
              {item.lable}
            </MenuItem>
          );
        })}
      </SelectMui>
    </FormControl>
  );
}
