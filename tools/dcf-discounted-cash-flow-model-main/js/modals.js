document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.getElementById('modal-close');

    function openModal(title, text, closeButtonText = 'Close') {
        modalTitle.textContent = title;
        modalText.innerHTML = text;
        modalClose.textContent = closeButtonText;
        modalOverlay.classList.remove('hidden');
        modalOverlay.style.display = 'flex';
        
        // Add dark mode classes
        modalContent.classList.add('dark:bg-gray-800');
        modalTitle.classList.add('dark:text-white');
        modalText.classList.add('dark:text-gray-300');
        modalClose.classList.add('dark:bg-gray-700', 'dark:hover:bg-gray-600', 'dark:focus:ring-offset-gray-800');
    }

    function closeModal() {
        modalOverlay.classList.add('hidden');
        modalOverlay.style.display = 'none';
    }

    function addModalTriggerListener(trigger) {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const label = trigger.closest('label');
            const title = label.textContent.trim().split('\n')[0].trim();
            const text = label.getAttribute('data-modal-text');
            openModal(title, text);
        });
    }

    // Add event listeners for existing modal triggers
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(addModalTriggerListener);

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Export functions to make them available in other files
    window.addModalTriggerListener = addModalTriggerListener;
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Display the initial modal window
    const disclaimerText = `
        <p class="dark:text-gray-300">This DCF model is for educational purposes only. It may contain errors and should not be used for actual investment decisions. Past performance does not guarantee future results. Always consult with a qualified financial advisor before making investment decisions.</p>
    `;
    openModal('Disclaimer', disclaimerText, 'I Understand');
});