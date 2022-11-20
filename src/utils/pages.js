export const getPageCount = (totalCount, limit) =>{
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) =>{
    let resalt = [];
    for (let i=0; i < totalPages; i++){ ///сделать через useMemo и вынести не в функцию а в новый хук usePlagination
        resalt.push(i+1)
    }
    return resalt
}