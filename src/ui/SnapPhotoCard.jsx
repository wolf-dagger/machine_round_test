/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SnapPhotoCard(props) {
  return (
    <Card sx={{ minWidth: 275, maxWidth:'686px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{mt:'15px'}}>
          {props.des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
