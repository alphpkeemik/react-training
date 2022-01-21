export const apiCall  =  () : Promise<number> =>  {
    const promise: Promise<number> = new Promise((resolve) => {
        setTimeout(()  => resolve(Math.random() * 10000), 3000)
    })
    return promise;
}