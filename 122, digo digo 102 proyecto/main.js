//https://teachablemachine.withgoogle.com/models/Y2tNEDQCH/

Webcam.attach("#camera")
camera=document.getElementById("camara")
Webcam.set({
    width:350, height:300, image_format:"png", png_quality: 90
})
function take_snapshot(){
    Webcam.snap(function(photo){
        document.getElementById("result").innerHTML="<img src='"+photo+"' id='selfie'>"
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Y2tNEDQCH/model.json", modelocargado)
function modelocargado(){
    console.log("modelocargado")
}
function check(){
    Img=document.getElementById("selfie")
    classifier.classify(Img,gotResults)
}
function gotResults(error, results){
if(error){
    console.error(error)}
    else{
        console.log(results)
        document.getElementById("nombre_objeto").innerHTML=results[0].label
        document.getElementById("confianza").innerHTML=results[0].confidence.toFixed(3)
    }


}