/* Below we are creating a Nav Function so that the Nav Bar will appear on all the pages.
*/

const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    
    <img src="/Assets/Logo/brand logo transparent white.png" alt="brand logo" class="brand-logo" width="180px">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <!-- Shop Drop Down -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Shop
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                    <li><a class="dropdown-item" href="#">Woman</a></li>
                    <li><a class="dropdown-item" href="#">Men</a></li>
                    <li><a class="dropdown-item" href="#">Kids</a></li>
                    <li><a class="dropdown-item" href="#">Accessories</a></li>
                </ul>
            </li>

            <!-- About -->
            <li class="nav-item">
                <a class="nav-link" href="#contact">About</a>
            </li>

            <!-- Contact -->
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    </div>

    <!-- Search Bar -->
    <div class="search">
        <input type="text" class="search-box" placeholder="Search brand, product">
        <button class="search-btn">Search</button>
    </div>

    <!-- Nav Bar Icons -->
    <div class="nav-item">
        <!-- Cart Icon -->
        <a href="#" class="cart-icon"><img src="/Assets/Icons/shopping cart icon white transparent.png"
                alt="cart icon"></a>
        <!-- User Icon -->
        <a href="#" class="user-icon"><img src="/Assets/Icons/user-icon white transparent.png" alt="user icon"></a>
    </div>
    
    `
}

createNav();