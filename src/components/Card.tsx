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
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';

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
    const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER);

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
                                        addItemToOrder({ variables: { id: variant.id } })
                                            .then(result => {
                                                const typename = result.data.addItemToOrder.__typename;
                                                if (typename === 'Order') {
                                                    console.log(typename);
                                                    alert(`addItemToOrder; variante:${variant.id}`);
                                                } else {
                                                    alert(typename);
                                                }
                                            })
                                            .catch(error => alert(error.message));
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