import { Footer } from "./Footer";


interface LayoutProps {
    children: React.ReactNode;
}

const Layout  = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 p-4">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
