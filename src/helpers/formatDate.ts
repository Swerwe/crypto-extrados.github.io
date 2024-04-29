import moment from 'moment';

export const formatDate = (inputDate: string):string => {
    const date = moment(inputDate, 'YYYY-MM-DD');
    if (!date.isValid()) {
        throw new Error('Invalid date format');
    }
    return date.format('D MMM');
};