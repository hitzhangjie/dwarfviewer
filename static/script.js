let dies = [];
let selectedDie = null;

// Load DIEs when the page loads
window.onload = async function () {
    await loadDIEs();
};

// Load DIEs from the server
async function loadDIEs() {
    try {
        const response = await fetch('/api/dies');
        dies = await response.json();
        displayDIEs(dies);
    } catch (error) {
        console.error('Error loading DIEs:', error);
    }
}

// Search DIEs based on input
async function searchDIEs() {
    const searchInput = document.getElementById('searchInput');
    const pattern = searchInput.value.trim();

    try {
        const response = await fetch(`/api/dies/search?q=${encodeURIComponent(pattern)}`);
        const filteredDies = await response.json();
        displayDIEs(filteredDies);
    } catch (error) {
        console.error('Error searching DIEs:', error);
    }
}

// Display DIEs in the list
function displayDIEs(diesToShow) {
    const dieList = document.getElementById('dieList');
    dieList.innerHTML = '';

    diesToShow.forEach(die => {
        const dieElement = document.createElement('div');
        dieElement.className = 'die-item';
        dieElement.onclick = () => showDieDetails(die);

        // Find the name attribute if it exists
        const nameAttr = die.Entry.Field.find(field => field.Attr === 'Name');
        const name = nameAttr ? nameAttr.Val : die.Entry.Tag;

        dieElement.textContent = name;
        dieList.appendChild(dieElement);
    });
}

// Show DIE details
function showDieDetails(die) {
    const dieDetails = document.getElementById('dieDetails');
    dieDetails.innerHTML = '';

    // Remove selected class from all items
    document.querySelectorAll('.die-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add selected class to clicked item
    const selectedItem = Array.from(document.querySelectorAll('.die-item')).find(item =>
        item.textContent === (die.Entry.Field.find(field => field.Attr === 'Name')?.Val || die.Entry.Tag)
    );
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }

    // Create details content
    const detailsContent = document.createElement('div');

    // Add tag
    const tagElement = document.createElement('h2');
    tagElement.textContent = `Tag: ${die.Entry.Tag}`;
    detailsContent.appendChild(tagElement);

    // Add attributes
    die.Entry.Field.forEach(field => {
        const attrElement = document.createElement('div');
        attrElement.className = 'attribute';
        attrElement.innerHTML = `
            <span class="attribute-name">${field.Attr}:</span>
            <span class="attribute-value">${field.Val}</span>
        `;
        detailsContent.appendChild(attrElement);
    });

    // Add children section if there are children
    if (die.Children && die.Children.length > 0) {
        const childrenSection = document.createElement('div');
        childrenSection.className = 'children-section';

        const childrenHeader = document.createElement('h3');
        childrenHeader.textContent = `Children (${die.Children.length})`;
        childrenSection.appendChild(childrenHeader);

        die.Children.forEach(child => {
            const childElement = document.createElement('div');
            childElement.className = 'die-item';
            childElement.onclick = () => showDieDetails(child);

            const childName = child.Entry.Field.find(field => field.Attr === 'Name')?.Val || child.Entry.Tag;
            childElement.textContent = childName;
            childrenSection.appendChild(childElement);
        });

        detailsContent.appendChild(childrenSection);
    }

    dieDetails.appendChild(detailsContent);
    selectedDie = die;
} 