<template>
  <header className="header">
    <a
      className="brand"
      href="https://greensock.com/scrolltrigger"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="greensock-icon"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
        width="200"
        height="64"
        alt="ScrollTrigger"
      />
    </a>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Boxes</RouterLink>
        </li>
        <li>
          <RouterLink to="/scroll">ScrollTrigger</RouterLink>
        </li>
        <li>
          <RouterLink to="/layers">Layers Section</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
