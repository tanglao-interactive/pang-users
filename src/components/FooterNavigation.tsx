import { Box, Typography } from "@mui/material";

const FooterNavigation = () => {
  return (
    <Box sx={{backgroundColor: '#eee', height: 50, p: 1, flexShrink: 1, display: 'flex', flexDirection: "row" }}>
      <Box sx={{ minHieght: '100%', margin: 'auto 20px' }}>
        <Typography sx={{ minHeight: '100%', color: '#8a8a8a' }}>&copy; Pang Users</Typography>
      </Box>
    </Box>
  );
}

export default FooterNavigation;
