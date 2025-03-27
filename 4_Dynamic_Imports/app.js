// Determine whether it's light or dark based on the current hour
const getTimeOfDay = () => {
    const hour = new Date().getHours();
    return (hour <= 18) ? 'light' : 'dark';
}

async function loadConfig() {
    // Get current theme based on time of day
    const theme = getTimeOfDay();
    try {
        // Dynamically import and apply the corresponding theme
        switch (theme) {
            case 'light':
                const { setLightTheme } = await import("./theme.mjs");
                setLightTheme();
                break;

            case 'dark':
                const { setDarkTheme } = await import("./theme.mjs");
                setDarkTheme();
                break;
        }
    } catch (err) {
        // Show any errors during import or theme setup
        console.error(err)
    }
}

// Initialize theme config on load
loadConfig();
