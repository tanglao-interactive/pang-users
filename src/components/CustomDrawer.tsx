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
          {text: "Users", link: "/dashboard/users"},
          {text: "Subscriptions", link: "/dashboard/subscriptions"},
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
        <Typography variant="h6">Apps</Typography>
      </ListItem>
      <List>
        {[
          {text: "Apps", link: "/dashboard/pang-members"},
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
