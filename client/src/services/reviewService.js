import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/books'

export const getAll = async () => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users`,
    });
    
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getOne = async (reviewId) => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}/${reviewId}?${query}`, );

    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result.sort(e => e._creationDate).reverse().slice(0, 3);
}

export const create = async (reviewData) => {
    const result = await request.post(baseUrl, reviewData);

    return result;
};

export const edit = async (reviewId, reviewData) => {
    const result = await request.put(`${baseUrl}/${reviewId}`, reviewData);

    return result;
};

export const remove = async (reviewId) => request.remove(`${baseUrl}/${reviewId}`);