import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from './Legal.module.scss'; 

export interface ILegalProps {
    legalContent: JSX.Element;
}

const Legal = (props: ILegalProps) => (
    <Paper variant={"elevation"} className={styles.legal}>
        <Link to={"/"}>
            <Button>
                <ArrowBack />
                <Typography variant={"button"} color={"textPrimary"} style={{ marginLeft: "10px" }}>Back</Typography>
            </Button>
        </Link>
        {props.legalContent}
    </Paper>
);

export default Legal;