/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let h = 0;
    citations = citations.sort((a,b) => b-a);

    for (let i=0; i<citations.length; i++) {
        if (citations[i] >= i+1) {
            h = i+1;
        } else {
            break;
        }
    }

    return h;
};