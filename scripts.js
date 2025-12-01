// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all action buttons
    const actionButtons = document.querySelectorAll('.action-button');
    
    // Add click event listeners to all buttons
    actionButtons.forEach((button, index) => {
        // Add slight delay to each button's appearance for a staggered effect
        setTimeout(() => {
            button.style.opacity = "1";
            button.style.transform = "translateY(0)";
        }, 100 * index);
        
        button.addEventListener('click', function(e) {
            // Create a ripple effect when button is clicked
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Position the ripple where clicked
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Add the ripple to the button
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle button actions based on button text
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            
            switch (buttonText) {

                case 'Guild Quest (GQ)':
                    console.log('RIT-GQ dibuka');
                    window.open('https://rit-base.github.io/RIT-GQ/', '_blank');
                    break;
                
                case 'Learning Resources (CLR)':
                    console.log('RIT-CLR dibuka');
                    window.open('https://rit-base.github.io/RIT-CLR/', '_blank');
                    break;
                
                case 'WhatsApp':
                    console.log('WhatsApp dibuka');
                    window.open('https://chat.whatsapp.com/By2q5fyT55oK2GCxuxEFFp', '_blank');
                    break;
                case 'Discord':
                    console.log('Discord dibuka');
                    window.open('https://discord.gg/uvvy7atRT8', '_blank');
                    break;

                case 'Instagram':
                    console.log('Instagram dibuka');
                    window.open('https://www.instagram.com/republic_it', '_blank');
                    break;
                case 'Github':
                    console.log('Github dibuka');
                    window.open('https://github.com/RIT-Base', '_blank');
                    break;
                case 'Youtube':
                    console.log('Youtube dibuka');
                    window.open('https://www.youtube.com/@republic_it', '_blank');
                    break;

                default:
                    console.log('Tidak ada aksi untuk tombol ini.');
                    break;
            }            
        });
    });
    
    // Add animation to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Initialize button appearance with slight stagger effect
    actionButtons.forEach((button, index) => {
        // Set initial styles for animation
        button.style.opacity = "0";
        button.style.transform = "translateY(20px)";
        button.style.transition = "all 0.3s ease";
    });
    
    // Add hover effect that slightly enlarges button text
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.letterSpacing = "0.5px";
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.letterSpacing = "0";
        });
    });
});