document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Відмінити стандартну подію відправки форми

    try {
        // Регулярні вирази для перевірки валідності введених даних
        var pibPattern = /^[А-ЯЁа-яё]+\s[А-ЯЁа-яё]\.\s[А-ЯЁа-яё]\.$/;
        var facultyPattern = /^[А-ЯЁЇІа-яёїі\s]+$/;
        var birthdayPattern = /^\d{2}\.\d{2}\.\d{4}$/;
        var addressPattern = /^м\.\s[А-ЯЁЇІа-яёїі\s]+$/;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[com]{2,4}$/;

        // Отримати значення з форми
        var pib = document.getElementById("pib");
        var faculty = document.getElementById("faculty");
        var birthday = document.getElementById("birthday");
        var address = document.getElementById("address");
        var email = document.getElementById("email");

        // Видалити клас "error" з усіх рядків
        pib.classList.remove("error");
        faculty.classList.remove("error");
        birthday.classList.remove("error");
        address.classList.remove("error");
        email.classList.remove("error");

        // Перевірка валідності даних і підсвічування помилкових рядків
        var isValidPib = pibPattern.test(pib.value);
        var isValidFaculty = facultyPattern.test(faculty.value);
        var isValidBirthday = birthdayPattern.test(birthday.value);
        var isValidAddress = addressPattern.test(address.value);
        var isValidEmail = emailPattern.test(email.value);

        if (!isValidPib) {
            pib.classList.add("error");
        }
        if (!isValidFaculty) {
            faculty.classList.add("error");
        }
        if (!isValidBirthday) {
            birthday.classList.add("error");
        }
        if (!isValidAddress) {
            address.classList.add("error");
        }
        if (!isValidEmail) {
            email.classList.add("error");
        }

        // Виведення результатів або повідомлення про помилки
        if (isValidPib && isValidFaculty && isValidBirthday && isValidEmail && isValidAddress) {
            alert("Введена інформація вірна:\nПІБ: " + pib.value + "\nФакультет: " + faculty.value + "\nДата народження: " + birthday.value + "\nАдреса: " + address.value + "\nE-mail: " + email.value);
			var inputData = {
                pib: pib.value,
                faculty: faculty.value,
                birthday: birthday.value,
                address: address.value,
                email: email.value
            };
			localStorage.setItem("inputData", JSON.stringify(inputData));

            // Перенаправлення на окрему сторінку
            window.location.href = "result.html";
        } else {
            throw new Error("Будь ласка, виправте наступні помилки.");
        }
    } catch (error) {
        alert(error.message);
    }
};
