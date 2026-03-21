import AccountLayout from "@/views/account/layout/AccountLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AccountLayout>{children}</AccountLayout>;
}
