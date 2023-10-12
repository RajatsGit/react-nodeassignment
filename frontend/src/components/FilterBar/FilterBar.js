import { Box, Button, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterBarStyleObject } from './Styles/filterBarStyleObject'



const FilterBar = ({data}) => {

    const[searchTerm,setSearchTerm] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(data,"data");
    const uniqueCities = useMemo(()=>{
        const cities = data?.map(user => user.address.city);
        return Array.from(new Set(cities)) || []
    
    },[data?.length]) 

    const uniqueCompanies = useMemo(()=>{
        const companies = data?.map(user => user.company.name);
        return Array.from(new Set(companies)) || []
    
    },[data?.length]) 


    // console.log(uniqueCities);
const handleFilterOptions = ()=>{
    setSearchParams({
        search: searchTerm
    })
}

  return (
    <Box sx={FilterBarStyleObject.main}>
    <Grid container spacing={2} alignItems="center">
    <Grid item xs={6} sm={4}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for something..."
        defaultValue={searchParams.get('search')} onChange={(e)=> setSearchTerm(e.target.value)}
      />
    </Grid>
    <Grid item xs={6} sm={4}>
      <Button
        variant="contained"
        color="primary"
        onClick={(e)=> handleFilterOptions(e)}
        fullWidth
      >
        Search
      </Button>
    </Grid>
    
  </Grid>

  <Box sx={{
        // width:'100vw',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                width:{sm:'50%',md1:'50%',md:'100%',xl:'100%'},
                m:'2rem 0',
                // justifyContent:'space-between',
                gap:{sm:'1rem',md:'1rem'}
            }}>
            <Typography sx={FilterBarStyleObject.selectHeading}>Filter Options </Typography>
            <InputLabel sx={FilterBarStyleObject.selectHeading}>City</InputLabel>
            <Select 
            sx={FilterBarStyleObject.select}
            defaultValue={searchParams.get('city') || ''}
             onChange={(e)=>{setSearchParams({
            city: e.target.value
        })}}>
                    
        <MenuItem value=''>Select City</MenuItem>
        {uniqueCities?.map((city)=>{
            return(
            <MenuItem value={city} key={city}>{city}</MenuItem>
            )
        })}
        </Select>
        <InputLabel sx={FilterBarStyleObject.selectHeading}>Company</InputLabel>       
        <Select 
           sx={FilterBarStyleObject.select}
            defaultValue={searchParams.get('company') || ''}
             onChange={(e)=>{setSearchParams({
            company: e.target.value
        })}}>
                    
        <MenuItem value=''>Select Company</MenuItem>
        {uniqueCompanies?.map((company)=>{
            return(
            <MenuItem value={company} key={company}>{company}</MenuItem>
            )
        })}
        </Select>
                </Box>
</Box>

  )
}

export default FilterBar