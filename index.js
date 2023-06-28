let counter_view = document.getElementById('counter-view');
let increase_btn = document.getElementById('increase-btn');
let save_btn = document.getElementById('save-btn');
let count_log = document.getElementById('count-log');

let count = 0;

function Increase(){
    count += 1;
    counter_view.textContent = count;
    console.log(count, counter_view)
}

function Save(){
    count_log.textContent += count + ' - ';
    counter_view.textContent = 0;
    count=0;
}
