import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';







export default function BasicTable() {
  const [loading,setLoading]=useState(true)
  const [users,setUsers]=useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://omaya-server.onrender.com/users/all-users`);
        setLoading(false);
        setUsers(res.data);
        console.log("hello", users);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Account </TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Join date</TableCell>
            <TableCell align="right">Trade</TableCell>
            <TableCell align="right">Last activity</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
{loading ? 'loading users':
(
 <>
  {users.map((row) => (
    <TableRow
      key={row.name}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">personal</TableCell>
      <TableCell align="right">{row.phone}</TableCell>
      <TableCell align="right">{row.createdAt}</TableCell>
      <TableCell align="right">{row.createdAt}</TableCell>
      <TableCell align="right">5242</TableCell>
      <TableCell align="right">23/42/07</TableCell>
      <TableCell align="right">Active</TableCell>
      <TableCell align="right">...</TableCell>
    </TableRow>
  ))}
 </>
)
}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
