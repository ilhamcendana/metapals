const renderHoles = () => {
    const moleContainer = document.getElementById('mole-container');
    new Array(3).fill(undefined).map((_, i) => {
        const newEl = document.createElement("div");
        newEl.innerHTML = `<div id="hole-${i}" class="w-44 h-44 bg-black rounded-full cursor-pointer p-4">
        <img class='w-full hidden' id="mole-${i}" src="https://metapals.github.io/frontend-interview-test-lite/assets/mole.60ea17ce.png" />
        </div>`;
        moleContainer.appendChild(newEl);
    });
}

window.onload = () => {
    {/* RENDER HOLES */ }
    renderHoles();
    {/* ========================== END: RENDER HOLES ==========================*/ }

    const btnStart = document.getElementById("btn-start");
    const click = document.getElementById("counter-clicks");
    const timerHtml = document.getElementById("timer");
    const getHole1 = document.getElementById("hole-0");
    const getHole2 = document.getElementById("hole-1");
    const getHole3 = document.getElementById("hole-2");

    const getMole1 = document.getElementById("mole-0");
    const getMole2 = document.getElementById("mole-1");
    const getMole3 = document.getElementById("mole-2");

    let counter = 0;
    let timer = 0;

    click.innerText = 0
    timerHtml.innerText = '0 second'

    const increaseCounter = () => {
        if (timer > 0) {
            counter += 1;
            click.innerText = counter;
        }
    }

    getHole1.onclick = () => increaseCounter();
    getHole2.onclick = () => increaseCounter();
    getHole3.onclick = () => increaseCounter();


    const intervalFunc = () => {
        timer += 1;
        timerHtml.innerText = `${timer} second`;

        const randomMath = Math.random().toFixed(2);

        if (randomMath > .6) {
            getMole1.classList.toggle("hidden")
            setTimeout(() => getMole1.classList.toggle("hidden"), 300);
        } else if (randomMath > .3) {
            getMole2.classList.toggle("hidden")
            setTimeout(() => getMole2.classList.toggle("hidden"), 300);
        } else {
            getMole3.classList.toggle("hidden")
            setTimeout(() => getMole3.classList.toggle("hidden"), 300);
        }

    }


    btnStart.addEventListener('click', (e) => {
        btnStart.disabled = true;
        ['bg-gray-400', 'hover:bg-gray-400', 'active:scale-[1]']
            .forEach(i => btnStart.classList.add(i))

        setInterval(intervalFunc, 1000)
    })

    getMole1.addEventListener('click', () => {        
        alert(`You win at ${counter} clicks and ${timer} seconds`);
        window.location.reload();
    });
    getMole2.addEventListener('click', () => {        
        alert(`You win at ${counter} clicks and ${timer} seconds`);
        window.location.reload();
    });
    getMole3.addEventListener('click', () => {        
        alert(`You win at ${counter} clicks and ${timer} seconds`);
        window.location.reload();
    });
}