import Link from 'next/link';
import { Fragment } from "react";

const NewsPage = () => {
    return (
        <Fragment>
            <h1>news page</h1>
            <ul>
                <li><Link href="/news/next-js">NextJS</Link></li>
                <li><Link href="/news/react-js">ReactJS</Link></li>
                <li><Link href="/news/three-js">ThreeJS</Link></li>
                <li><Link href="/news/vue-js">VueJS</Link></li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;