export default class SynthetizeText {
    constructor(text, onResult){
        this.text = text
        this.onResult = onResult
    }

    async start(){
        const sentences = this.createSentesesFromText(this.text.trim())
        const promises = []

        sentences.forEach((sentece) => {
            promises.push(this.SynthetizeTextDAL(sentece))
        })

        for await (const res of promises){
            this.onResult(res)
        }
    }

    createSentesesFromText(text){
        const MAX_SYMBOLS_IN_STR = 230
        const MIN_SYMBOLS_IN_STR = 150

        const findLastIndexForTextSlice = () => {
            const sybmolsForTextSlice = [".", "!", "?", ";", ",", " "]
            for(const symbol of sybmolsForTextSlice){
                const symbolIndexInText = text.indexOf(symbol, MIN_SYMBOLS_IN_STR)
                if(symbolIndexInText > 0 && symbolIndexInText < MAX_SYMBOLS_IN_STR){
                    return symbolIndexInText
                }
            }

            return MAX_SYMBOLS_IN_STR
        }
        
        const senteces = []

        while(text.length >= MAX_SYMBOLS_IN_STR){
            const lastIndexToSlice = findLastIndexForTextSlice()
            const sentece = text.slice(0, lastIndexToSlice) 
            text = text.slice(lastIndexToSlice + 1).trim()
            senteces.push(sentece)
            if(text.length <= MAX_SYMBOLS_IN_STR){
                senteces.push(text)
            }
        }

        return senteces
    }

    async SynthetizeTextDAL(sentence){
        try{
            const model = {
                Language: 'ka',
                Speed: 100,
                Text: sentence,
                Voice: 0,
                IterationCount: 2
            };

            const response = await fetch('https://enagramm.com/Tools/SythesizeTextDAL', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(model)
            }).then( res => res.json());

            const sourceUrl = await response.AudioFilePath;
            return sourceUrl;
        }catch(error) {
            console.error(error)
        }

    }
}