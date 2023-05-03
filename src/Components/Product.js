import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Tzy
          </Avatar>
        }
        action={
          <Typography
          className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(185)}
          </Typography> 
        }
        title="Album Melina"
        subheader="Disponible"
      />
      <CardMedia
        className={classes.media}
        image="https://scontent.fgdl5-1.fna.fbcdn.net/v/t39.30808-6/334934616_196799782972513_5932666973942632928_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH8gRoHUW1W0Bwf0-8FZkzJm0oPPfrREb-bSg89-tERv8jpq8vrwZjTK1hBkkbXhVeS9YzcHJQgtlEcwygtJGHC&_nc_ohc=XOc3IJqDnSwAX8GcDlx&_nc_ht=scontent.fgdl5-1.fna&oh=00_AfBwZGpRxBTRKSHWva4fLrF9MPPTAXD4fyInUEKpjnh5OQ&oe=6455FB8D"
        title="Minnie Corazon"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         ⭐ Jumper Minnie Mouse color rojo.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">  
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        {Array (5)
        .fill()
        .map((_, i) => (
          <p>&#11088;</p>
        ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            ⭐Envío: 10 días hábiles. 
            ⭐Tallas: Ch: 4  años, M: 6 años, G 8 años y Xl 10 a 12 años.
            ⭐Elaborado en tela Liverpol.
            ⭐Envios a cualquier parte del mundo.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
