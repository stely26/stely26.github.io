$(document).ready(function () {
    container = document.getElementById("technology");    


    const text = new Blotter.Text("Technology", {
        family: "NeueMontreal",
        size: 90,
        fill: "#fff"
    });
    
    

    let material = new Blotter.LiquidDistortMaterial();

    material.uniforms.uSpeed.value = 0.5;
    material.uniforms.uVolatility.value = 0.03;
    material.uniforms.uSeed.value = 0.1;

    let liquid = new Blotter(material, {
        texts: text
    });
    

    let scope = liquid.forText(text);       

    scope.appendTo(container);
    
   

});