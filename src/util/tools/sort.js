import {get} from 'lodash';

const desc = (a, b, attribute) => {
    if (get(b, attribute) < get(a, attribute)) return -1;
    if (get(b, attribute) > get(a, attribute)) return 1;

    return 0;
}

const asc = (a, b, attribute) => {
    if (get(b, attribute) > get(a, attribute)) return -1;
    if (get(b, attribute) < get(a, attribute)) return 1;

    return 0;
}

const getComparator = (order, attribute) => {
    return order === 'desc'
        ? (a, b) => desc(a, b, attribute)
        : (a, b) => asc(a, b, attribute);
}

export default (array, order, attribute) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    const comparator = getComparator(order, attribute);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
}