document.addEventListener("DOMContentLoaded", () => {
    // Accordion Logic
    const modules = document.querySelectorAll('.module-header');

    modules.forEach(header => {
        header.addEventListener('click', () => {
            const module = header.parentElement;

            // Toggle active state
            if (module.classList.contains('active')) {
                module.classList.remove('active');
            } else {
                // Remove active from others if you want only one open at a time
                // document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
                module.classList.add('active');
            }
        });
    });
});
