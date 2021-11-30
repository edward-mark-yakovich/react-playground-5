import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {isEmptyObj} from './../../utils/helpers';

export const Home = (props) => {
    const [page, setPage] = useState(1);

    let contentIntroData = {};
    
    if (props.staticContext) {
        contentIntroData = props.staticContext;
    } else if (typeof window !== "undefined" && !isEmptyObj(window.initial_state?.['home'] || {})) {
        contentIntroData = window.initial_state['home'];
    }

    const [contentIntro, setContentIntro] = useState(contentIntroData);

    useEffect(async () => {
        if (isEmptyObj(contentIntro)) {
            const data = await fetchData();
            
            setContentIntro(data);
        }
    }, []);

    return (
        <div className="home">

            <div className="home-heading">
                <h1>Home</h1>
                <p>Playing with React stuff... SSR</p>
            </div>

            <div className="home-intro-top">
                <div>
                    <button type="button" onClick={() => setPage(page + 1)}>Set page</button>
                    <span> = {page} </span>
                </div>
            </div>

            {!isEmptyObj(contentIntro) &&
                <div className="home-intro">
                    <div className="grid">
                        <div className="home-intro__img">
                            <img src={contentIntro?._embedded?.['wp:featuredmedia']?.['0'].source_url || ''} />
                        </div>

                        <div className="home-intro__content">
                            <h3
                                className="home-intro__heading"
                                dangerouslySetInnerHTML={{
                                    __html: contentIntro?.title?.rendered || ''
                                }}
                            />

                            <div
                                className="home-intro__copy"
                                dangerouslySetInnerHTML={{
                                    __html: contentIntro?.excerpt?.rendered || ''
                                }}
                            />
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export async function fetchData() {
    return axios.get( 'http://chinonthetank.com/wp-json/wp/v2/pages?_embed&slug=about' )
        .then( response => {
            return response.data[0];
        }
    );
}
