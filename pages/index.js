
import { makeStyles } from '@material-ui/core/styles';
import Details from '../src/components/Details';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    layout: {
        marginLeft: 200,
        marginRight: 200,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 50,
            marginRight: 50,
        },
    }

}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <Details />
        </div>
    )
}

export default Home;