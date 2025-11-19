<template>
  <section class="min-h-screen p-6 sm:p-10 text-white text-lg">
    <div class="max-w-6xl mx-auto">

      <h2 class="text-5xl py-6 font-extrabold bg-linear-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-2xl">
        Conectar Google Tag Manager a un Sitio Web
      </h2>

      <p class="text-lg text-blue-100 leading-relaxed mb-10 text-center">
        Aprende cómo instalar el contenedor de Google Tag Manager en cualquier proyecto web, ya sea creado con frameworks modernos (como React o Next.js) o con plataformas como WordPress.
      </p>

      <div class="space-y-10">

        <div class="flex flex-col md:flex-row gap-6 bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400">
          <div class="flex-1">
            <h3 class="text-2xl font-semibold text-blue-300 mb-2">1. Crear el contenedor en Google Tag Manager</h3>
            <p class="text-blue-100">
              Accede a <strong>tagmanager.google.com</strong>. Crea una cuenta (si es necesario) y luego haz clic en Crear Contenedor. Dale un nombre y selecciona Web como plataforma de destino.
            </p>
          </div>
          <img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg" class="w-28 h-28 opacity-90" />
        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400">
          <div class="flex-1">
            <h3 class="text-2xl font-semibold text-blue-300 mb-2">2. Copiar los fragmentos de código del contenedor</h3>
            <div class="text-blue-100">
              Una vez creado, GTM te proporcionará dos fragmentos de código únicos que debes copiar. Es crucial colocarlos exactamente donde se indica:
              <ul class="list-disc list-inside text-blue-100 mt-2 space-y-1">
                <li>El primer fragmento debe ir lo más arriba posible dentro de la etiqueta head.</li>
                <li>El segundo fragmento debe colocarse inmediatamente después de la etiqueta de apertura body.</li>
              </ul>
            </div>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" class="w-28 h-28 invert-90" />
        </div>

        <div class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400">
          <h3 class="text-2xl font-semibold text-blue-300 mb-3">3. Insertar el código en un proyecto con Framework o Estático</h3>
          <p class="text-blue-100 mb-3">
            La ubicación de los códigos varía según tu tecnología. En cualquier caso, debes buscar el archivo raíz que contiene las etiquetas <code>&lt;head&gt;</code> y <code>&lt;body&gt;</code> de todo el sitio:
          </p>

          <ul class="list-disc list-inside text-blue-100 space-y-2">
            <li><strong>Sitios Estáticos (HTML/JS Puro):</strong> Pega directamente en el archivo <code>index.html</code>.</li>
            <li><strong>Vue/React (CRA):</strong> En el archivo <code>public/index.html</code>.</li>
            <li><strong>Next.js/Gatsby:</strong> Utiliza archivos específicos del framework como <code>_document.js</code> o componentes como <code>&lt;Script&gt;</code> para una carga optimizada.</li>
          </ul>

          <p class="text-blue-300 font-semibold mt-4">La colocación precisa garantiza que GTM se cargue en todas las páginas.</p>
        </div>

        <div class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400">
          <h3 class="text-2xl font-semibold text-blue-300 mb-3">4. Instalar en WordPress o CMS mediante plugin</h3>
          <p class="text-blue-100">
            Para sistemas de gestión de contenido (CMS) como WordPress, la forma más segura y común es usar un plugin que te permita inyectar código en el header y el body del sitio (por ejemplo, "Insert Headers and Footers").
          </p>
          <p class="text-blue-100 mt-2">
            También puedes usar plugins dedicados a GTM o, si manejas código, editar los archivos <code>header.php</code> y <code>functions.php</code> del tema hijo.
          </p>
        </div>

        <div class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400">
          <h3 class="text-2xl font-semibold text-blue-300 mb-3">5. Verificar instalación con Vista Previa (Preview Mode)</h3>
          <p class="text-blue-100">
            Una vez insertados los códigos, haz clic en el botón Vista Previa (o Preview) en GTM. Esto abrirá tu sitio web con la consola de depuración de Tag Manager activa.
          </p>
          <p class="text-blue-100 mt-2">
            Si la consola se carga correctamente y muestra el resumen de eventos, ¡la instalación fue exitosa! Publica los cambios con el botón Enviar (Submit) en GTM.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>