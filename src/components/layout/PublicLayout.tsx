import Header from "./Header";
import Footer from "./Footer";
import Fixed from "./Fixed";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Fixed />
            <Footer />
        </>
    );
}
