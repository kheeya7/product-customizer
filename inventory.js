window.Inventory = {
    allSizes: (function (small, xlarge) {
        var sizes = [];
        for (var i = small; i <= xlarge; i++) {
            sizes.push(i);
        }

        return sizes;
    })(0, 8),

    allColors: ['red', 'blue', 'yellow', 'purple', 'brown'],

    bySize: {
        "0": [
            "red", "blue", "yellow"
        ],
        "1": [
            "red", "blue"
        ],
        "2": [
            "red", "brown", "yellow", "purple", "blue"
        ],
        "3": [
            "red", "blue", "yellow"
        ],
        "4": [
            "brown", "yellow", "purple"
        ],
        "5": [
            "brown", "yellow", "purple"
        ],
        "6": [
            "brown", "yellow", "purple"
        ],
        "7": [
            "brown", "yellow", "purple"
        ],
        "8": [
            "brown", "yellow", "purple"
        ]
    },

    byColor: {
        "red": ["0", "1", "2", "3"],
        "blue": ["0", "1", "2", "3"],
        "brown": ["2", "4", "5", "6", "7", "8"],
        "purple": ["2", "4", "5", "6", "7", "8"],
        "yellow": ["0", "2", "3", "4", "5", "6", "7", "8"]
    }
};