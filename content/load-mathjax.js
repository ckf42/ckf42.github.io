window.MathJax = {
    displayMath: [ ['\\[', '\\]'] ],
    loader: { load: ['ui/safe', 'ui/lazy'] },
    startup: {
        pageReady: () => {
            return MathJax.startup.defaultPageReady().then(() => {
                document.querySelectorAll(".mathJaxEnv").forEach((ele) => ele.style.visibility = "visible");
            });
        }
    }
};
