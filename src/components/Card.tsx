import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

type itemProps = {
    id: number;
    name: string;
    description: string;
    source: string;
    variants: {
        id: number;
        name: string;
        price: number;
    }[];
};

const CustomCard = ({ id, name, description, source, variants }: itemProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
            <List>
                {variants.map((variant) => {
                    return (
                        <ListItem
                            key={variant.id}
                            secondaryAction={
                                <Button
                                    onClick={() => {
                                        alert(variant.name)
                                    }}
                                >
                                    BUY
                                </Button>
                            }
                        >
                            <ListItemText
                                primary={variant.name}
                                secondary={`$${variant.price}`}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Card>
    );
}

export default CustomCard;