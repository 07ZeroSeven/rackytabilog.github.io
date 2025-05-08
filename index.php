<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Racky | Portfolio</title>

  <!-- TailwindCSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Enable Tailwind Dark Mode -->
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#4fd1ff',
            secondary: '#f72585',
            backgroundLight: '#f9fafb',
            backgroundDark: '#0f172a',
          },
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Font Awesome for Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

  <!-- Google Fonts: Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

  <!-- Devicon for Tech Stack Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css">

  <style>
    body {
      font-family: 'Poppins', sans-serif;
    }
   
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @layer utilities {
    .animate-fadeInRight {
      animation: fadeInRight 3s ease-out both;
    }
  }


  </style>
</head>

<body class="bg-backgroundLight text-gray-900 dark:bg-backgroundDark dark:text-gray-100">

  <!-- ===== Navbar Start ===== -->
  <header class="fixed w-full z-50 bg-white/20 dark:bg-backgroundDark/20 backdrop-blur-md shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Brand -->
      <a href="#home" class="text-2xl font-medium tracking-wide text-primary dark:text-secondary drop-shadow-md ">R.C.T</a>
      <!-- Desktop Menu -->
     <!-- Desktop Menu -->
<nav class="hidden md:flex space-x-8 text-sm font-medium">
  <a href="#home" class="nav-link transition hover:text-primary dark:hover:text-secondary">Home</a>
  <a href="#about" class="nav-link transition hover:text-primary dark:hover:text-secondary">About</a>
  <a href="#skills" class="nav-link transition hover:text-primary dark:hover:text-secondary">Skills</a>
  <a href="#projects" class="nav-link transition hover:text-primary dark:hover:text-secondary">Projects</a>
</nav>




      <!-- Right icons -->
      <div class="flex items-center space-x-4">
        <!-- Dark Mode Toggle Button -->
        <button id="dark-toggle" class="text-xl focus:outline-none">
          <i id="toggle-icon" class="fas fa-moon"></i>
        </button>

        <!-- Mobile Hamburger -->
        <button id="menu-toggle" class="md:hidden text-2xl focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <!-- Mobile Menu -->
<div id="mobile-menu" class="hidden bg-white dark:bg-backgroundDark px-6 py-4 space-y-4 shadow-md">
  <a href="#home" class="nav-link block text-base transition hover:text-primary dark:hover:text-secondary">Home</a>
  <a href="#about" class="nav-link block text-base transition hover:text-primary dark:hover:text-secondary">About</a>
  <a href="#skills" class="nav-link block text-base transition hover:text-primary dark:hover:text-secondary">Skills</a>
  <a href="#projects" class="nav-link block text-base transition hover:text-primary dark:hover:text-secondary">Projects</a>
</div>
  </header>
  <!-- ===== Navbar End ===== -->
  <main >
    <?php include('sections/hero.php'); ?>
    <?php include('sections/about.php'); ?>
    <?php include('sections/skills.php'); ?>
    <?php include('sections/projects.php'); ?>
    <?php include('sections/footer.php'); ?>
  </main>
  <script src="js/main.js"></script>
</body>
</html>
