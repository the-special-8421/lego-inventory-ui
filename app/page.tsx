"use client";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
    const [data, setData] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/getData')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    //set_num, name, year, theme_id, num_parts, set_img_url, set_url, status

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell>Image</TableCell>
                              <TableCell align="right">Set Number</TableCell>
                              <TableCell align="right">Name</TableCell>
                              <TableCell align="right">Year</TableCell>
                              <TableCell align="right">Theme ID</TableCell>
                              <TableCell align="right">Parts</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {data.map((row) => (
                              <TableRow
                                  key={row['set_num']}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row"><a href={row['set_url']}><Image src={row['set_img_url']} alt={''} width={120} height={120}></Image></a></TableCell>
                                  <TableCell align="right"><a href={row['set_url']}>{row['set_num']}</a></TableCell>
                                  <TableCell align="right">{row['name']}</TableCell>
                                  <TableCell align="right">{row['year']}</TableCell>
                                  <TableCell align="right">{row['theme_id']}</TableCell>
                                  <TableCell align="right">{row['num_parts']}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </main>
        </div>
  );
}
