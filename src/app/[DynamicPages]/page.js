"use client"
import { useRouter, usePathname } from 'next/navigation';

import HomePage from '../components/home/HomePage';
import Contributors from '../components/contributors/Contributors';
import Downloads from '../components/downloads/Downloads';
import Mirror from '../components/mirrors/Mirror';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

const Page = () => {
    const router = useRouter();

    const pagesFactory = {
        Home: HomePage,
        Contributors: Contributors,
        Downloads: Downloads,
        Mirror: Mirror,
    }
    const page = usePathname()
    const curPage = page.split('/')[1].toString()
    var ContentComponent = "";

    for (const name in pagesFactory) {
        if (page.split('/')[1].toString() === name.toString()) {
            ContentComponent = pagesFactory[name];
            break; // Terminate the loop if a match is found
        }
    }

    return (
        <main className='h-screen w-screen overflow-x-hidden' >
            <Navigation />
            {ContentComponent && ContentComponent != "" ? <ContentComponent /> : router.push("/Home")}
            <Footer />
        </main>
    );
}

export default Page;
