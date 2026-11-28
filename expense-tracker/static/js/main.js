// main.js — landing page interactions

(function () {
    'use strict';

    // ── Video modal ──────────────────────────────────────────────────
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    const openBtn = document.getElementById('openVideoModal');
    const closeBtn = modal ? modal.querySelector('.modal-close') : null;

    // Placeholder YouTube URL — replace with the real video ID later
    const YOUTUBE_EMBED = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    function openModal() {
        if (!modal || !iframe) return;
        iframe.src = YOUTUBE_EMBED + '?autoplay=1';
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal || !iframe) return;
        iframe.src = '';                       // stop playback
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (openBtn) {
        openBtn.addEventListener('click', function (e) {
            e.preventDefault();
            openModal();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
}());
