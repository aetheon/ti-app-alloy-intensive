function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_338";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_338 = Ti.UI.createView({
        id: "widget_338"
    });
    $.__views.widget_338 && $.addTopLevelView($.__views.widget_338);
    $.__views.__alloyId6942 = Ti.UI.createView({
        id: "__alloyId6942"
    });
    $.__views.widget_338.add($.__views.__alloyId6942);
    $.__views.__alloyId6943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6943"
    });
    $.__views.__alloyId6942.add($.__views.__alloyId6943);
    $.__views.__alloyId6944 = Ti.UI.createView({
        id: "__alloyId6944"
    });
    $.__views.__alloyId6944 && $.addTopLevelView($.__views.__alloyId6944);
    $.__views.__alloyId6945 = Ti.UI.createView({
        id: "__alloyId6945"
    });
    $.__views.__alloyId6944.add($.__views.__alloyId6945);
    $.__views.__alloyId6946 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6946"
    });
    $.__views.__alloyId6945.add($.__views.__alloyId6946);
    $.__views.__alloyId6947 = Ti.UI.createView({
        id: "__alloyId6947"
    });
    $.__views.__alloyId6947 && $.addTopLevelView($.__views.__alloyId6947);
    $.__views.__alloyId6948 = Ti.UI.createView({
        id: "__alloyId6948"
    });
    $.__views.__alloyId6947.add($.__views.__alloyId6948);
    $.__views.__alloyId6949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6949"
    });
    $.__views.__alloyId6948.add($.__views.__alloyId6949);
    $.__views.__alloyId6950 = Ti.UI.createView({
        id: "__alloyId6950"
    });
    $.__views.__alloyId6950 && $.addTopLevelView($.__views.__alloyId6950);
    $.__views.__alloyId6951 = Ti.UI.createView({
        id: "__alloyId6951"
    });
    $.__views.__alloyId6950.add($.__views.__alloyId6951);
    $.__views.__alloyId6952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6952"
    });
    $.__views.__alloyId6951.add($.__views.__alloyId6952);
    $.__views.__alloyId6953 = Ti.UI.createView({
        id: "__alloyId6953"
    });
    $.__views.__alloyId6953 && $.addTopLevelView($.__views.__alloyId6953);
    $.__views.__alloyId6954 = Ti.UI.createView({
        id: "__alloyId6954"
    });
    $.__views.__alloyId6953.add($.__views.__alloyId6954);
    $.__views.__alloyId6955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6955"
    });
    $.__views.__alloyId6954.add($.__views.__alloyId6955);
    $.__views.__alloyId6956 = Ti.UI.createView({
        id: "__alloyId6956"
    });
    $.__views.__alloyId6956 && $.addTopLevelView($.__views.__alloyId6956);
    $.__views.__alloyId6957 = Ti.UI.createView({
        id: "__alloyId6957"
    });
    $.__views.__alloyId6956.add($.__views.__alloyId6957);
    $.__views.__alloyId6958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6958"
    });
    $.__views.__alloyId6957.add($.__views.__alloyId6958);
    $.__views.__alloyId6959 = Ti.UI.createView({
        id: "__alloyId6959"
    });
    $.__views.__alloyId6959 && $.addTopLevelView($.__views.__alloyId6959);
    $.__views.__alloyId6960 = Ti.UI.createView({
        id: "__alloyId6960"
    });
    $.__views.__alloyId6959.add($.__views.__alloyId6960);
    $.__views.__alloyId6961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6961"
    });
    $.__views.__alloyId6960.add($.__views.__alloyId6961);
    $.__views.__alloyId6962 = Ti.UI.createView({
        id: "__alloyId6962"
    });
    $.__views.__alloyId6962 && $.addTopLevelView($.__views.__alloyId6962);
    $.__views.__alloyId6963 = Ti.UI.createView({
        id: "__alloyId6963"
    });
    $.__views.__alloyId6962.add($.__views.__alloyId6963);
    $.__views.__alloyId6964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6964"
    });
    $.__views.__alloyId6963.add($.__views.__alloyId6964);
    $.__views.__alloyId6965 = Ti.UI.createView({
        id: "__alloyId6965"
    });
    $.__views.__alloyId6965 && $.addTopLevelView($.__views.__alloyId6965);
    $.__views.__alloyId6966 = Ti.UI.createView({
        id: "__alloyId6966"
    });
    $.__views.__alloyId6965.add($.__views.__alloyId6966);
    $.__views.__alloyId6967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6967"
    });
    $.__views.__alloyId6966.add($.__views.__alloyId6967);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;