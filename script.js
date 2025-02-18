//your JS code here. If required.
  function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        // Function to get cookie by name
        function getCookie(name) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        // Apply saved preferences
        function applyPreferences() {
            let savedFontSize = getCookie("fontsize");
            let savedFontColor = getCookie("fontcolor");

            if (savedFontSize) {
                document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
                document.getElementById("fontsize").value = savedFontSize;
            }

            if (savedFontColor) {
                document.documentElement.style.setProperty("--fontcolor", savedFontColor);
                document.getElementById("fontcolor").value = savedFontColor;
            }
        }

        // Save preferences when the form is submitted
        document.getElementById("fontForm").addEventListener("submit", function (event) {
            event.preventDefault();
            
            let fontSize = document.getElementById("fontsize").value;
            let fontColor = document.getElementById("fontcolor").value;

            if (fontSize < 8 || fontSize > 72) {
                alert("Font size must be between 8 and 72.");
                return;
            }

            setCookie("fontsize", fontSize, 365);
            setCookie("fontcolor", fontColor, 365);

            document.documentElement.style.setProperty("--fontsize", fontSize + "px");
            document.documentElement.style.setProperty("--fontcolor", fontColor);
        });

        // Apply preferences on page load
        window.onload = applyPreferences;