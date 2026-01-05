export const validatePassword = (password, confirmPassword) => {
    const isValidLength = password.length >= 8 && password.length <= 255;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*.?"{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNoSpaces = /\S+/.test(password);
    const isMatched = password === confirmPassword;

    const errors = [];

    if (!isValidLength) {
        errors.push("Пароль должен занимать от 8 до 255 символов");
    }

    if (!hasNumber) {
        errors.push("Пароль должен содержать хотя бы одну цифру.");
    }

    if (!hasUpperCase) {
        errors.push("Пароль должен содержать хотя бы одну заглавную букву.");
    }

    if (!hasLowerCase) {
        errors.push("Пароль должен содержать хотя бы одну прописную букву.");
    }

    if (!hasSpecialChar) {
        errors.push("Пароль должен содержать хотя бы один спецсимвол.");
    }

    if (!hasNoSpaces) {
        errors.push("Пароль не должен содержать пробелов.");
    }

    if (!isMatched) {
        errors.push("Пароли не совпадают.");
    }
    const isValid = errors.length === 0;

    return {
        valid: isValid,
        messages: isValid ? ["Пароль подходит!"] : errors,
    };
};

export const validateName = (name) => {
    const isValidLength = name.length >= 2 && name.length <= 100;
    const onlyLetters = /^[A-Za-z]+$/.test(name);

    const errors = [];

    if (!isValidLength) {
        errors.push("Длина поля должна занимать от 2 до 100 символов");
    }
    if (!onlyLetters) {
        errors.push("Поле должно содержать только буквы.");
    }

    const isValid = errors.length === 0;

    return {
        valid: isValid,
        messages: isValid ? ["Имя подходит!"] : errors,
    };
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    console.log(emailRegex);
    return {
        valid: emailRegex,
        messages: emailRegex ? ["Email подходит!"] : ["Неверный формат email."],
    };
};
