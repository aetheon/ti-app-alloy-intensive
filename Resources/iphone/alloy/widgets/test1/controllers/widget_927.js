function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_927";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_927 = Ti.UI.createView({
        id: "widget_927"
    });
    $.__views.widget_927 && $.addTopLevelView($.__views.widget_927);
    $.__views.__alloyId23946 = Ti.UI.createView({
        id: "__alloyId23946"
    });
    $.__views.widget_927.add($.__views.__alloyId23946);
    $.__views.__alloyId23947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23947"
    });
    $.__views.__alloyId23946.add($.__views.__alloyId23947);
    $.__views.__alloyId23948 = Ti.UI.createView({
        id: "__alloyId23948"
    });
    $.__views.__alloyId23948 && $.addTopLevelView($.__views.__alloyId23948);
    $.__views.__alloyId23949 = Ti.UI.createView({
        id: "__alloyId23949"
    });
    $.__views.__alloyId23948.add($.__views.__alloyId23949);
    $.__views.__alloyId23950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23950"
    });
    $.__views.__alloyId23949.add($.__views.__alloyId23950);
    $.__views.__alloyId23951 = Ti.UI.createView({
        id: "__alloyId23951"
    });
    $.__views.__alloyId23951 && $.addTopLevelView($.__views.__alloyId23951);
    $.__views.__alloyId23952 = Ti.UI.createView({
        id: "__alloyId23952"
    });
    $.__views.__alloyId23951.add($.__views.__alloyId23952);
    $.__views.__alloyId23953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23953"
    });
    $.__views.__alloyId23952.add($.__views.__alloyId23953);
    $.__views.__alloyId23954 = Ti.UI.createView({
        id: "__alloyId23954"
    });
    $.__views.__alloyId23954 && $.addTopLevelView($.__views.__alloyId23954);
    $.__views.__alloyId23955 = Ti.UI.createView({
        id: "__alloyId23955"
    });
    $.__views.__alloyId23954.add($.__views.__alloyId23955);
    $.__views.__alloyId23956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23956"
    });
    $.__views.__alloyId23955.add($.__views.__alloyId23956);
    $.__views.__alloyId23957 = Ti.UI.createView({
        id: "__alloyId23957"
    });
    $.__views.__alloyId23957 && $.addTopLevelView($.__views.__alloyId23957);
    $.__views.__alloyId23958 = Ti.UI.createView({
        id: "__alloyId23958"
    });
    $.__views.__alloyId23957.add($.__views.__alloyId23958);
    $.__views.__alloyId23959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23959"
    });
    $.__views.__alloyId23958.add($.__views.__alloyId23959);
    $.__views.__alloyId23960 = Ti.UI.createView({
        id: "__alloyId23960"
    });
    $.__views.__alloyId23960 && $.addTopLevelView($.__views.__alloyId23960);
    $.__views.__alloyId23961 = Ti.UI.createView({
        id: "__alloyId23961"
    });
    $.__views.__alloyId23960.add($.__views.__alloyId23961);
    $.__views.__alloyId23962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23962"
    });
    $.__views.__alloyId23961.add($.__views.__alloyId23962);
    $.__views.__alloyId23963 = Ti.UI.createView({
        id: "__alloyId23963"
    });
    $.__views.__alloyId23963 && $.addTopLevelView($.__views.__alloyId23963);
    $.__views.__alloyId23964 = Ti.UI.createView({
        id: "__alloyId23964"
    });
    $.__views.__alloyId23963.add($.__views.__alloyId23964);
    $.__views.__alloyId23965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23965"
    });
    $.__views.__alloyId23964.add($.__views.__alloyId23965);
    $.__views.__alloyId23966 = Ti.UI.createView({
        id: "__alloyId23966"
    });
    $.__views.__alloyId23966 && $.addTopLevelView($.__views.__alloyId23966);
    $.__views.__alloyId23967 = Ti.UI.createView({
        id: "__alloyId23967"
    });
    $.__views.__alloyId23966.add($.__views.__alloyId23967);
    $.__views.__alloyId23968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23968"
    });
    $.__views.__alloyId23967.add($.__views.__alloyId23968);
    $.__views.__alloyId23969 = Ti.UI.createView({
        id: "__alloyId23969"
    });
    $.__views.__alloyId23969 && $.addTopLevelView($.__views.__alloyId23969);
    $.__views.__alloyId23970 = Ti.UI.createView({
        id: "__alloyId23970"
    });
    $.__views.__alloyId23969.add($.__views.__alloyId23970);
    $.__views.__alloyId23971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23971"
    });
    $.__views.__alloyId23970.add($.__views.__alloyId23971);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;