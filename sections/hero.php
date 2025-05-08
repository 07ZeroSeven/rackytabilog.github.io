<style>
  .hero-bg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* Light Mode Background */
  .hero-bg {
    background-image: url('hero-bgwhite.png'); /* Light mode */
  }

  /* Dark Mode Override */
  .dark .hero-bg {
    background-image: url('hero-bg.png'); /* Dark mode */
  }
</style>

<!-- ===== Hero Section Start (Light & Dark Mode Backgrounds) ===== -->
<section id="home"
  class="relative overflow-hidden min-h-screen flex items-center justify-center text-center px-6 md:px-12
         bg-gradient-to-br from-white to-gray-100 dark:bg-none hero-bg">

  <!-- Overlay for better text visibility -->
  <div class="absolute inset-0 bg-white/80 dark:bg-black/40 z-0 pointer-events-none"></div>

  <!-- Decorative Background Blobs -->
  <div class="absolute top-0 -right-20 w-[500px] h-[500px] bg-primary opacity-30 rounded-full blur-3xl dark:opacity-30"></div>
  <div class="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-primary opacity-20 rounded-full blur-3xl dark:opacity-20"></div>

  <!-- Hero Content -->
  <div class="max-w-3xl relative z-10 animate-fadeInRight">
    <p class="text-indigo-600 dark:text-primary text-lg mb-1">Hello, I'm</p>
    <h1 class="text-6xl font-medium tracking-wide text-gray-800 dark:text-gray-100 mb-4 drop-shadow-md">Racky</h1>

    <div class="flex flex-wrap justify-center gap-2 mb-6">
      <span class="bg-indigo-600 text-white text-xs drop-shadow-md font-medium py-1 px-4 rounded-full flex items-center gap-2">
        <i class="fas fa-code"></i> Full Stack Developer
      </span>
      <span class="bg-sky-400 text-white text-xs drop-shadow-md font-medium py-1 px-4 rounded-full flex items-center gap-2">
        <i class="fas fa-cloud"></i> Cloud Engineer
      </span>
      <span class="bg-yellow-400 text-white text-xs drop-shadow-md font-medium py-1 px-4 rounded-full flex items-center gap-2">
        <i class="fas fa-database"></i> Database Admin
      </span>
    </div>

    <p class="drop-shadow-lg font-medium text-gray-900 dark:text-white text-xl mb-4">
      I love building things on the web!
    </p>
    <p class="text-gray-700 dark:text-white max-w-2xl mx-auto mb-6 drop-shadow-lg">
      I started unintentionally with small web projects, and now I'm here intentionally to create visually stunning and responsive web applications.
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="#contact" class="bg-sky-400 text-[#0f172a] drop-shadow-md font-medium px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition duration-300">
        Contact Me
      </a>
      <a href="RackyTabilog-Resume.pdf" download="Racky_Resume.pdf" class="bg-indigo-600 text-white drop-shadow-md font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 hover:text-white transition duration-300">
        Download Resume
      </a>
    </div>

    <!-- Social Media Links -->
    <div class="flex gap-6 mt-6 justify-center">
      <a href="https://github.com/07ZeroSeven" target="_blank" class="text-2xl hover:text-indigo-600 dark:hover:text-secondary transition"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/racky-t-818127183/" target="_blank" class="text-2xl hover:text-indigo-600 dark:hover:text-secondary transition"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.instagram.com/rackytabilog" target="_blank" class="text-2xl hover:text-indigo-600 dark:hover:text-secondary transition"><i class="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/akie.tabs" target="_blank" class="text-2xl hover:text-indigo-600 dark:hover:text-secondary transition"><i class="fab fa-facebook"></i></a>
      <a href="viber://add?number=09992276570" target="_blank" class="text-2xl hover:text-indigo-600 dark:hover:text-secondary transition"><i class="fab fa-viber"></i></a>
    </div>
  </div>
</section>
<!-- ===== Hero Section End ===== -->
