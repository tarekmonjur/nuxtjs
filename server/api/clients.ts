export default defineEventHandler(async (event) => {
    await new Promise((resolve, reject) => {
        // setTimeout(() => {reject('ok')}, 2000);
        setTimeout(() => {resolve('ok')}, 2000);
    });
    return [
        {
            id: 1,
            name: 'Tarek',
            address: 'Feni'
        },
        {
            id: 2,
            name: 'Monjur',
            address: 'Feni'
        },
        {
            id: 3,
            name: 'Muntasir',
            address: 'Dhaka'
        },
        {
            id: 4,
            name: 'Ahammed',
            address: 'Dhaka'
        },
    ]
  });