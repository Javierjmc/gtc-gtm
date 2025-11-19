<template>
  <section class="max-w-6xl mx-auto text-white space-y-16 relative z-10 py-14">
    <!-- Título Principal -->
    <div class="text-center">
      <h2 class="text-5xl py-6 font-extrabold bg-linear-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-2xl">
        ¿Qué es Google Tag Manager?
      </h2>
    </div>

    <!-- Bloque 1 -->
    <div
      class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400"
    >      
      <p class="text-gray-200 text-2xl leading-relaxed">
        Google Tag Manager es una herramienta que permite instalar y gestionar
        etiquetas de seguimiento en un sitio web
        <span class="text-[#FBBC05] font-semibold">sin modificar el código</span>.
        Funciona como un panel centralizado que decide qué mediciones ejecutar y
        cuándo hacerlo.
      </p>
    </div>

    <!-- Cómo funciona -->
    <div
      class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400"
    >
      <h3 class="text-3xl font-semibold text-cyan-300 mb-8 drop-shadow">
        ¿Cómo funciona GTM en tu sitio web?
      </h3>

      <div class="flex flex-col md:flex-row items-start gap-10">

        <!-- Texto -->
        <div class="md:w-1/2 space-y-5">
          <p class="text-gray-200 text-xl">
            GTM es el
            <span class="font-bold text-[#FBBC05]">intermediario central</span>
            que te permite ejecutar scripts de medición sin cambiar el código del sitio.
          </p>

          <ul class="space-y-4 text-gray-300 text-xl">

            <li class="flex items-start gap-3">
              <span class="text-cyan-300 font-bold text-xl">1.</span>
              <span><b>Carga del Contenedor:</b> tu sitio carga una sola vez el código de GTM.</span>
            </li>

            <li class="flex items-start gap-3">
              <span class="text-cyan-300 font-bold text-xl">2.</span>
              <span><b>Escucha de Eventos:</b> GTM espera acciones del usuario (clics, formularios, vistas).</span>
            </li>

            <li class="flex items-start gap-3">
              <span class="text-cyan-300 font-bold text-xl">3.</span>
              <span><b>Revisión de Activadores:</b> Evalúa si el evento coincide con tus reglas.</span>
            </li>

            <li class="flex items-start gap-3">
              <span class="text-cyan-300 font-bold text-xl">4.</span>
              <span><b>Disparo de Etiquetas:</b> Envía los datos a GA, Ads, Meta, etc.</span>
            </li>

          </ul>
        </div>

        <!-- Imagen -->
        <div class="md:w-1/2 w-full bg-black/40 p-6 rounded-2xl border border-cyan-500/20 shadow-inner hover:scale-[1.3] transition-all duration-300">
          <img
            src="../assets/centralizar-app.jpg"
            alt="Diagrama de flujo GTM"
            class="w-full rounded-xl shadow-2xl border border-cyan-500/30"
          />
        </div>
      </div>
    </div>

    <!-- Tipos de Etiquetas -->
    <div class="space-y-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Card -->
        <div
          class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer"
        >
          <img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" class="w-12 mb-4 opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">Google Analytics</h4>
          <p class="text-gray-300 text-sm mt-2">Medición completa de usuarios.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition cursor-pointer">
          <img src="https://images.icon-icons.com/2699/PNG/512/google_ads_logo_icon_171064.png" class="w-12 mb-4 opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">Google Ads</h4>
          <p class="text-gray-300 text-sm mt-2">Conversiones y remarketing.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition cursor-pointer">
          <img src="https://www.facebook.com/images/fb_icon_325x325.png" class="w-12 rounded mb-4 opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">Meta Pixel</h4>
          <p class="text-gray-300 text-sm mt-2">Seguimiento para Facebook/Instagram.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition cursor-pointer">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968867.png" class="w-10 rounded mb-4 opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">Hotjar</h4>
          <p class="text-gray-300 text-sm mt-2">Mapa de calor y grabaciones.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition cursor-pointer">
          <img src="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338432_1280.png" class="w-10 mb-4 opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">TikTok Pixel</h4>
          <p class="text-gray-300 text-sm mt-2">Campañas y audiencias.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition cursor-pointer">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" class="w-10 mb-4 opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">Pinterest Tag</h4>
          <p class="text-gray-300 text-sm mt-2">Conversiones de Pins.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" class="w-12 mb-4 rounded opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">LinkedIn Insights</h4>
          <p class="text-gray-300 text-sm mt-2">Seguimiento B2B.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="w-12 mb-4 opacity-90 group-hover:opacity-100 transition" />
          <h4 class="text-xl font-semibold text-cyan-200">Scripts Personalizados</h4>
          <p class="text-gray-300 text-sm mt-2">Códigos JS o HTML.</p>
        </div>

      </div>
    </div>

    <!-- Resumen -->
    <div
      class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400"
    >
      <h3 class="text-3xl font-semibold text-cyan-300 mb-4 drop-shadow">
        En resumen
      </h3>
      <p class="text-gray-200 text-lg">
        Google Tag Manager permite gestionar toda la medición sin depender del equipo técnico. Una sola instalación permite manejar:
      </p>

      <ul class="list-disc text-gray-300 pl-6 mt-4 space-y-2 text-lg">
        <li>Google Analytics (GA4)</li>
        <li>Eventos y conversiones</li>
        <li>Formularios y acciones del usuario</li>
        <li>Scripts externos de marketing</li>
        <li>Configuraciones avanzadas sin tocar el código</li>
      </ul>
    </div>

  </section>
</template>
