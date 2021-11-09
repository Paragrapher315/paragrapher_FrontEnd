import { alpha, createTheme, makeStyles } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#219EBC",
      textColor: "#000000",
      dark: "#023047",
      light: "#8ECAE6",
    },
    secondary: {
      main: "#DDA15E",
      light: "#FFB703",
      dark: "#FB8500",
      textColor: "#000000",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  typography: {
    fontFamily: '"BYekan"',
  },
  typographyBold: {
    fontFamily: '"BYekan"',
    fontWeight: "bold",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    alignItems: "center",
    display: "inline-block",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0.9, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
  },
  inputRoot: {
    fontFamily: '"BYekan"',
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
      paddingRight: theme.spacing(5),
    },
  },
  icons: {
    padding: theme.spacing(0, 0, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "auto",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
    display: "flex",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paperDark: {
    backgroundColor: "#023047",
  },
  paperLight: {
    backgroundColor: "#8ECAE6",
  },
}));
