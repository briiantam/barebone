// nav.js
document.addEventListener('DOMContentLoaded', function() {
    var nav = `
    <nav>
        <div class="nav-container">
            <a href="index.html" class="brand">Barebone</a>
            <div class="menu">
                <a href="about.html">About Us</a>
                <a href="team.html">Team</a>
                <a href="#" class="sign-in">Sign In</a>
                <a href="/create_account" class="get-started">Get Started</a>
            </div>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', nav);
});
