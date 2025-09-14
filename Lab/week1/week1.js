console.log("Hello");
/*Exercise 1*/
console.log("Ex 1");
let test_phrase = "Hi, this is a test phrase. Please capitalise this, thanks.";
let result_phrase = ""
console.log(`Initial Phrase: ${test_phrase}`);
let split_sphrases = test_phrase.split(' ');
for (let phrase of split_sphrases){
    result_phrase += phrase.charAt(0).toUpperCase()
    result_phrase += phrase.substring(1)
    result_phrase += " "
}
console.log(`Result Phrase: ${result_phrase}`);
/*Excercise 2 */
console.log("Ex 2");
let test_num_array = [200,510, 0, -1];
console.log(`Example array: ${test_num_array}.`);
// let largest_int = test_num_array[0];
// for (let integer of test_num_array){
//     if (integer > largest_int) {largest_int = integer;}
// }
const largest_int = test_num_array.reduce((acc, currVal) => {
    return Math.max(acc, currVal);
});
console.log(`Largest Integer: ${largest_int}.`);
/*Exercise 3*/
console.log("Ex 3");
let test_phrase_array = ["Hello", "hi", "Coffee", "Football"];
console.log(`Test Phrases: ${test_phrase_array}.`);
let res_phrase_array = [];
for (let phrase of test_phrase_array){
    if (phrase.length <= 3){res_phrase_array.push(phrase);}
    else {
        let slicepoint = phrase.length - 3;
        let last3 = phrase.slice(-3);
        let top = phrase.slice(0, slicepoint);
        res_phrase_array.push(last3+top)
    }
}
console.log(`Result Phrases: ${res_phrase_array}`)
/*Excercise 4 */
console.log("Ex 4")
function angle_type(angle){
    return angle == 90 ? "Right angle" : angle == 180 ? "Straight edge" : angle < 90 ? "Acute angle" : "Obtuse angle"
}
let angles = [90, 180, 22, 153,29,45,50,110]
for (let angle of angles){
    console.log(`Angle ${angle} is: ${angle_type(angle)}`)
}