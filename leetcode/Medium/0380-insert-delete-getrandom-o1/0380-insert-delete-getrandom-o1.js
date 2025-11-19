
var RandomizedSet = function() {
    this.map = new Map(); // 
    this.list = []; // 실제 값 배열
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false; // 이미 값이 존재할 경우 리턴

    this.map.set(val, this.list.length); // map에 값과 인덱스 저장
    this.list.push(val); // 배열에 값 추가

    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false; // 값이 존재하지 않을 경우 리턴

    const idx = this.map.get(val); // 삭제하려는 값의 인덱스
    const last = this.list[this.list.length - 1]; // 배열의 마지막 요소

    this.list[idx] = last; // 삭제할 위치에 요소 덮어쓰기
    this.map.set(last, idx); // 마지막 값의 인덱스 업데이트

    this.list.pop(); 
    this.map.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const r = Math.floor(Math.random() * this.list.length);
    return this.list[r];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */