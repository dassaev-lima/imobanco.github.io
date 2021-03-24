<template>
  <div>
    <!--<navbar-mobile />
    <header-slide />
    <persona-section />
    <services-section />
    <facilidades-item />
    <chat-comercial />-->
    <Posts/>
    <Header/>
    <MainSection/>
    <Parceiro/>
    <CtaLoja/>
    <Noticias/>
    
  </div>
</template>

<script>
/*import NavbarMobile from "@/components/main/NavbarMobile.vue";
import HeaderSlide from "~/components/main/HeaderSlide.vue";
import PersonaSection from "~/components/index/persona/PersonaSection.vue";
import FacilidadesItem from "~/components/index/facilidadesimobanco/FacilidadesItem.vue";
import ServicesSection from "~/components/index/services/ServicesSection.vue";
import ChatComercial from "~/components/index/chatcomercial/ChatComercial.vue";*/
import Posts from "../components/blog/Posts";
import MainSection from "../components/inicio/MainSection";
import Header from "../components/inicio/Header";
import Parceiro from "../components/inicio/Parceiro";
import CtaLoja from "../components/inicio/CtaLoja";
import Noticias from "../components/inicio/Noticias";

export default {
  components: {
    Posts,
    MainSection,
    Header,
    Parceiro,
    CtaLoja,
    Noticias,

    /*NavbarMobile,
    HeaderSlide,
    PersonaSection,
    FacilidadesItem,
    ServicesSection,
    ChatComercial,*/
  },
};
</script>
<style></style>
