
// все общее что есть у пользователей
interface User {
    getSessionID(): ID;
}

// все что относится к доступу
interface UserWithAccess{
    hasAccess(action: Action): boolean;
}

// все что относится к профилю
interface UserWithProfile {
    updateProfile(data: Profile): CommandStatus;
}

class BaseUser implements User{
    constructor() {
    }

    getSessionID(): ID {
        return this.sessID;
    }
}

// Обычному пользователю добавляем функционал работы с профилем и доступом
class RegularUser extends BaseUser implements UserWithAccess, UserWithProfile{
    constructor() {
        super();
    }
    hasAccess(action: Action): boolean {
        return access;
    }

    updateProfile(data: Profile): CommandStatus {
        return status;
    }
}

// Гостю достаточно описать доступы
class Guest extends BaseUser implements UserWithAccess{
    constructor() {
        super();
    }

    hasAccess(action: Action): boolean {
        return access;
    }
}
