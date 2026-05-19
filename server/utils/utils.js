/* Generate a code on 4 digits */
const generateCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

export default generateCode;

export const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}