// components/MetaTags.js
import Head from "next/head";

export default function MetaTags({
                                     title = "My Website",
                                     description = "Welcome to my portfolio",
                                     image = "https://www.yazan-ali.net/social-preview.png",
                                     url = "https://www.yazan-ali.net",
                                 }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}
