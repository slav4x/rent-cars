import { cars } from "./cars";

export type BookingStatus = "pending" | "upcoming" | "history";
export type SettingsSection = "profile" | "verification" | "privacy";

export type Booking = {
    id: string;
    status: BookingStatus;
    carId: string;
    carTitle: string;
    pickupAt: string;
    returnAt: string;
    city: string;
    totalPrice: number;
};

export const bookingStatusMeta: Record<
    BookingStatus,
    {
        title: string;
        description: string;
        badge: string;
    }
> = {
    pending: {
        title: "Незавершенные бронирования",
        description:
            "Черновики и бронирования, которые еще требуют подтверждения.",
        badge: "Требует действия",
    },
    upcoming: {
        title: "Предстоящие бронирования",
        description: "Активные будущие поездки с подтвержденными датами.",
        badge: "Подтверждено",
    },
    history: {
        title: "История бронирования",
        description: "Завершенные аренды и архив предыдущих заказов.",
        badge: "Завершено",
    },
};

export const settingsSectionMeta: Record<
    SettingsSection,
    {
        title: string;
        description: string;
    }
> = {
    profile: {
        title: "Аккаунт",
        description: "ФИО, фото профиля и дата рождения.",
    },
    verification: {
        title: "Верификация",
        description: "Загрузка документов и статус проверки.",
    },
    privacy: {
        title: "Конфиденциальность",
        description: "Смена пароля, почты и номера телефона.",
    },
};

export const accountProfile = {
    fullName: "Иван Петров",
    birthDate: "14 мая 1992",
    email: "ivan.petrov@example.com",
    phone: "+7 (999) 123-45-67",
    avatar: "/img/avatar.png",
};

export const accountBookings: Booking[] = [
    {
        id: "BR-1001",
        status: "pending",
        carId: "1",
        carTitle: "Toyota Camry 2021",
        pickupAt: "18 марта 2026, 10:00",
        returnAt: "21 марта 2026, 10:00",
        city: "Новосибирск",
        totalPrice: 16500,
    },
    {
        id: "BR-1003",
        status: "upcoming",
        carId: "2",
        carTitle: "BMW M4 Competition",
        pickupAt: "04 апреля 2026, 09:00",
        returnAt: "07 апреля 2026, 09:00",
        city: "Сочи",
        totalPrice: 45000,
    },
    {
        id: "BR-1004",
        status: "upcoming",
        carId: "10",
        carTitle: "Volkswagen ID.4",
        pickupAt: "16 апреля 2026, 11:00",
        returnAt: "20 апреля 2026, 11:00",
        city: "Краснодар",
        totalPrice: 38000,
    },
    {
        id: "BR-100",
        status: "upcoming",
        carId: "10",
        carTitle: "Volkswagen ID.4",
        pickupAt: "16 апреля 2026, 11:00",
        returnAt: "20 апреля 2026, 11:00",
        city: "Краснодар",
        totalPrice: 38000,
    },
    {
        id: "BR-0995",
        status: "history",
        carId: "5",
        carTitle: "Audi A6 Quattro",
        pickupAt: "10 февраля 2026, 10:00",
        returnAt: "13 февраля 2026, 10:00",
        city: "Москва",
        totalPrice: 33000,
    },
    {
        id: "BR-0988",
        status: "history",
        carId: "3",
        carTitle: "Tesla Model 3",
        pickupAt: "20 января 2026, 14:00",
        returnAt: "23 января 2026, 14:00",
        city: "Санкт-Петербург",
        totalPrice: 27000,
    },
];

export const favoriteCarIds = ["2", "4", "11"];

export const supportContacts = [
    { label: "Телефон", value: "+7 (964) 396-18-40" },
    { label: "Email", value: "support@vsemprokat.ru" },
    { label: "Telegram", value: "@vsemprokat_support" },
    { label: "Режим работы", value: "Ежедневно, 09:00-21:00" },
];

export const bookingRules = [
    "Для подтверждения бронирования пользователь заполняет профиль и прикладывает документы в разделе верификации.",
    "Изменение дат аренды и класса автомобиля согласовывается с менеджером до фактической выдачи машины.",
    "Возврат автомобиля осуществляется в согласованное время и с тем же уровнем топлива, который был указан в акте приема-передачи.",
];

export const verifiedDocuments = [
    { label: "Паспорт", status: "Проверен" },
    { label: "Водительское удостоверение", status: "Проверен" },
    { label: "Селфи с документом", status: "Ожидает загрузки" },
];

export const favoriteCars = cars.filter((car) =>
    favoriteCarIds.includes(car.id),
);

export function getBookingCar(carId: string) {
    return cars.find((car) => car.id === carId);
}
