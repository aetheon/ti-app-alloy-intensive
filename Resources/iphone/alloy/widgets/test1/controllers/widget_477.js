function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_477";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_477 = Ti.UI.createView({
        id: "widget_477"
    });
    $.__views.widget_477 && $.addTopLevelView($.__views.widget_477);
    $.__views.__alloyId10946 = Ti.UI.createView({
        id: "__alloyId10946"
    });
    $.__views.widget_477.add($.__views.__alloyId10946);
    $.__views.__alloyId10947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10947"
    });
    $.__views.__alloyId10946.add($.__views.__alloyId10947);
    $.__views.__alloyId10948 = Ti.UI.createView({
        id: "__alloyId10948"
    });
    $.__views.__alloyId10948 && $.addTopLevelView($.__views.__alloyId10948);
    $.__views.__alloyId10949 = Ti.UI.createView({
        id: "__alloyId10949"
    });
    $.__views.__alloyId10948.add($.__views.__alloyId10949);
    $.__views.__alloyId10950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10950"
    });
    $.__views.__alloyId10949.add($.__views.__alloyId10950);
    $.__views.__alloyId10951 = Ti.UI.createView({
        id: "__alloyId10951"
    });
    $.__views.__alloyId10951 && $.addTopLevelView($.__views.__alloyId10951);
    $.__views.__alloyId10952 = Ti.UI.createView({
        id: "__alloyId10952"
    });
    $.__views.__alloyId10951.add($.__views.__alloyId10952);
    $.__views.__alloyId10953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10953"
    });
    $.__views.__alloyId10952.add($.__views.__alloyId10953);
    $.__views.__alloyId10954 = Ti.UI.createView({
        id: "__alloyId10954"
    });
    $.__views.__alloyId10954 && $.addTopLevelView($.__views.__alloyId10954);
    $.__views.__alloyId10955 = Ti.UI.createView({
        id: "__alloyId10955"
    });
    $.__views.__alloyId10954.add($.__views.__alloyId10955);
    $.__views.__alloyId10956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10956"
    });
    $.__views.__alloyId10955.add($.__views.__alloyId10956);
    $.__views.__alloyId10957 = Ti.UI.createView({
        id: "__alloyId10957"
    });
    $.__views.__alloyId10957 && $.addTopLevelView($.__views.__alloyId10957);
    $.__views.__alloyId10958 = Ti.UI.createView({
        id: "__alloyId10958"
    });
    $.__views.__alloyId10957.add($.__views.__alloyId10958);
    $.__views.__alloyId10959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10959"
    });
    $.__views.__alloyId10958.add($.__views.__alloyId10959);
    $.__views.__alloyId10960 = Ti.UI.createView({
        id: "__alloyId10960"
    });
    $.__views.__alloyId10960 && $.addTopLevelView($.__views.__alloyId10960);
    $.__views.__alloyId10961 = Ti.UI.createView({
        id: "__alloyId10961"
    });
    $.__views.__alloyId10960.add($.__views.__alloyId10961);
    $.__views.__alloyId10962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10962"
    });
    $.__views.__alloyId10961.add($.__views.__alloyId10962);
    $.__views.__alloyId10963 = Ti.UI.createView({
        id: "__alloyId10963"
    });
    $.__views.__alloyId10963 && $.addTopLevelView($.__views.__alloyId10963);
    $.__views.__alloyId10964 = Ti.UI.createView({
        id: "__alloyId10964"
    });
    $.__views.__alloyId10963.add($.__views.__alloyId10964);
    $.__views.__alloyId10965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10965"
    });
    $.__views.__alloyId10964.add($.__views.__alloyId10965);
    $.__views.__alloyId10966 = Ti.UI.createView({
        id: "__alloyId10966"
    });
    $.__views.__alloyId10966 && $.addTopLevelView($.__views.__alloyId10966);
    $.__views.__alloyId10967 = Ti.UI.createView({
        id: "__alloyId10967"
    });
    $.__views.__alloyId10966.add($.__views.__alloyId10967);
    $.__views.__alloyId10968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10968"
    });
    $.__views.__alloyId10967.add($.__views.__alloyId10968);
    $.__views.__alloyId10969 = Ti.UI.createView({
        id: "__alloyId10969"
    });
    $.__views.__alloyId10969 && $.addTopLevelView($.__views.__alloyId10969);
    $.__views.__alloyId10970 = Ti.UI.createView({
        id: "__alloyId10970"
    });
    $.__views.__alloyId10969.add($.__views.__alloyId10970);
    $.__views.__alloyId10971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10971"
    });
    $.__views.__alloyId10970.add($.__views.__alloyId10971);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;