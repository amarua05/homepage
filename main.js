const categoryData = {
    technology: {
        Programming: ['Web Development', 'Mobile Development', 'Database'],
        Networking: ['Network Security', 'Wireless Networking', 'Internet of Things'],
        Hardware: ['Computer Hardware', 'Embedded Systems', 'Peripherals']
    },
    health: {
        Fitness: ['Weight Loss', 'Muscle Building', 'Cardio'],
        Nutrition: ['Diets', 'Healthy Eating', 'Supplements'],
        'Mental Health': ['Stress Management', 'Anxiety Relief', 'Mindfulness']
    },
    education: {
        Science: ['Physics', 'Chemistry', 'Biology'],
        Mathematics: ['Algebra', 'Calculus', 'Statistics'],
        Languages: ['English', 'Spanish', 'French']
    }
};

function populateSubcategories(selectedCategory) {
    var subcategoryDropdown = document.getElementById('subcategory');
    var subcategories = categoryData[selectedCategory];

    subcategoryDropdown.innerHTML = '';
    var defaultOption = document.createElement('option');
    defaultOption.text = 'Select Subcategory';
    subcategoryDropdown.add(defaultOption);

    Object.keys(subcategories).forEach(function(subcategory) {
        var option = document.createElement('option');
        option.text = subcategory;
        option.value = subcategory; 
        subcategoryDropdown.add(option);
    });

    subcategoryDropdown.dispatchEvent(new Event('change'));
}

function populateSubSubcategories(selectedCategory, selectedSubcategory) {
    var subSubcategoryDropdown = document.getElementById('sub-subcategory');
    var subSubcategories = categoryData[selectedCategory][selectedSubcategory];

    subSubcategoryDropdown.innerHTML = '';
    var defaultOption = document.createElement('option');
    defaultOption.text = 'Select Sub-Subcategory';
    subSubcategoryDropdown.add(defaultOption);

    subSubcategories.forEach(function(subSubcategory) {
        var option = document.createElement('option');
        option.text = subSubcategory;
        option.value = subSubcategory; 
        subSubcategoryDropdown.add(option);
    });
}

// Event listener for category dropdown change
document.getElementById('category').addEventListener('change', function() {
    var selectedCategory = this.value.toLowerCase();
    populateSubcategories(selectedCategory); 
});

document.getElementById('subcategory').addEventListener('change', function() {
    var selectedCategory = document.getElementById('category').value.toLowerCase();
    var selectedSubcategory = this.value.toLowerCase();
    populateSubSubcategories(selectedCategory, selectedSubcategory); 
});

var initialCategory = document.getElementById('category').value.toLowerCase();
populateSubcategories(initialCategory);
