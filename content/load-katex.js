document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.katexEnv').forEach(
        function(ele){
            renderMathInElement(ele, {
                delimiters: [
                    { left: '\\(', right: '\\)', display: false },
                    { left: '\\[', right: '\\]', display: true }
                ],
                throwOnError : false
            });
            ele.style.visibility = "visible";
        })
});
