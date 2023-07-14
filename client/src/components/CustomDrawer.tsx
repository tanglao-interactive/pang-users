import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

export default function CustomDrawer() {
  const navigate = useNavigate();
  const location = useLocation();
  const style = {
    appTitleContainer: { position: 'absolute' },
    appTitle: { fontSize: '15px', fontWeight: 'bold', margin: '20px 30px' },
    drawerTitle: {margin: 0 },
  };

  return (
    <div>
      <Typography variant="h1" style={style.appTitle}>Pang Users</Typography>
      <Divider />
      <List>
        {[
          {text: "Dashboard", link: "/dashboard"},
          {text: "Tracker", link: "/dashboard/tracker"},
        ].map(({text, link}, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(link)} selected={link === location.pathname}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem>
        <Typography variant="h6">Profile</Typography>
      </ListItem>
      <List>
        {[
          {text: "Logout", link: "/"},
        ].map(({text, link}, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(link)} selected={link === location.pathname}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
    </div>
  );
}
