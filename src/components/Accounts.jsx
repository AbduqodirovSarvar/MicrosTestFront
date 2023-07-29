import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import DateSelection from './DateSelection';
import { useState, useEffect } from 'react';
import { UseToken } from '../hook/LoginHook';

const Accounts = () => {
  const [data, setData] = useState();


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
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
  
  function createData(name, calories, fat, carbs,) {
    return { name, calories, fat, carbs,};
  }
  
  const rows = [
    createData('Sarvar', 3000000, "Salary", 24,),
    createData('Bekhzod', 2000000, "Rent", 37, 4.3),
    createData('Sarvar', 5000000, "Other", 24, 6.0),
    createData('Bekhzod', 4000000, "Rent", 67, 4.3),
    createData('Sarvar', 1500000, "Salary", 49, 3.9),
  ];


  // const [day, setDay] = React.useState(rows)
  // const dayChange = (value) =>{
  //   let days = day.filter(day => day.value !== value)
  //   setDay(days)
  //   console.log(days);
  // }


  // const monthChange = () =>{
  //   console.log("Month");
  // }

  // const yearChange = () =>{
  //   console.log("Year");
  // }

  // const {adToken} = UseToken()



  // const username = 'your-username';
  // const password = 'your-password';
  
  useEffect(() => {
    fetch('https://localhost:5076/api/Common', {
      headers: {
        'Authorization': "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDaGlsZCIsImp0aSI6IjNjNDkzMTAzLTIwNWItNGY3NC05ZjAxLTA2ZjQzMDM2ODA4NCIsIm5hbWUiOiIyOC8wNy8yMDIzIDE5OjA1OjM2IiwiZXhwIjoxNjkwNjU3NTM2LCJpc3MiOiJNaWNyb3NUZXN0SXNzdWVyIiwiYXVkIjoiTWljcm9zVGVzdEF1ZGllbmNlIn0.1vPnjFBMThajOs0oQfZcsb0GGxiVc8qZ_Aupap1t2yE",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(dataa => {
        setData(dataa);
        // console.log(dataa);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);




  return (
    <div> 
    
    {/* <div className='DateSelection'>
    <form action="">
        <select onChange={() => dayChange(rows.id)} name="date"  defaultValue={null} placeholder='Day' className='inputDateTime'>
          <option value="null">Day</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">12</option>
          <option value="13">13</option>
          <option value="14">15</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>        
        </select>

        <select onChange={monthChange} name="month" id="" defaultValue={null}placeholder='Month' className='inputDateTime'> 
          <option value="null">Month</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>


        <select onChange={yearChange} name="year" id="" defaultValue={null} placeholder='Year' className='inputDateTime'>
          <option value="null">Year</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </form>
    </div> */}
      
    <div className='dataTable'> 
      <TableContainer component={Paper}>
        <span className='profit'>Kirim</span>
        
      <Table sx={{ minWidth: 625 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Date Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {data?.inComeList?.map((e) => (
            <StyledTableRow key={e?.id}>
              <StyledTableCell component="th" scope="row">
                {e?.user.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{e?.amount}</StyledTableCell>
              <StyledTableCell align="right">{e?.category}</StyledTableCell>
              <StyledTableCell align="right">{e?.createdDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <span className='profit'>Umumiy kirim : {data?.incomeTotalSumms}</span>
    </TableContainer>

    <TableContainer component={Paper}>
      <span className='spend'>Chiqim</span>
      <Table sx={{ minWidth: 625 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Date Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data?.outComeList?.map((e) => (
            <StyledTableRow key={e?.id}>
              <StyledTableCell component="th" scope="row">
                {e?.user.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{e?.amount}</StyledTableCell>
              <StyledTableCell align="right">{e?.category}</StyledTableCell>
              <StyledTableCell align="right">{e?.createdDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <span className='spend'>Umumiy chiqim: {data?.outcomeTotalSumms}</span>
    </TableContainer>

    </div>
</div>
  )
}

export default Accounts