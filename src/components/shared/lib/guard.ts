export const isNumberString = (value: string): boolean => {
    const parsed = Number(value);
    return !isNaN(parsed);
};
