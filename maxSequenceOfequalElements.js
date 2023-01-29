function maxSequenceOfequalElements(arr) {

    let sequence = [];
    let farr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        farr = [];

        for (let y = i; y < arr.length; y++) {
            let next = arr[y];
            if (num === next) {
                farr.push(next);
            } else {
                break;
            }
            if (farr.length > sequence.length) {
                sequence = farr;
            }
        }
    }
    console.log(sequence.join(" "));
}
maxSequenceOfequalElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequenceOfequalElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfequalElements([4, 4, 4, 4]);