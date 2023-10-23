import { MetaData } from 'next';

export const metadata: MetaData = { 
    title: "About"
};

export default function About(params: {title : string}) {

    return <h1>Select {params.title}</h1>;
}