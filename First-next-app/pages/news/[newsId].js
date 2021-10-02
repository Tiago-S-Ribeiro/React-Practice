import { useRouter } from'next/router';

const WhateverPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    // send a request to the backend API
    // to fetch the news item with newsId

    return (
        <h1>{newsId} Page</h1>
    );
}

export default WhateverPage;