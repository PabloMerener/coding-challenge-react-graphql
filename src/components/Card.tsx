import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions
} from '@mui/material';

type itemProps = {
    id: number;
    name: string;
    description: string;
    source: string;
    variants: {
        id: number;
        namne: string;
        price: number;
    }[];
};

const CustomCard = ({ id, name, description, source, variants }: itemProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={source}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
}

export default CustomCard;