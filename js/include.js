function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");

    elements.forEach(async (element) => {
        const file = element.getAttribute("data-include");
        console.log(`Loading content from ${file}...`);

        if (file) {
            try {
                const response = await fetch(file);
                console.log(`Response status: ${response.status}`);
                if (response.ok) {
                    element.innerHTML = await response.text();
                } else {
                    element.innerHTML = `<p class="text-red-500">Content not found: ${file}</p>`;
                }
            } catch (error) {
                console.error(`Error loading ${file}:`, error);
                element.innerHTML = `<p class="text-red-500">Error loading content.</p>`;
            }
        }
    });
}

// Initialize the include function after DOM is fully loaded
document.addEventListener("DOMContentLoaded", includeHTML);
