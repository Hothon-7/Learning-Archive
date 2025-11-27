document.addEventListener('DOMContentLoaded', function() {
    const acordeaoItens = document.querySelectorAll('.acordeao-item');
    if (acordeaoItens.length > 0) {
        acordeaoItens.forEach(item => { 
            item.addEventListener('toggle', function() {
                if (item.open){
                    acordeaoItens.forEach(otherItem => {
                      if (otherItem !== item && otherItem.open) {
                        otherItem.open = false;
                      }  
                    });
                }
            });
        

        });
    }
});