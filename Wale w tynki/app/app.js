let texts = document.querySelector('.texts');
console.log(texts);
let alltexts_table = document.querySelectorAll('.text');
console.log(alltexts_table);

let active_text = document.querySelector('#active');
console.log(active_text);

let inactive_text = document.querySelectorAll('#inactive');
console.log(inactive_text);

console.log('___________________________________________________')

// BREAK

document.querySelectorAll("karuzela").forEach(karuzela => {
    const przedmioty = karuzela.querySelectorAll('.text')
    const Dalej = Array.from(przedmioty, () => { 
        return `<button id="button"> DALEJ </button>`;
    });

    karuzela.insertAdjacentHTML("beforeend", `
    <div class="button">
        ${buttonHTML.join()}
    </div>
    `);

    console.log(Dalej);
});