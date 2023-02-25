function repeat(text, timesToRepeat) {
    let result = text;

    for (let i = 1; i < timesToRepeat; i++) {
        result += text;        
    }

    console.log(result);
}