import { IconButton, styled, Menu, MenuItem, ListItemText } from '@mui/material';
import { withStyles } from '@material-ui/styles';

// images
import EN_Flag from '../../images/ic_flag_en.svg';
import DE_Flag from '../../images/ic_flag_de.svg';
import FR_Flag from '../../images/ic_flag_fr.svg';

// Menu styles
const StyledMenu = withStyles((theme) => ({
    paper: {
        minWidth: 175,
        boxShadow: `0 2px 10px -5px ${theme.palette.green.darker}`,
    },
}))((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:active': {
            backgroundColor: theme.palette.green.light,
        },
        '& .MuiListItemText-primary': {
            marginLeft: theme.spacing(2.5),
            fontSize: theme.spacing(2.25),
        },
    },
}))(MenuItem);

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
    padding: '12px 9px',
    '& img': {
        width: theme.spacing(3),
    },
}));

// Language list
const languages = [
    { src: EN_Flag, alt: 'English' },
    { src: DE_Flag, alt: 'German' },
    { src: FR_Flag, alt: 'French' },
];

const LanguageSelector = (props) => {
    return (
        <>
            <IconButtonStyle aria-controls='language-selector' aria-haspopup='true' onClick={props.onOpen}>
                <img src={EN_Flag} alt='English' />
            </IconButtonStyle>

            <StyledMenu
                id='customized menu'
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}
                onClose={props.onClose}
            >
                {languages.map((el) => (
                    <StyledMenuItem key={el.alt} onClick={props.onClose}>
                        <img src={el.src} alt={el.alt} />

                        <ListItemText primary={el.alt} />
                    </StyledMenuItem>
                ))}
            </StyledMenu>
        </>
    );
};

export default LanguageSelector;
