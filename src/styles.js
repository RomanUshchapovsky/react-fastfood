import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navy: {
    background: "#003080",
  },
  red: {
    backgroundColor: "#ff2040",
    color: "#ffffff",
  },
  main: {
    flex: 1,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  green: {
    backgroundColor: "#00b020",
  },
  largeLogo: {
    height: 100,
  },
  logo: {
    height: 50,
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: { margin: 10 },
  title: {
    marginTop: 18,
    marginLeft: 20,
  },
  space: { padding: 10 },
  media: { maxWidth: 200 },
  largeButton: {
    width: 250,
  },
  largeInput: {
    width: "60px!important",
    padding: "0!important",
    fontSize: "35px!important",
    textAlign: "center!important",
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 2,
    margin: 18,
    borderStyle: "solid",
  },
  row: {
    display: 'flex',
    padding: 10,
  },
  around: {
    justifyContent: 'space-around',
  },
  between: {
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
}));
