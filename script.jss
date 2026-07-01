function openProfile() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Lütfen bir kullanıcı adı gir.");
        return;
    }

    window.open("https://instagram.com/" + username, "_blank");
}
