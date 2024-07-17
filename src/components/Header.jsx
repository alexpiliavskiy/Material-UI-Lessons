import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = ({handleCart, orderLen}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                variant="h6"
                component="span"
                sx={{flexGrow: 1}}
                >My Shop</Typography>
                <IconButton
                color="inherit"
                onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;