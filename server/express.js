const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );
const React = require( 'react' );
const ReactDOMServer = require( 'react-dom/server' );
const { StaticRouter, matchPath } = require( 'react-router-dom' );

// create express application
const app = express();

// import App component
const { App } = require( '../src/components/app' );

// import routes
const routes = require( './routes' );

// serve static assets
app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../dist' ) ) );

// for any other requests, send `index.html` as a response
app.use( '*', async ( req, res ) => {

    // get matched route
    const matchRoute = routes.find( route => matchPath( req.originalUrl, route ) );

    // fetch data of the matched component
    // difference of how class vs functional component can handle this
    let componentData = null;

    if (matchRoute !== undefined && typeof matchRoute.component.fetchData === 'function' ) {
        componentData = await matchRoute.component.fetchData();
    } else if (matchRoute !== undefined && matchRoute.dataFetch ) {
        componentData = await matchRoute.dataFetch();
    }

    // read `index.html` file
    let indexHTML = fs.readFileSync( path.resolve( __dirname, '../dist/index.html' ), {
        encoding: 'utf8',
    } );

    // get HTML string from the `App` component
    // send "componentData" into React as router context Props "staticContext" so its available when generating the initial HTML string
    let appHTML = ReactDOMServer.renderToString(
        <StaticRouter location={ req.originalUrl } context={ componentData }>
            <App />
        </StaticRouter>
    );

    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace( '<div id="app"></div>', `<div id="app">${ appHTML }</div>` );

    if (componentData) {
        const stateTerm = 'var initial_state = {';
        const insertPosition = indexHTML.indexOf(stateTerm) + stateTerm.length;
        const stringDataToAdd = `${matchRoute.path.substring(1)}: ${ JSON.stringify( componentData ) }`;

        indexHTML = [indexHTML.slice(0, insertPosition), stringDataToAdd, indexHTML.slice(insertPosition)].join('');
    }

    // set header and status
    res.contentType( 'text/html' );
    res.status( 200 );

    return res.send( indexHTML );
} );

// run express server on port 9000
app.listen( '9000', () => {
    console.log( 'Express server started at http://localhost:9000' );
} );