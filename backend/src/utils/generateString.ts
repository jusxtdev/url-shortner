const generateString = () => {
    const length = 7;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const randomValues = new Uint8Array(length)

    crypto.getRandomValues(randomValues)

    let result = ''
    for (let i = 0; i < length; i++) {
        result += charset[randomValues[i] % 62];
    }
    return result;
}

export default generateString;
