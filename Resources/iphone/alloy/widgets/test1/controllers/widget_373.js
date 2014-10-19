function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_373";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_373 = Ti.UI.createView({
        id: "widget_373"
    });
    $.__views.widget_373 && $.addTopLevelView($.__views.widget_373);
    $.__views.__alloyId7956 = Ti.UI.createView({
        id: "__alloyId7956"
    });
    $.__views.widget_373.add($.__views.__alloyId7956);
    $.__views.__alloyId7957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7957"
    });
    $.__views.__alloyId7956.add($.__views.__alloyId7957);
    $.__views.__alloyId7958 = Ti.UI.createView({
        id: "__alloyId7958"
    });
    $.__views.__alloyId7958 && $.addTopLevelView($.__views.__alloyId7958);
    $.__views.__alloyId7959 = Ti.UI.createView({
        id: "__alloyId7959"
    });
    $.__views.__alloyId7958.add($.__views.__alloyId7959);
    $.__views.__alloyId7960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7960"
    });
    $.__views.__alloyId7959.add($.__views.__alloyId7960);
    $.__views.__alloyId7961 = Ti.UI.createView({
        id: "__alloyId7961"
    });
    $.__views.__alloyId7961 && $.addTopLevelView($.__views.__alloyId7961);
    $.__views.__alloyId7962 = Ti.UI.createView({
        id: "__alloyId7962"
    });
    $.__views.__alloyId7961.add($.__views.__alloyId7962);
    $.__views.__alloyId7963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7963"
    });
    $.__views.__alloyId7962.add($.__views.__alloyId7963);
    $.__views.__alloyId7964 = Ti.UI.createView({
        id: "__alloyId7964"
    });
    $.__views.__alloyId7964 && $.addTopLevelView($.__views.__alloyId7964);
    $.__views.__alloyId7965 = Ti.UI.createView({
        id: "__alloyId7965"
    });
    $.__views.__alloyId7964.add($.__views.__alloyId7965);
    $.__views.__alloyId7966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7966"
    });
    $.__views.__alloyId7965.add($.__views.__alloyId7966);
    $.__views.__alloyId7967 = Ti.UI.createView({
        id: "__alloyId7967"
    });
    $.__views.__alloyId7967 && $.addTopLevelView($.__views.__alloyId7967);
    $.__views.__alloyId7968 = Ti.UI.createView({
        id: "__alloyId7968"
    });
    $.__views.__alloyId7967.add($.__views.__alloyId7968);
    $.__views.__alloyId7969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7969"
    });
    $.__views.__alloyId7968.add($.__views.__alloyId7969);
    $.__views.__alloyId7970 = Ti.UI.createView({
        id: "__alloyId7970"
    });
    $.__views.__alloyId7970 && $.addTopLevelView($.__views.__alloyId7970);
    $.__views.__alloyId7971 = Ti.UI.createView({
        id: "__alloyId7971"
    });
    $.__views.__alloyId7970.add($.__views.__alloyId7971);
    $.__views.__alloyId7972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7972"
    });
    $.__views.__alloyId7971.add($.__views.__alloyId7972);
    $.__views.__alloyId7973 = Ti.UI.createView({
        id: "__alloyId7973"
    });
    $.__views.__alloyId7973 && $.addTopLevelView($.__views.__alloyId7973);
    $.__views.__alloyId7974 = Ti.UI.createView({
        id: "__alloyId7974"
    });
    $.__views.__alloyId7973.add($.__views.__alloyId7974);
    $.__views.__alloyId7975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7975"
    });
    $.__views.__alloyId7974.add($.__views.__alloyId7975);
    $.__views.__alloyId7976 = Ti.UI.createView({
        id: "__alloyId7976"
    });
    $.__views.__alloyId7976 && $.addTopLevelView($.__views.__alloyId7976);
    $.__views.__alloyId7977 = Ti.UI.createView({
        id: "__alloyId7977"
    });
    $.__views.__alloyId7976.add($.__views.__alloyId7977);
    $.__views.__alloyId7978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7978"
    });
    $.__views.__alloyId7977.add($.__views.__alloyId7978);
    $.__views.__alloyId7979 = Ti.UI.createView({
        id: "__alloyId7979"
    });
    $.__views.__alloyId7979 && $.addTopLevelView($.__views.__alloyId7979);
    $.__views.__alloyId7980 = Ti.UI.createView({
        id: "__alloyId7980"
    });
    $.__views.__alloyId7979.add($.__views.__alloyId7980);
    $.__views.__alloyId7981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7981"
    });
    $.__views.__alloyId7980.add($.__views.__alloyId7981);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;