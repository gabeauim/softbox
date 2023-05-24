(() => {
    const updateColor = () => {
        const r = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g;
        const hash = window.location.hash.toString();
        const matches = r.test(hash);

        if (matches) {
            document.title = hash.toUpperCase();
            document.body.style.backgroundColor = hash;
        }
        else {
            document.title = 'Error'
            alert(`"${hash}" does not match a valid hex color. Please add a valid hex color to the URL matching #000 or #000000`)
            window.location.hash = '#000000';
        }
    }

    const toggleFullscreen = (e) => {
        if (!document.fullscreenElement)
            document.documentElement.requestFullscreen({ navigationUI: "show" });
        else document.exitFullscreen();

        e.preventDefault();
    }

    updateColor();

    window.onhashchange = updateColor;
    window.ondblclick = toggleFullscreen;
})();