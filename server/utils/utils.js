/* Generate a code on 4 digits */
const generateCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

export default generateCode;