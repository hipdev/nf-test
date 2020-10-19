import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <title>{title}</title>
      </Head>
      <header className="relative shadow-sm">
        <div className="flex items-center justify-between container mx-auto py-4 px-4">
          <div className="flex items-center">
            <img className="w-6 sm:w-8 mr-4" src="/static/favicon.ico" />
            <h3 className="text-sm sm:text-md font-medium">Worker's compensation application</h3>
          </div>

          <Link href="#profile">
            {/* Test link, a future profile of this test hahaha */}
            <a className="text-xl text-blue-500">
              <img className="w-10 h-10 rounded-full " src="/static/julian.jpg" />
            </a>
          </Link>
        </div>
      </header>
      <main className="bg-gray-200 pt-10 sm:pt-12 xl:pt-20 pb-20 sm:pb-0">
        <div className="container mx-auto">{children}</div>
      </main>
      <footer className="p-3 text-white text-center bg-gray-800 text-sm">
        <span>© Copyright 2020 Newfront Insurance – License #0L76672</span>
      </footer>
    </>
  );
};

export default Layout;
