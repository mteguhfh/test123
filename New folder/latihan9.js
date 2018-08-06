let andi = {
    nama: 'Andi',
    usia: 24,
    job: 'PNS',
    obj: {
        keren: 'keren'
    }
}
var { nama, usia, job, obj } = andi;
var { keren } = obj;
// atau var { keren } = andi.obj;
console.log(nama);
console.log(usia);
console.log(job);

