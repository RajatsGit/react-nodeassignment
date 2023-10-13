export const styleObject = {
  accordinMainBox: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    boxShadow: "0px 4px 25px 15px rgba(0, 0, 0, 0.05)",
    p: "2rem",
    borderRadius: "2rem",
    maxWidth:{sm:'15rem',sm2:'40rem',md:'50rem',lg:'70rem',xl:'100rem'}
  },
  accordinFirstBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection:{sm:'column',sm2:'row',md:'row'},
    justifyContent: "space-around",
    gap:{sm:'0.5rem',md:'1rem'}
  },
  eachBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    gap: "0.5rem",
  },
  accordinFirstHeading: {
    fontFamily: "Poppins-Bold",
    fontSize: { sm:'0.5rem',sm2:'0.6rem',md: "0.8rem",lg:'1rem',xl:'1.1rem' },
  },
  accordinFirstValue: {
    fontFamily: "Poppins-Light",
    fontSize: {sm:'0.5rem',sm2:'0.5rem', md: "0.7rem",lg:'0.9rem',xl:'1rem' },
  },
  button: {
    p: { md: "2px 1.5rem",lg:'2px 2rem',xl:'2px 2.5rem' },

    bgcolor: "black",
    color: "white",
    borderRadius: "2rem",
    border: "1px solid black",
    "&:hover": {
      bgcolor: "#FFFFFF",
      color: "black",
      border: "1px solid black",
    },
    textTransform: "none",
  },
  buttonText: {
    fontFamily: "Poppins-Light",
    fontStyle: "normal",
    fontSize: {sm:'0.5rem',sm2:'0.5rem',md:"0.6rem",lg:'0.75rem',xl:'0.9rem'},
  },
  accordinSecondBox: {
    // width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // boxShadow: "0px 4px 10px 10px rgba(0, 0, 0, 0.05)",
    p: "2rem",
    borderRadius: "2rem",
    m: "2rem 0rem",
  },
};
