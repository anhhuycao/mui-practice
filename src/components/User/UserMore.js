import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { styled } from '@material-ui/styles';
import { MoreVert } from '@mui/icons-material';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';

const MenuStyle = styled(Menu)(({ theme }) => ({
    '& .MuiMenuItem-root': {
        color: theme.palette.text.secondary,
    },
    '& .MuiListItemIcon-root': {
        color: theme.palette.text.secondary,
        minWidth: 0,
        marginRight: theme.spacing(3),
    },
}));

const UserMore = () => {
    const ref = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <IconButton size='small' aria-label='Edit User' ref={ref} onClick={() => setShowMenu(true)}>
                <MoreVert fontSize='small' />
            </IconButton>
            <MenuStyle
                open={showMenu}
                anchorEl={ref.current}
                onClose={() => setShowMenu(false)}
                PaperProps={{ sx: { width: 200, maxWidth: '100%' } }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem onClick={() => setShowMenu(false)}>
                    <ListItemIcon>
                        <RiDeleteBin6Line />
                    </ListItemIcon>

                    <ListItemText primary='Delete' primaryTypographyProps={{ variant: 'body2' }} />
                </MenuItem>

                <MenuItem component={RouterLink} to='#' onClick={() => setShowMenu(false)}>
                    <ListItemIcon>
                        <MdModeEdit />
                    </ListItemIcon>

                    <ListItemText primary='Edit' primaryTypographyProps={{ variant: 'body2' }} />
                </MenuItem>
            </MenuStyle>
        </>
    );
};

export default UserMore;
