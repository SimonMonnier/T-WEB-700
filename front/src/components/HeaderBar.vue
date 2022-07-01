<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #1f1f20">
    <div class="container-fluid">
      <img class="img-responsive navbar-brand logo" src="../assets/logo.png" alt="logo" />
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item space">
            <a class="nav-link" href="/" style="margin-top: 2px;">

              Home</a
            >
          </li>
          <li class="nav-item space">
            <a class="nav-link" href="/crypto">
              <img
                class="img-responsive navbar-brand image"
                src="../assets/bx-bitcoin.svg"
                alt="logo"
              />
              Crypto</a
            >
          </li>
          <li class="nav-item space">
            <a class="nav-link" href="/article">
              <img
                class="img-responsive navbar-brand image"
                color="white"
                src="../assets/png/bxs-receipt.png"
                alt="logo"
              />
              Articles</a
            >
          </li>
          <li class="nav-item space">
            <a class="nav-link" href="/user/wallet"
              ><img
                class="img-responsive navbar-brand image"
                src="../assets/png/bxs-wallet-alt.png"
                alt="logo"
              />Wallet</a
            >
          </li>
          <li class="nav-item space">
            <a class="nav-link" href="/help"
              ><img
                class="img-responsive navbar-brand image"
                src="../assets/png/bxs-help-circle.png"
                alt="logo"
              />Help</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2 searchBar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            append-icon="mdi-map-marker"
          />
          <!-- <img -->
          <!-- class="img-responsive navbar-brand image" -->
          <!-- src="../assets/png/bx-search-alt.png" -->
          <!-- alt="logo" -->
          <!-- /> -->
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  class="img-responsive navbar-brand image"
                  src="../assets/png/bx-slider-alt.png"
                  alt="logo"
                />
              </a>
              <ul
                class="dropdown-menu"
                style="right: 0; left: auto"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item image">
              <a class="nav-link" href="/user/profile">
                <img
                  class="img-responsive navbar-brand"
                  src="../assets/png/bx-user.png"
                  alt="logo"
                />
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              </a>
              <ul
                class="dropdown-menu"
                style="right: 0; left: auto"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style scoped>
body {
  margin: 0;
}

.container {
  margin: 0;
  background-color: #3c3c3c;
  flex-direction: row;
}

.logo {
  width: 8%;
  height: 8%;
}

.searchBar {
  border-radius: 40px;
  height: 100%;
  margin: auto;
  background: url("../assets/png/bx-search-alt.png") no-repeat scroll 97% 50%;
  filter: invert(75%);
}

.image {
  filter: invert(75%);
}

.space {
  display: flex;
}
</style>
