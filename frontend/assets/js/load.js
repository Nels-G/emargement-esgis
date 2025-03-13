
        // Fonction pour simuler le chargement et afficher le contenu principal
        window.addEventListener('load', function() {
            const loaderContainer = document.getElementById('loaderContainer');
            const mainContent = document.getElementById('mainContent');
            
            // Afficher le loader pendant 5 secondes
            setTimeout(function() {
                // Faire disparaître l'écran de chargement
                loaderContainer.style.opacity = '0';
                
                // Afficher le contenu principal
                mainContent.classList.add('visible');
                
                // Supprimer l'écran de chargement du DOM après la transition
                setTimeout(function() {
                    loaderContainer.style.display = 'none';
                }, 500);
            }, 5000); // 5000ms = 5 secondes
        });
  