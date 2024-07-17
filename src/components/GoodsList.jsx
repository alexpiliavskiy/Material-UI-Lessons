import React from 'react';
import GoodsItem from './GoodsItem';
import { Grid, Typography } from "@mui/material";

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        <Grid container spacing={2} sx={{ mb: "2rem" }}>
            {goods.length > 0 ? (
                goods.map((item) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))
            ) : (
                <Typography
                    sx={{ fontWeight: 700, color: "red" }}
                >
                    {goods.length === 0 ? "There are no products!" : "Loading..."}
                </Typography>
            )}
        </Grid>
    );
};

export default GoodsList;
