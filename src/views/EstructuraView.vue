<template>
  <section class="max-w-6xl mx-auto text-white space-y-16 relative z-10 py-14">

    <!-- Título Principal -->
    <div class="text-center">
      <h2 class="text-5xl py-6 font-extrabold bg-linear-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text drop-shadow-2xl">
        Estructura básica de un sitio web
      </h2>
    </div>

    <!-- Bloque 1: Explicación general -->
    <div
      class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400"
    >      
      <p class="text-gray-200 text-2xl leading-relaxed">
        Un sitio web se construye principalmente en un archivo <span class="font-semibold text-[#FBBC05]">index.html</span> con dos grandes bloques: el
        <span class="text-cyan-200 font-semibold">head</span> y el
        <span class="text-cyan-200 font-semibold">body</span>. No necesitas conocimientos técnicos para entenderlos, pero sí es útil conocer qué función cumple cada uno y qué pueden contener.
      </p>
    </div>

    <!-- Bloque 2: Head y Body -->
    <div
      class="bg-black/70 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,.18)] transition-all duration-300 hover:shadow-cyan-400/50 hover:border-cyan-400"
    >
      <h3 class="text-3xl font-semibold text-cyan-300 mb-8 drop-shadow">¿Qué contiene el Head y el Body?</h3>

      <div class="flex flex-col md:flex-row items-start gap-10">

        <!-- Texto -->
        <div class="md:w-1/2 space-y-6 text-xl text-gray-200">
          <p>
            El <span class="text-cyan-200 font-bold">head</span> contiene información para el navegador: título del sitio, estilos, fuentes, datos para Google y más. No es algo visible, pero es esencial.
          </p>

          <p>
            El <span class="text-cyan-200 font-bold">body</span> es la parte visual: textos, imágenes, botones, secciones y todo lo que el usuario ve y navega.
          </p>

          <p>
            Dentro del head y del body existen <span class="font-bold text-cyan-200">etiquetas</span>. Cada etiqueta representa una parte del sitio y puede tener <span class="font-bold text-cyan-200">atributos</span> como <em>id</em> y <em>class</em>, los cuales sirven para organizarlas, identificarlas o aplicar estilos.
          </p>
        </div>

        <!-- Imagen o representación visual -->
        <div class="md:w-1/2 w-full bg-black/40 p-6 rounded-2xl border border-cyan-500/20 shadow-inner transition-all duration-300">
          <pre class="text-sm bg-black/40 p-4 rounded-xl overflow-auto border border-cyan-400/30 shadow-lg"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Mi sitio web&lt;/title&gt;
    &lt;link rel="stylesheet" href="estilos.css" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;h1&gt;Bienvenidos&lt;/h1&gt;
    &lt;p&gt;Este es el contenido visible para los usuarios.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>
      </div>
    </div>

    <!-- Cards de conceptos -->
    <div class="space-y-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer">
          <h4 class="text-xl font-semibold text-cyan-200 mb-2">Head</h4>
          <p class="text-gray-300 text-sm">Información para navegadores y buscadores.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer">
          <h4 class="text-xl font-semibold text-cyan-200 mb-2">Body</h4>
          <p class="text-gray-300 text-sm">Todo lo visible para el usuario.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer">
          <h4 class="text-xl font-semibold text-cyan-200 mb-2">Etiquetas</h4>
          <p class="text-gray-300 text-sm">Elementos que forman cada parte del sitio.</p>
        </div>

        <div class="group bg-black/70 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer">
          <h4 class="text-xl font-semibold text-cyan-200 mb-2">Atributos</h4>
          <p class="text-gray-300 text-sm">Id y clases para identificar o estilizar elementos.</p>
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
        La estructura básica de un sitio web organiza todo en dos bloques: el head (información interna) y el body (contenido visible). Con etiquetas y atributos podemos dar orden, estilo y estructura sin complicaciones técnicas.
      </p>
    </div>

  </section>
</template>

<script>
export default {
  name: "EstructuraSitioWeb",
};
</script>

<style scoped>
</style>