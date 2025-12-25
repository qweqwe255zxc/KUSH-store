export const formatPrice = (price) => {
    // const newPrice = price
    //     .toString()
    //     .split("")
    //     .reverse()
    //     .reduce((acc, digit, i) => {
    //         if (i % 3 === 0 && i !== 0) {
    //             acc += " ";
    //         }
    //         acc += digit;
    //         return acc;
    //     })
    //     .split("")
    //     .reverse()
    //     .join("");
    // return newPrice;

    return new Intl.NumberFormat('ru-RU').format(price);
};