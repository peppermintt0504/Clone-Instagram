export const emailCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

    return _reg.test(email);
}

export const IDCheck = (ID) => {
    let _reg = /^[-_.0-9a-zA-Z]{6,15}$/

    return _reg.test(ID);
}
export const pwdCheck = (pwd) => {
    let _reg = /^[-_.0-9a-zA-Z]{6,15}$/

    return _reg.test(pwd);
}