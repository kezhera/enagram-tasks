import SynthetizeText from "./SynthetizeText.js"

let synthetizeText = new SynthetizeText()

synthetizeText.text = `შენი ტექსტი...`

synthetizeText.onResult = (result) => {
    console.log(result)
}

synthetizeText.start()