// Počkejte, až se DOM plně načte
document.addEventListener('DOMContentLoaded', () => {
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const closeDisclaimerButton = document.getElementById('close-disclaimer');

    // Zobrazit disclaimer ihned po načtení stránky
    disclaimerModal.classList.remove('hidden');

    // Přidat event listener pro zavření disclaimeru
    closeDisclaimerButton.addEventListener('click', () => {
        disclaimerModal.classList.add('hidden');
    });
});