import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";
import AccordinSubBox from './AccordinSubBox'
import { styleObject } from "./Styles/AccordinBoxStyleObject";

const AccordinBox = ({ user }) => {
  const [viewDetails, setViewDetails] = useState(false);
  return (
    <Box sx={styleObject.accordinMainBox}>
      <Box sx={styleObject.accordinFirstBox}>
        <Box sx={styleObject.eachBox}>
          <Typography sx={styleObject.accordinFirstHeading}>Name </Typography>
          <Typography sx={styleObject.accordinFirstValue}>
            {user.name}
          </Typography>
        </Box>
        <Box sx={styleObject.eachBox}>
          <Typography sx={styleObject.accordinFirstHeading}>Email</Typography>
          <Typography sx={styleObject.accordinFirstValue}>
            {user.email}
          </Typography>
        </Box>
        <Box sx={styleObject.eachBox}>
          <Typography sx={styleObject.accordinFirstHeading}>City</Typography>
          <Typography sx={styleObject.accordinFirstValue}>
            {user.address.city}
          </Typography>
        </Box>
        <Box sx={styleObject.eachBox}>
          <Typography sx={styleObject.accordinFirstHeading}>
            Company Name
          </Typography>
          <Typography sx={styleObject.accordinFirstValue}>
            {user.company.name}
          </Typography>
        </Box>

        <Button
          onClick={() => setViewDetails((prev) => !prev)}
          sx={{...styleObject.button,bgcolor:viewDetails ? 'red':'black' }}
        >
          <Typography sx={styleObject.buttonText}>
            {viewDetails ? "Hide Details" : "View Details"}
          </Typography>
        </Button>
      </Box>
      <Collapse in={viewDetails} timeout={1000}>
        <Box sx={styleObject.accordinSecondBox}>
         <AccordinSubBox user ={user}/>
        </Box>
      </Collapse>
     
    </Box>
  );
};

export default AccordinBox;
