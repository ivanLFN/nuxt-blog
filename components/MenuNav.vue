<template>
  <div class="container-lg py-2">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
        >
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/color/96/bootstrap--v2.png"
          >
        </a>
        <a
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><img
            class="menu-icon"
            src="/images/menu-50.png"
            alt="menu"
          ></span>
        </a>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item pr-md-3">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Home</a>
            </li>
            <li class="nav-item px-md-3">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Blog</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-collapse {
  background-color: white;
}
.navbar {
  background-color: white !important;
}

.navbar-toggler {
  border: white;
}

.menu-icon {
  width: 2rem;
  height: auto;
}

.nav-link {
  font-weight: 550 !important;
  font-size: 1.5rem;
  color: #272727;
}

</style>
