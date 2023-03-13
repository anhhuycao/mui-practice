import { Box } from '@mui/material';

const DashCardBox = (props) => {
    return (
        <Box
            sx={{
                padding: { xs: 2, sm: 3 },
                paddingBottom: { xs: 1, sm: 1 },
            }}
        >
            {props.children}
        </Box>
    );
};

export default DashCardBox;
