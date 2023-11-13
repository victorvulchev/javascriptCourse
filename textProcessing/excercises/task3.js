function task(path){
    let arr = path.split("\\")
    let mainFile = arr.pop();
    let elements = mainFile.split(".");
    let extension = elements.pop();
    let file = elements.join(".");
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`)
}
task('C:\\Internal\\training-internal\\Template.pptx')