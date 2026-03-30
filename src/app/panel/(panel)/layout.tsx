import PanelLayout from "@/views/panel/layout/PanelLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <PanelLayout>{children}</PanelLayout>;
}
