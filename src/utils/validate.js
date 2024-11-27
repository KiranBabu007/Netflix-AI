export const validate = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid) {
        return "Email is invalid"
    }
    if (!isPasswordValid) {
        return "Password is invalid Make sure it has at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
    }
    return null;
};
