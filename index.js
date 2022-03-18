/* Variabel global */

const daftarPertanyaan = [
    'Apa itu kebenaran',
    'Apa itu pengetahuan',
    'Apa itu keindahan',
    'Apa itu kebahagiaan',
    'Apa itu kenyataan',
    'Apa itu kebaikan',
    'Apa itu kejahatan',
    'Apa yang membuat suatu tindakan yang baik',
    'Kenapa kebaikan lebih cenderung dikejar dibandingkan kejahatan',
    'Apa itu moralitas',
    'Mengapa manusia harus bermoral',
    'Apa manusia adalah tolok ukur segala sesuatu'
]

const acakPertanyaan = arr => {
    const indeksAcak = Math.floor(Math.random() * arr.length)
    let result = arr[indeksAcak] + '?'
    return result
}

console.log(acakPertanyaan(daftarPertanyaan))