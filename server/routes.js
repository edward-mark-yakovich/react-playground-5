const { Counter } = require( '../src/components/counter' );
const { Post } = require( '../src/components/post' );
const { Home, fetchData } = require( '../src/components/home' );

module.exports = [
    {
        path: '/',
        exact: true,
        component: Counter,
    },
    {
        path: '/post',
        exact: true,
        component: Post,
    },
    {
        path: '/home',
        exact: true,
        component: Home,
        dataFetch: fetchData
    }
];