import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width:240,
    height:413,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    height:173,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: 240
  },
  favoriteBorder: {
    height: 25,
    width: 25,

  },
}));

function Item (props) {
  const toggleRelease =()=> {
    props.handleClick(props.id);
  }
  const { id, title,artist,resource_url,isFav } = props;
  const classes = useStyles();
    return (
      <React.Fragment>
        <Card className={classes.root}>
        <Link
            to={`/release-detail/${id}`}
            className="release_link"
            >
          <CardMedia
            className={classes.cover}
            alt={artist}>
              <img
              className="release-img"
              src={resource_url}
              alt={artist}
            />
            </CardMedia>
          </Link>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
              {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              {artist}
              </Typography>
            </CardContent>
            <div className="release-favicon">
              <IconButton aria-label="favorite" id={id} isFav={isFav} onClick={toggleRelease}>
                <FavoriteBorderOutlinedIcon className={classes.favoriteBorder} />
              </IconButton>
            </div>
          </div>
          
        </Card>
      </React.Fragment>
    );
}

export default Item;