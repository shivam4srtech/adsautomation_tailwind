
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            // remove active styles
            buttons.forEach(btn => {
                btn.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
                btn.classList.add('text-gray-600');
            });

            contents.forEach(content => {
                content.classList.add('hidden');
            });

            // add active styles
            button.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
            button.classList.remove('text-gray-600');

            document.getElementById(button.dataset.tab).classList.remove('hidden');
        });
    });


    //enable disable edit btn on tab content

   document.querySelectorAll('.tab-content').forEach(tab => {

    const toggle = tab.querySelector('.edit-toggle');
    const fields = tab.querySelectorAll('.editable-field');
    const updateBtn = tab.querySelector('.update-btn');

    // 🔐 Safety check
    if (!toggle || !updateBtn) return;

    toggle.addEventListener('change', function () {

        if (this.checked) {
            fields.forEach(field => {
                field.removeAttribute('readonly');
                field.removeAttribute('disabled');
                field.classList.remove('bg-gray-100', 'text-gray-600');
                field.classList.add('bg-white', 'text-gray-800');
            });

            updateBtn.classList.remove('hidden');
        } else {
            fields.forEach(field => {
                field.setAttribute('readonly', true);
                field.setAttribute('disabled', true);
                field.classList.add('bg-gray-100', 'text-gray-600');
                field.classList.remove('bg-white', 'text-gray-800');
            });

            updateBtn.classList.add('hidden');
        }
    });

});



