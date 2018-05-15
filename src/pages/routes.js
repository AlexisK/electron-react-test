import HomePage from './home';
import SchedulePage from './schedule';
import DefaultTemplate from '~/templates/default';

const routes = [
    {
        path: '/',
        exact: true,
        title: 'Home page',
        template: DefaultTemplate,
        component: HomePage
    },
    {
        path: '/schedule',
        exact: true,
        title: 'Schedule',
        template: DefaultTemplate,
        component: SchedulePage
    }
];

export default routes;
