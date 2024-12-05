export async function loadText(path) {
    try {
        const response = await fetch(path);
        const TEXT = await response.text();
        return TEXT;
    } catch (error) {
        console.error('Error loading text:', error);
        return '';
    }
}