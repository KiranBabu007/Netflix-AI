export const validate = (email, password,name = null ) => {
    const isNameValid = name === null || /^[a-zA-Z\s'-]{2,50}$/.test(name);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isNameValid) {
        return "Name is invalid"
    }
    if (!isEmailValid) {
        return "Email is invalid"
    }
    if (!isPasswordValid) {
        return "Password is invalid"
    }
    return null;
};
