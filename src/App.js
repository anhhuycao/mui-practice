import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import User from './pages/User';
import Blog from './pages/Blog';
import Login from './pages/Login';
import ErrorPage from './pages/404';
import Register from './pages/Register';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import IntroModal from './components/UI/IntroModal';
import DashboardLayout from './layout/DashboardLayout';
import './App.css';

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => setShowModal(!showModal);

    useEffect(() => setShowModal(true), []);

    return (
        <>
            <IntroModal showModal={showModal} onToggle={toggleShowModal} />
            <DashboardLayout>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/dashboard' />
                    </Route>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/user' component={User} />
                    <Route path='/product' component={Products} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/404' component={ErrorPage} />
                    <Route path='*' component={ErrorPage} />
                </Switch>
            </DashboardLayout>
        </>
    );
};

export default App;
