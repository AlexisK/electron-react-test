import HomePage from './home';
import DefaultTemplate from '~/templates/default';

const routes = [
    {
        path: '/',
        exact: true,
        title: 'Home page',
        template: DefaultTemplate,
        component: HomePage
    }
];

export default routes;
