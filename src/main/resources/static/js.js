// Quando o documento estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Vincula os botões aos elementos correspondentes do DOM
    var btnProjetos = document.getElementById("btnProjetos");
    var btnTrajetoria = document.getElementById("btnTrajetoria");
    var btnSaberMais = document.getElementById("btnSaberMais");

    // Define os comportamentos de rolagem para cada botão
    btnProjetos.addEventListener("click", function() {
        scrollToSection("projetos");
    });

    btnTrajetoria.addEventListener("click", function() {
        scrollToSection("trajetoria");
    });

    btnSaberMais.addEventListener("click", function() {
        scrollToSection("saberMais");
    });

    // Função para rolar suavemente até uma seção específica
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }
});
