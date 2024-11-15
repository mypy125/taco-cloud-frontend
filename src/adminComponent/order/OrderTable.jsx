import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const orders = [1,1,1,1,1];

export const OrderTable = () => {
  return (
    <Box>
      <Card>
        <CardHeader title={"All Orders"} sx={{ pt: 2, textAlign: "center" }} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">image</TableCell>
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">ingredients</TableCell>
                <TableCell align="right">status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length > 0 ? (
                orders.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {1}
                    </TableCell>
                    <TableCell align="right">{"image"}</TableCell>
                    <TableCell align="right">{"gor1990@gmail.com"}</TableCell>
                    <TableCell align="right">{"price"}</TableCell>
                    <TableCell align="right">{"name"}</TableCell>
                    <TableCell align="right">{"ingredients"}</TableCell>
                    <TableCell align="right">{"status"}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};