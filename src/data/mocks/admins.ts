export type AdminRole =
    | "superadmin"
    | "admin"
    | "moderator"
    | "content-manager";

export type AdminAccount = {
    id: string;
    fullName: string;
    avatar: string;
    email: string;
    role: AdminRole;
};

export const adminRoleLabel: Record<AdminRole, string> = {
    superadmin: "Суперадмин",
    admin: "Администратор",
    moderator: "Модератор",
    "content-manager": "Контент-менеджер",
};

export const admins: AdminAccount[] = [
    {
        id: "ADM-1001",
        fullName: "Слава Кузнецов",
        avatar: "/img/photo.jpg",
        email: "slava@vsemprokat.ru",
        role: "superadmin",
    },
    {
        id: "ADM-1002",
        fullName: "Анна Смирнова",
        avatar: "/img/photo.jpg",
        email: "anna@vsemprokat.ru",
        role: "admin",
    },
    {
        id: "ADM-1003",
        fullName: "Максим Орлов",
        avatar: "/img/photo.jpg",
        email: "max@vsemprokat.ru",
        role: "moderator",
    },
    {
        id: "ADM-1004",
        fullName: "Елена Белова",
        avatar: "/img/photo.jpg",
        email: "elena@vsemprokat.ru",
        role: "content-manager",
    },
    {
        id: "ADM-1005",
        fullName: "Игорь Петров",
        avatar: "/img/photo.jpg",
        email: "igor@vsemprokat.ru",
        role: "admin",
    },
    {
        id: "ADM-1006",
        fullName: "Мария Соколова",
        avatar: "/img/photo.jpg",
        email: "maria@vsemprokat.ru",
        role: "moderator",
    },
];
