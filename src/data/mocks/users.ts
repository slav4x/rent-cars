export type UserAccountStatus =
    | "inactive"
    | "pending"
    | "verified"
    | "rejected";

export type UserAccount = {
    id: string;
    fullName: string;
    avatar: string;
    city: string;
    email: string;
    status: UserAccountStatus;
};

export const userStatusLabel: Record<UserAccountStatus, string> = {
    inactive: "Не активирован",
    pending: "На проверке",
    verified: "Подтвержден",
    rejected: "Отклонен",
};

export const users: UserAccount[] = [
    {
        id: "73292",
        fullName: "Иван Иванов",
        avatar: "/img/photo.jpg",
        city: "Москва",
        email: "ivan@example.com",
        status: "inactive",
    },
    {
        id: "73293",
        fullName: "Анна Смирнова",
        avatar: "/img/photo.jpg",
        city: "Сочи",
        email: "anna@example.com",
        status: "pending",
    },
    {
        id: "73294",
        fullName: "Максим Петров",
        avatar: "/img/photo.jpg",
        city: "Санкт-Петербург",
        email: "max@example.com",
        status: "verified",
    },
    {
        id: "73295",
        fullName: "Елена Волкова",
        avatar: "/img/photo.jpg",
        city: "Мурманск",
        email: "elena@example.com",
        status: "rejected",
    },
    {
        id: "73296",
        fullName: "Дмитрий Орлов",
        avatar: "/img/photo.jpg",
        city: "Москва",
        email: "dmitry@example.com",
        status: "verified",
    },
    {
        id: "73297",
        fullName: "Мария Белова",
        avatar: "/img/photo.jpg",
        city: "Сочи",
        email: "maria@example.com",
        status: "pending",
    },
];
