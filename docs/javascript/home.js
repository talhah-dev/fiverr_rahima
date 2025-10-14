(function () {
    const el = document.getElementById('typed');
    if (!el) return;
    const words = [
        'Driving efficiency through process optimization',
        'SQL • Python • Tableau • Power BI',
        'Project coordination & stakeholder communication',
        'Data storytelling and dashboards that inform action',
        'Open to Project Management, Operations, and Data roles'
    ];
    let wi = 0, li = 0, del = false;
    const typeSpeed = 50, delSpeed = 28, holdEnd = 1200, holdStart = 500;
    function loop() {
        const w = words[wi];
        if (!del) {
            el.textContent = w.slice(0, li + 1); li++;
            if (li === w.length) { del = true; setTimeout(loop, holdEnd); return; }
            setTimeout(loop, typeSpeed); return;
        } else {
            el.textContent = w.slice(0, li - 1); li--;
            if (li === 0) { del = false; wi = (wi + 1) % words.length; setTimeout(loop, holdStart); return; }
            setTimeout(loop, delSpeed); return;
        }
    }
    loop();
})();