export const formatDate = (inputDate: string) => {
    const [, month, day] = inputDate.split("-");
    return `${+day} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][+month - 1]}`;
};