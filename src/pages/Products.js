import { Container, Typography } from '@mui/material';
import { styled } from '@material-ui/styles';
import { Helmet } from 'react-helmet';

// components
import FixedCartCounter from '../components/Product/FixedCartCount';
import ProductActionBar from '../components/Product/ProductActionBar';
import ProductList from '../components/Product/ProductList';

// style
const ContainerStyle = styled(Container)(({ theme }) => ({
    padding: 0,
    paddingTop: theme.spacing(2),

    // product header
    // h3
    '& .productHeader': {
        fontSize: 30,
        fontWeight: 500,
    },
}));

const Products = () => {
    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Products | MUI Dash</title>
            </Helmet>

            {/* Fixed counter for cart */}
            <FixedCartCounter itemAmout='0' />

            {/* main container */}
            <ContainerStyle maxWidth='lg'>
                {/* Header */}
                <Typography variant='h3' className='productHeader'>
                    Products
                </Typography>

                {/* Action bar */}
                <ProductActionBar />

                {/* Products list */}
                <ProductList />
            </ContainerStyle>
        </>
    );
};

export default Products;
