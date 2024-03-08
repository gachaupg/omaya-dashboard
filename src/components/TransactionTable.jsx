import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoMdEye } from 'react-icons/io';







export default function TransactionTables() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
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
                        <TableCell align='right'>Client</TableCell>
                        <TableCell align="right">Transaction Details</TableCell>
                        <TableCell align="right">Type </TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Wallet</TableCell>
                        <TableCell align="right">Amount </TableCell>
                        <TableCell align="right">Assigned to</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading ? 'loading transactions ...' :
                        (
                            <>
                                {/* {users.map((row) => ( */}
                                <TableRow

                                >
                                    <TableCell scope="row">
                                        <div className='flex flex-col gap-2 '>
                                            <div className='flex gap-2 items-'>
                                                <img className='w-7 h-7 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXYN3QfC1uQ-CwRW4hgH5bGX9LLNXQoT5JQ&usqp=CAU" alt="" />
                                                <p>Alli</p>

                                            </div>
                                            <div className='flex gap-2'>
                                                <button className='border p-2 border-green-500 rounded-2xl'>Tag</button>
                                                <button className='border p-2 border-blue-500 rounded-2xl'>Tag</button>
                                                <button className='border p-2 border-red-500 rounded-2xl'>Tag</button>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="right" >
                                        <div className='flex flex-col justify-between items-center gap-2'>
                                            <div style={{ marginLeft: '2rem' }} className='flex gap-2 ml-16'>
                                                Transaction Id <IoMdEye size={30}/>
                                            </div>
                                            <p>11/03/2024</p>
                                        </div>

                                    </TableCell>
                                    <TableCell align="right">Withdrawal</TableCell>
                                    <TableCell align="right">Good money</TableCell>
                                    <TableCell align="right">356dft2ddt63gdehsgc7ger</TableCell>
                                    {/* <TableCell align="right">{row.createdAt}</TableCell> */}
                                    <TableCell align="right">$5242</TableCell>
                                    <TableCell align="right">Omar Ali</TableCell>
                                    <TableCell align="right">New</TableCell>
                                    <TableCell align="right">...</TableCell>
                                </TableRow>
                                {/* ))} */}
                            </>
                        )
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}
