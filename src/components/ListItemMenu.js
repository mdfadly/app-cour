import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import GroupIcon from "@material-ui/icons/Group";
import EventBusyIcon from "@material-ui/icons/EventBusy";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  listItem: {
    fontSize: "13px", //Insert your required size
  },
  listItemActive: {
    backgroundColor:'#03a9f4',
    color:'#ffffff',
    '&:hover': {
      background: "#35baf6",
   },
  },
  listIconActive: {
    color:'#ffffff',
  }
  
}));
const ListItemMenu = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const pathName = props?.location?.pathname;
  return (
    <List>
      <ListItem
        button
        component={Link}
        to="/"
        className={pathName === "/" ? classes.listItemActive : ""}
      >
        <ListItemIcon className={pathName === "/" ? classes.listIconActive : ""}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItem }}
          primary="Dashboard"
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/monitoringbatchopr"
        className={pathName === "/monitoringbatchopr" ? classes.listItemActive : ""}
      >
        <ListItemIcon className={pathName === "/monitoringbatchopr" ? classes.listItemActive : ""}>
          <DesktopWindowsIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItem }}
          primary="Monitoring Batch Opr"
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/monitoringbatchofc"
        className={pathName === "/monitoringbatchofc" ? classes.listItemActive : ""}
      >
        <ListItemIcon className={pathName === "/monitoringbatchofc" ? classes.listItemActive : ""}>
          <DesktopWindowsIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItem }}
          primary="Monitoring Batch Ofc"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon >
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItem }}
          primary="Maintenance Kurir"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon >
          <AssignmentReturnIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItem }}
          primary="Maintenance Retur"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon >
          <GroupIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItem }}
          primary="Maintenance Relationship"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon >
          <EventBusyIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItem }}
          primary="Maintenance Hari Libur"
        />
      </ListItem>
    </List>
  );
};

export default withRouter(ListItemMenu);
