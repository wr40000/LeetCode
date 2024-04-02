// 208. 实现 Trie (前缀树)
// Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，
// 用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多
// 的应用情景，例如自动补完和拼写检查。

// 请你实现 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 向前缀树中插入字符串 word 。
// boolean search(String word) 如果字符串 word 在前缀树中，
// 返回 true（即，在检索之前已经插入）；否则，返回 false 。
// boolean startsWith(String prefix) 如果之前已经插入的字符
// 串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.startIndex = 'a'.charCodeAt();
    this.root = new TreeNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let p = this.root;
    for (let i=0; i<word.length; i++) {
        let index = word[i].charCodeAt() - this.startIndex;
        if (!p.list[index]) {
            let newNode = new TreeNode();
            p.list[index] = newNode;
        }
        p = p.list[index];
    }
    p.type = 'leaf';
    p.word = word;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let p = this.root;
    for (let i=0; i<word.length; i++) {
        p = p.list[word[i].charCodeAt() - this.startIndex];
        if (!p && i<word.length-1) return false;
    }

    if (p && p.type === 'leaf' && p.word === word) return true;
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let p = this.root;
    for (let i=0; i<prefix.length; i++) {
        p = p.list[prefix[i].charCodeAt() - this.startIndex];
        if (!p) return false;
    }
    return true;
};

function TreeNode() {
    this.type = 'branch';
    this.list = [];
    this.word = '';
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
debugger
let a = 1;