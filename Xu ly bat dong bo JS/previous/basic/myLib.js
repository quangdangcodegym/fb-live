export function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total;
}

export function power(x, y) {
    return x ** y;
}

export function abs(n) {
    return n < 0 ? n * (-1) : n;
}

class Helper {
    static formatCurrency(numbers) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numbers)
    }
}



export default power;

// trong 1 file js thì
// 1. chỉ được export default 1 lần
// 2. nếu muốn export thêm thì ko được có chữ default