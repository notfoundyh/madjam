document.addEventListener('DOMContentLoaded', () => {
    const textSection = document.getElementById('text-section');
    const floatingButton = document.getElementById('floating-button');

    if (textSection && floatingButton) {
        textSection.addEventListener('mousemove', (e) => {
            const rect = textSection.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            floatingButton.style.left = `${mouseX}px`;
            floatingButton.style.top = `${mouseY}px`;
            floatingButton.style.opacity = '1';
        });

        textSection.addEventListener('mouseleave', () => {
            floatingButton.style.opacity = '0';
        });
    } else {
        console.error("Elemento(s) não encontrado(s). Verifica se os IDs 'text-section' e 'floating-button' estão corretos.");
    }
});


const words = document.querySelectorAll('.changing-word');
let currentIndex = 0;
let isScrolling = false;

function changeWord() {
    if (isScrolling) return;
    isScrolling = true;

    const currentWord = words[currentIndex];
    currentWord.classList.remove('active');
    currentWord.classList.add('prev');

    currentIndex = (currentIndex + 1) % words.length;

    const nextWord = words[currentIndex];
    nextWord.classList.add('active');

    setTimeout(() => {
        currentWord.classList.remove('prev');
        isScrolling = false;
    }, 800);
}

document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeWord();
    }
});

words[currentIndex].classList.add('active');
