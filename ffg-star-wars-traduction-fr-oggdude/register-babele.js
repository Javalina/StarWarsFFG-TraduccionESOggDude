Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'ffg-star-wars-traduction-es-oggdude',
            lang: 'es',
            dir: 'compendium'
        });
    }
});