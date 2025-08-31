// Calculator functionality

document.addEventListener('DOMContentLoaded', function() {
    initCalculator();
});

function initCalculator() {
    const areaSlider = document.getElementById('areaSlider');
    const areaValue = document.getElementById('areaValue');
    const serviceType = document.getElementById('serviceType');
    const timeline = document.getElementById('timeline');
    const calculateBtn = document.getElementById('calculateBtn');
    const getQuoteBtn = document.getElementById('getQuoteBtn');
    const estimateResult = document.getElementById('estimateResult');
    const fileUpload = document.getElementById('fileUpload');
    const fileInput = document.getElementById('fileInput');
    const uploadText = document.getElementById('uploadText');

    let currentEstimate = 0;

    // Area slider functionality
    if (areaSlider && areaValue) {
        areaSlider.addEventListener('input', function() {
            areaValue.textContent = `${this.value} м²`;
            updateCalculateButton();
        });
    }

    // Service type and timeline change handlers
    if (serviceType) {
        serviceType.addEventListener('change', updateCalculateButton);
    }
    
    if (timeline) {
        timeline.addEventListener('change', updateCalculateButton);
    }

    // File upload functionality
    if (fileUpload && fileInput && uploadText) {
        fileUpload.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const fileName = this.files[0].name;
                uploadText.textContent = fileName;
                uploadText.style.color = 'var(--primary)';
                uploadText.style.fontWeight = '500';
                fileUpload.classList.add('has-file');
            }
        });
    }

    // Calculate button functionality
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateEstimate);
    }

    // Get quote button functionality
    if (getQuoteBtn) {
        getQuoteBtn.addEventListener('click', function() {
            alert('Переход к форме получения точной сметы');
        });
    }

    function updateCalculateButton() {
        if (calculateBtn && serviceType && timeline) {
            const hasService = serviceType.value !== '';
            const hasTimeline = timeline.value !== '';
            
            calculateBtn.disabled = !hasService || !hasTimeline;
        }
    }

    function calculateEstimate() {
        if (!areaSlider || !serviceType || !timeline || !estimateResult) return;

        const area = parseInt(areaSlider.value);
        const service = serviceType.value;
        const timelineValue = timeline.value;

        // Base price per square meter
        let basePrice = area * 3000;

        // Service type multipliers
        const serviceMultipliers = {
            'photozone': 1,
            'decorations': 1.3,
            'props': 0.8,
            'stands': 2,
            'set-design': 2.5
        };

        // Timeline multipliers
        const timelineMultipliers = {
            'urgent': 1.5,
            'standard': 1,
            'extended': 0.8
        };

        // Calculate final price
        const serviceMultiplier = serviceMultipliers[service] || 1;
        const timeMultiplier = timelineMultipliers[timelineValue] || 1;
        
        currentEstimate = Math.round(basePrice * serviceMultiplier * timeMultiplier);

        // Update UI
        estimateResult.innerHTML = `
            <div class="estimate-amount">${currentEstimate.toLocaleString()} ₽</div>
            <div class="estimate-note">Итоговая цена может отличаться</div>
        `;
        estimateResult.classList.add('has-estimate');

        // Show get quote button
        if (getQuoteBtn) {
            getQuoteBtn.style.display = 'inline-flex';
        }

        // Add animation
        estimateResult.style.animation = 'scaleIn 0.4s ease-out';
    }

    // Initialize calculate button state
    updateCalculateButton();
}

// Add calculator-specific styles
const calculatorStyles = document.createElement('style');
calculatorStyles.textContent = `
    .calculator-form {
        animation: scaleIn 0.6s ease-out;
    }
    
    .field-group {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .field-group:nth-child(1) { animation-delay: 0.1s; }
    .field-group:nth-child(2) { animation-delay: 0.2s; }
    .field-group:nth-child(3) { animation-delay: 0.3s; }
    .field-group:nth-child(4) { animation-delay: 0.4s; }
    .field-group:nth-child(5) { animation-delay: 0.5s; }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .estimate-result.has-estimate {
        background-color: hsla(217, 100%, 65%, 0.1);
        border: 1px solid hsla(217, 100%, 65%, 0.3);
    }
    
    .estimate-amount {
        font-size: var(--font-size-3xl);
        font-weight: 700;
        color: var(--primary);
        margin-bottom: var(--space-2);
    }
    
    .estimate-note {
        font-size: var(--font-size-sm);
        color: var(--muted-foreground);
    }
    
    .file-upload.has-file {
        border-color: var(--primary);
        background-color: hsla(217, 100%, 65%, 0.05);
    }
`;
document.head.appendChild(calculatorStyles);