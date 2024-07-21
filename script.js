function generateCSS() {

    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const backgroundColor = document.getElementById('backgroundColor').value;
    const borderRadius = document.getElementById('borderRadius').value;
    const gradientDirection = document.getElementById('gradientDirection').value;
    const gradientColor1 = document.getElementById('gradientColor1').value;
    const gradientColor2 = document.getElementById('gradientColor2').value;


    const cssCode = `
        .generated-box {
            width: ${width}px;
            height: ${height}px;
            background-color: ${backgroundColor};
            border-radius: ${borderRadius}px;
        }

        .gradient-text {
            background: linear-gradient(${gradientDirection}deg, ${gradientColor1}, ${gradientColor2});
            -webkit-background-clip: text;
            color: transparent;
        }
    `;


    document.getElementById('cssOutput').textContent = cssCode;
}
