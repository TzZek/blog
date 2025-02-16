document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const markdownContent = document.getElementById("markdown-content");
        markdownContent.classList.add("rendered");
        hljs.highlightAll();
    }, 100);
});