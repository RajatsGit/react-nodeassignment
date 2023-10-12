import { Box, Stack, Typography } from '@mui/material'
import {style} from './Styles/AccordinSubBoxStyleObject' 

const AccordinSubBox = ({user}) => {
    console.log(user,"user");
  return (
    <Box sx={style.accordinSubBoxMain}>
        <Box sx={style.accordinSubBoxStack}>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
                <Typography sx={style.accordinSubBoxHeadings}>Phone:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.phone}</Typography>
            </Stack>
            <Box>
            <Typography sx={{...style.accordinSubBoxHeadings, mb:'1rem'}}>Address:</Typography>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>Street Name:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.address.street}</Typography>
            </Stack>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>Suite:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.address.suite}</Typography>
            </Stack>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>City:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.address.city}</Typography>
            </Stack>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>ZipCode:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.address.zipcode}</Typography>
            </Stack>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>Geo location:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.address.geo.lat} lat{"  "}{user.address.geo.lng} long</Typography>
            </Stack>
            </Box>
        </Box>
        <Box sx={style.accordinSubBoxStack}>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
                <Typography sx={style.accordinSubBoxHeadings}>Website:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.website}</Typography>
            </Stack>
            <Stack direction='column'>
            <Typography sx={{...style.accordinSubBoxHeadings, mb:'1rem'}}>Company Details:</Typography>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>Name:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.company.name}</Typography>
            </Stack>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>Phrase:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.company.catchPhrase}</Typography>
            </Stack>
            <Stack direction='row' sx={style.accordinSubBoxEachBox}>
            <Typography sx={style.accordinSubBoxHeadings}>BS:</Typography>
                <Typography sx={style.accordinSubBoxValue}>{user.company.bs}</Typography>
            </Stack>
            </Stack>
        </Box>
    </Box>
  )
}

export default AccordinSubBox