import Link from 'next/link';
import { Fragment } from "react";

const HomePage = () => {
    return (
        <Fragment>
            <h1>home page</h1>
            <Link href="/news">check the news</Link>
        </Fragment>
    );
}

export default HomePage;