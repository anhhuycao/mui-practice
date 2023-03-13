import { Container, useMediaQuery } from '@mui/material';
import { styled } from '@material-ui/styles';
import { Box } from '@mui/system';
import { Helmet } from 'react-helmet';
import UserHeader from '../components/User/UserHeader';
import UserTable from '../components/User/UserTable';

const BoxStyle = styled(Box)(({ theme }) => ({
    margin: `${theme.spacing(4)}px auto`,
    borderRadius: theme.spacing(2),
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
    overflow: 'hidden',
}));

const User = () => {
    const less400 = useMediaQuery('(max-width:400px)');
    const less480 = useMediaQuery('(max-width:480px)');
    const less600 = useMediaQuery('(max-width:600px)');
    const less768 = useMediaQuery('(max-width:768px)');

    return (
        <>
            <Helmet>
                <title>Users | MUI Dash</title>
            </Helmet>
            <Container maxWidth='lg' disableGutters>
                <UserHeader />
                <BoxStyle
                    sx={{
                        width: less400 ? 300 : less480 ? 360 : less600 ? 540 : less768 ? 440 : '100%',
                    }}
                >
                    <UserTable />
                </BoxStyle>
            </Container>
        </>
    );
};

export default User;
