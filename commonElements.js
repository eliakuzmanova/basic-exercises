function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let par1 = arr1[i];
        for (let y = 0; y < arr2.length; y++) {
            let par2 = arr2[y];
            if (par1 === par2) {
                console.log(par1);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);