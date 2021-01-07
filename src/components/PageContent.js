import React, { useState, useEffect } from 'react';

const pageContent = ({ pageName }) => {
    const [pageInfo, setPageInfo] = useState({ page_title: '', page_section: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/pagecontent/${pageName}`);
            const body = await result.json();
            setPageInfo(body);
        }
        fetchData();
    }, [pageName]);

    return (
        <>
            <h1>{pageInfo.page_title}</h1>
            {pageInfo['page_section'].map((sections, key) => (
                (sections['type'] == 'text') ? <p id={key}>{sections['section']}</p> : ''

            ))}
        </>
    )
};

export default pageContent;