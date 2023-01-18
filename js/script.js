function activateTooltipster() {
    $(document).ready(function() {
        $('.tooltip').tooltipster({
            theme: 'my-custom-theme'
        });
    });
    
}

function customizeTheme() {
    // $('.tooltip').tooltipster({
    //     theme: 'my-custom-theme'
    // });
}

function main() {
    activateTooltipster();
    customizeTheme();
}

main();