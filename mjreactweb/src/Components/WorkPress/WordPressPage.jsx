import React, { useEffect, useState } from 'react';
import "./style.scss"
const WordPressPage = ({ pageId }) => {
    const [page, setPage] = useState(null);

    useEffect(() => {
        if (page === null) {
            fetch(`https://mediajenie.com/wp-json/wp/v2/pages/2564`)
                .then(response => response.json())
                .then(data => setPage(data))
                .catch(error => console.error('Error fetching page:', error));
        }
    }, [pageId]);

    if (!page) return <div>Loading...</div>;

    return (
        <div className='WordPress'>
            <h1>{page.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
    );
};

export default WordPressPage;
