'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4472c4',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name: string, calories: string, fat: string, carbs: string) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('1. บมจ.ธนาคารกรุงไทย', '24,950,000', '24.950000', '249,500,000'),
  createData('2. บมจ.บัตรกรุงไทย', '75,049,999', '75.049999', '750,499,990'),
  createData('3. คุณเรือนแก้ว เกษมสวัสดิ์ศรี', '1', '0.000001', '10'),
  createData('', '100,000,000', '100.00', '1,000,000,000'),
];

import './styles.scss';
const Investors = () => {
  return (
    <main className="mt-16 w-full flex justify-center investors">
      <div className="container py-2">
        <h1 className="text-2xl my-2">นักลงทุนสัมพันธ์</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>รายชื่อผู้ถือหุ้น</StyledTableCell>
                <StyledTableCell align="right">จำนวนหุ้น</StyledTableCell>
                <StyledTableCell align="right">สัดส่วน</StyledTableCell>
                <StyledTableCell align="right">จำนวนเงิน (บาท)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
};
export default Investors;
