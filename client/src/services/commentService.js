import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (id) => {
    const query = new URLSearchParams({
        where: `reviewId="${id}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (reviewId, content) => {
    const newComment = await request.post(baseUrl, {
        reviewId,
        content,
    });

    return newComment;
};
