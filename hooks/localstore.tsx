export default function store(
    items: Array<[string, any]>,
    stringify?: boolean
) {
    items.forEach(([key, value]) => {
        var value = stringify ? JSON.stringify(value) : value;

        localStorage.setItem(key, value)
    });
}