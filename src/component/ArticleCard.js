import {
  makeStyles,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Badge,
  withStyles,
  Link,
  CardActions,
  Divider,
} from "@material-ui/core";



const styles = makeStyles((muiBaseTheme) => ({
  grid: {
    marginTop: "20px",
    minHeight: "391px",
  },
  card: {
    minWidth: 0,
    marginLeft: "15px",
    marginRight: "15px",
    margin: "auto",
    transition: "0.3s",
    minHeight: "391px",
    borderRadius: ".625rem!important",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    minHeight: "10rem",
    position: "relative",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing(3),
  },
  divider: {
    margin: `${muiBaseTheme.spacing(2)}px 0`,
  },
  heading: {
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#3d5170",
    "&::hover": {
      color: "#2b394f",
    },
  },
  subheading: {
    fontFamily: ("Helvetica Neue", "Helvetica", "Arial", "sans-serif"),
    fontSize: "14px",
    lineHeight: 1.8,
  },
  avatar: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    bottom: -136,
    boxShadow: " 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90,97,105,.5)",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing(),
    },
  },
}));




function ArticleCard() {

const classes = styles();

return (<Grid xs={12} sm={12} lg={4} className={classes.grid}>
            <Card className={classes.card}>
            </Card>
          </Grid>  
          );

}

export default ArticleCard;