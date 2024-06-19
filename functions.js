// JavaScript-Funktion zum Initialisieren der Standardansicht
function initializeDefaultView() {
    // Verstecke die Inhalte von mapandtask und 
    const mapandtaskSection = document.querySelector('.mapandtask');

    if (mapandtasksSection) {
        mapandtaskSection.style.display = 'none';
    }

    // Zeige den Inhalt von housestorage an (standardmäßig ausgewählt)
    const housestorageSection = document.querySelector('.housestorage');
    if (housestorageSection) {
        housestorageSection.style.display = 'block';
    }
}

// JavaScript-Funktion zum Austauschen des Inhalts basierend auf der ausgewählten Klasse
function changeContent(className) {
    // Verstecke alle Abschnitte
    const sections = document.querySelectorAll('.housestorage, .mapandtask');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Zeige den ausgewählten Abschnitt basierend auf der übergebenen Klasse an
    const selectedSection = document.querySelector(`.${className}`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Event-Listener für Klickereignisse auf die Schaltflächen
document.addEventListener('DOMContentLoaded', () => {
    // Initialisiere die Standardansicht
    initializeDefaultView();

    // Finde die Schaltflächen mit den entsprechenden IDs
    const housestorageBtn = document.getElementById('housestorage');
    const mapandtaskBtn = document.getElementById('mapandtask');

    // Füge Klickereignis-Handler hinzu, um den Inhalt zu ändern
    housestorageBtn.addEventListener('click', () => {
        changeContent('housestorage');
    });

    mapandtaskBtn.addEventListener('click', () => {
        changeContent('mapandtask');
    });
});