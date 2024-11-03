"use strict";
const profileImageInput = document.getElementById('profileImage');
const previewImage = document.getElementById('previewImage');
const imagePreview = document.getElementById('imagePreview');
profileImageInput.addEventListener('change', (event) => {
    var _a;
    const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            previewImage.src = reader.result;
            previewImage.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});
