const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // Definice timeFormat
        const timeFormat = ref('24h');

        // Definice currentTime
        const currentTime = ref('');

        // Získání offsetu časové zóny uživatele v hodinách
        const userTimezoneOffset = -new Date().getTimezoneOffset() / 60;

        // Definice burz s časy v UTC
        const allExchanges = [
            { name: 'New York - NYSE', openUTC: 13, closeUTC: 20, color: '#4299E1' },
            { name: 'New York - NASDAQ', openUTC: 13, closeUTC: 20, color: '#4299E1' },
            { name: 'London - LSE', openUTC: 7, closeUTC: 15.5, color: '#48BB78' },
            { name: 'Tokyo - TSE', openUTC: 23, closeUTC: 5, color: '#ED8936' },
            { name: 'Hong Kong - HKEX', openUTC: 0, closeUTC: 7, color: '#9F7AEA' },
            { name: 'Sydney - ASX', openUTC: 21, closeUTC: 5, color: '#F56565' },
            { name: 'Frankfurt - XETRA', openUTC: 6, closeUTC: 14, color: '#ECC94B' },
            { name: 'Toronto - TSX', openUTC: 13.5, closeUTC: 20, color: '#38B2AC' } // Přidáno Toronto Stock Exchange
        ];

        // Funkce pro převod UTC času na místní čas
        function convertToLocalTime(utcTime) {
            return (utcTime + userTimezoneOffset + 24) % 24;
        }

        // Přepočet časů burz na místní čas
        const localExchanges = computed(() => {
            return allExchanges.map(exchange => ({
                ...exchange,
                open: convertToLocalTime(exchange.openUTC),
                close: convertToLocalTime(exchange.closeUTC)
            }));
        });

        // Definice adjustedExchanges
        const adjustedExchanges = computed(() => {
            return localExchanges.value.flatMap(exchange => {
                if (exchange.open < exchange.close) {
                    return [exchange];
                } else {
                    return [
                        { ...exchange, close: 24, showClose: false },
                        { ...exchange, open: 0, close: exchange.close, showOpen: false }
                    ];
                }
            });
        });

        // Definice timelineHeight
        const timelineHeight = computed(() => {
            return Math.max(320, adjustedExchanges.value.length * 40);
        });

        // Funkce pro přepínání formátu času
        function toggleTimeFormat() {
            timeFormat.value = timeFormat.value === '24h' ? '12h' : '24h';
        }

        // Funkce pro formátování času
        function formatTime(hours) {
            const intHours = Math.floor(hours);
            const minutes = Math.round((hours - intHours) * 60);
            if (timeFormat.value === '24h') {
                return `${intHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            } else {
                const period = intHours < 12 ? 'AM' : 'PM';
                const formattedHours = intHours % 12 || 12;
                return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
            }
        }

        // Funkce pro formátování hodin
        function formatHour(hour) {
            if (timeFormat.value === '24h') {
                return hour.toString().padStart(2, '0');
            } else {
                const period = hour < 12 ? 'AM' : 'PM';
                const formattedHour = hour % 12 || 12;
                return `${formattedHour}${period}`;
            }
        }

        // Funkce pro získání pozice burzy zleva
        function getExchangeLeftPosition(exchange) {
            return (exchange.open / 24) * 100;
        }

        // Funkce pro získání šířky burzy
        function getExchangeWidth(exchange) {
            return ((exchange.close - exchange.open + 24) % 24) / 24 * 100;
        }

        // Funkce pro získání procentuální pozice aktuálního času
        function getCurrentTimePercentage() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            return ((hours + minutes / 60) / 24) * 100;
        }

        // Funkce pro aktualizaci aktuálního času
        function updateCurrentTime() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            
            if (timeFormat.value === '24h') {
                currentTime.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            } else {
                const period = hours < 12 ? 'AM' : 'PM';
                const formattedHours = hours % 12 || 12;
                currentTime.value = `${formattedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;
            }
        }

        // Aktualizace času každou sekundu
        setInterval(updateCurrentTime, 1000);

        // Počáteční aktualizace času
        updateCurrentTime();

        return {
            timeFormat,
            currentTime,
            toggleTimeFormat,
            localExchanges,
            adjustedExchanges,
            timelineHeight,
            formatTime,
            formatHour,
            getExchangeLeftPosition,
            getExchangeWidth,
            getCurrentTimePercentage
        };
    }
}).mount('#app');

