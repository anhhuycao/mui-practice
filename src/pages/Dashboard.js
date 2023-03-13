import { Grid, Typography } from '@mui/material';
import { styled } from '@material-ui/styles';
import { Helmet } from 'react-helmet';
import ChartCurrentSubject from '../components/Dashboard/ChartCurrentSubject';
import ChartSiteVisits from '../components/Dashboard/ChartSiteVisits';
import ConversionRate from '../components/Dashboard/ConversionRate';
import CurrentVisits from '../components/Dashboard/CurrentVisits';
import InfoCards from '../components/Dashboard/InfoCards';
import NewsUpdate from '../components/Dashboard/NewsUpdate';
import OrderTimeline from '../components/Dashboard/OrderTimeline';
import SocialTraffic from '../components/Dashboard/SocialTraffic';
import Tasks from '../components/Dashboard/Tasks';

// grid container style
const GridContainerStyle = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard | MUI Dash</title>
            </Helmet>

            <Typography variant='h6' component='h2'>
                Hi, Welcome in MUI Dash.
            </Typography>

            {/* Info Cards */}
            <InfoCards />

            <GridContainerStyle container spacing={3}>
                {/* Site visits chart */}
                <Grid item xs={12} md={6} lg={8}>
                    <ChartSiteVisits />
                </Grid>

                {/* Current Visits */}
                <Grid item xs={12} md={6} lg={4}>
                    <CurrentVisits />
                </Grid>

                {/* Conversion Rates */}
                <Grid item xs={12} md={6} lg={8}>
                    <ConversionRate />
                </Grid>

                {/* Current Subject */}
                <Grid item xs={12} md={6} lg={4}>
                    <ChartCurrentSubject />
                </Grid>

                {/* News Update */}
                <Grid item xs={12} md={6} lg={8}>
                    <NewsUpdate />
                </Grid>

                {/* Order Timeline */}
                <Grid item xs={12} md={6} lg={4}>
                    <OrderTimeline />
                </Grid>

                {/* Traffic by Site */}
                <Grid item xs={12} md={6} lg={4}>
                    <SocialTraffic />
                </Grid>

                {/* Traffic by Site */}
                <Grid item xs={12} md={6} lg={8}>
                    <Tasks />
                </Grid>
            </GridContainerStyle>
        </>
    );
};

export default Dashboard;
