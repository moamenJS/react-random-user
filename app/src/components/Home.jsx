import React, { useEffect, useState } from 'react'
import SearchBar from 'material-ui-search-bar'
import { Paper,  Table, TableHead, TablePagination,
      TableRow, TableCell,
       TableBody, Avatar, Box, CircularProgress, Container } from '@material-ui/core'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Home.css';



function Home() {
    

    const [searched, setSearched] = useState("");
    const [rows, setRows] = useState()
    const [users, setUsers] = useState(null)
    const [page, setPage] = useState(1)
    let navigate = useNavigate()
    

    const handleNewPage = async (e, newPage) => {
        console.log(`loading page ${newPage}`)
        await loadData(newPage)
        setPage(newPage)
        
    }

    const requestSearch = (searchedVal) => {
        const filteredUsers = users.filter((user) => {
            return [user.name.first, user.name.last, user.email, user.dob.age]
                .some((s,i,arr) => String(s).toLowerCase().includes(searchedVal.toLowerCase()))
        });
        setRows(filteredUsers);
    };
    const loadData = async (page) => {
        console.log('loading data')
        let res = await fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=123&noinfo&inc=picture,name,email,gender,age,location,username,login,dob`)
        let data = await res.json()
        
        setUsers(data.results)
        setRows(data.results)
    }
    useEffect(() => {
        loadData(page)
    }, [])
    
    

    
    

    const cancelSearch = () => {
        console.log('canceled')
        setSearched("");
        setRows(users)
    };


    return (

        <Box sx={{width: '100%', height: '100%',maxWidth: '800px', m:'auto' ,mt:5}}>
        {rows ?
        <Paper>
            <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />

                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='right'>User</TableCell>
                            <TableCell align='right'>Name</TableCell>
                            <TableCell align='right'>Email</TableCell>
                            <TableCell align='right'>Gender</TableCell>
                            <TableCell align='right'>Age</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {rows.map(user => (
                            <TableRow className="row" key={user.name.first + user.name.last} onClick={() => navigate(`/user/${user.login.username}`, {state: user}) }>
                                <TableCell style={{verticalAlign: 'center'}} align="center"><Avatar alt="Remy Sharp" src={user.picture.medium} /></TableCell>
                                <TableCell align="right">{user.name.first + ' ' + user.name.last}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.gender}</TableCell>
                                <TableCell align="right">{user.dob.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination 
                    align='right' style={{display: 'flex'}} 
                    rowsPerPage={10} page={page} rowsPerPageOptions={[]} 
                    count={(page+2)*10} labelRowsPerPage='' labelDisplayedRows={() => ''}
                    onPageChange={handleNewPage}
                />
        </Paper>
        : <Container style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><CircularProgress /></Container>}   
        </Box>

    )
}

export default Home