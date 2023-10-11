import { Box, Button, MenuItem, Select, TextField } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const FilterBar = ({data}) => {
    const navigate = useNavigate()
    const[searchTerm,setSearchTerm] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(data,"data");
    const uniqueCities = useMemo(()=>{
        const cities = data?.map(user => user.address.city);
        return Array.from(new Set(cities)) || []
    
    },[data?.length]) 

    // console.log(uniqueCities);
const handleFilterOptions = ()=>{
    setSearchParams({
        search: searchTerm
    })
}

  return (
    <Box sx={{display:'flex'}}>
        <TextField defaultValue={searchParams.get('search')} onChange={(e)=> setSearchTerm(e.target.value)}/>
        
        <Button onClick={(e)=> handleFilterOptions(e)} sx={{bgcolor:'red'}}>Search</Button>
       
        <Select defaultValue={searchParams.get('city') || ''} onChange={(e)=>{setSearchParams({
            city: e.target.value
        })}}>
        <MenuItem value=''>Select</MenuItem>
        {uniqueCities?.map((city)=>{
            return(
            <MenuItem value={city} key={city}>{city}</MenuItem>
            )
        })}
        </Select>

    </Box>
  )
}

export default FilterBar