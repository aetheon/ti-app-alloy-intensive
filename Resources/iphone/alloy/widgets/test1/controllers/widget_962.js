function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_962";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_962 = Ti.UI.createView({
        id: "widget_962"
    });
    $.__views.widget_962 && $.addTopLevelView($.__views.widget_962);
    $.__views.__alloyId24960 = Ti.UI.createView({
        id: "__alloyId24960"
    });
    $.__views.widget_962.add($.__views.__alloyId24960);
    $.__views.__alloyId24961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24961"
    });
    $.__views.__alloyId24960.add($.__views.__alloyId24961);
    $.__views.__alloyId24962 = Ti.UI.createView({
        id: "__alloyId24962"
    });
    $.__views.__alloyId24962 && $.addTopLevelView($.__views.__alloyId24962);
    $.__views.__alloyId24963 = Ti.UI.createView({
        id: "__alloyId24963"
    });
    $.__views.__alloyId24962.add($.__views.__alloyId24963);
    $.__views.__alloyId24964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24964"
    });
    $.__views.__alloyId24963.add($.__views.__alloyId24964);
    $.__views.__alloyId24965 = Ti.UI.createView({
        id: "__alloyId24965"
    });
    $.__views.__alloyId24965 && $.addTopLevelView($.__views.__alloyId24965);
    $.__views.__alloyId24966 = Ti.UI.createView({
        id: "__alloyId24966"
    });
    $.__views.__alloyId24965.add($.__views.__alloyId24966);
    $.__views.__alloyId24967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24967"
    });
    $.__views.__alloyId24966.add($.__views.__alloyId24967);
    $.__views.__alloyId24968 = Ti.UI.createView({
        id: "__alloyId24968"
    });
    $.__views.__alloyId24968 && $.addTopLevelView($.__views.__alloyId24968);
    $.__views.__alloyId24969 = Ti.UI.createView({
        id: "__alloyId24969"
    });
    $.__views.__alloyId24968.add($.__views.__alloyId24969);
    $.__views.__alloyId24970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24970"
    });
    $.__views.__alloyId24969.add($.__views.__alloyId24970);
    $.__views.__alloyId24971 = Ti.UI.createView({
        id: "__alloyId24971"
    });
    $.__views.__alloyId24971 && $.addTopLevelView($.__views.__alloyId24971);
    $.__views.__alloyId24972 = Ti.UI.createView({
        id: "__alloyId24972"
    });
    $.__views.__alloyId24971.add($.__views.__alloyId24972);
    $.__views.__alloyId24973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24973"
    });
    $.__views.__alloyId24972.add($.__views.__alloyId24973);
    $.__views.__alloyId24974 = Ti.UI.createView({
        id: "__alloyId24974"
    });
    $.__views.__alloyId24974 && $.addTopLevelView($.__views.__alloyId24974);
    $.__views.__alloyId24975 = Ti.UI.createView({
        id: "__alloyId24975"
    });
    $.__views.__alloyId24974.add($.__views.__alloyId24975);
    $.__views.__alloyId24976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24976"
    });
    $.__views.__alloyId24975.add($.__views.__alloyId24976);
    $.__views.__alloyId24977 = Ti.UI.createView({
        id: "__alloyId24977"
    });
    $.__views.__alloyId24977 && $.addTopLevelView($.__views.__alloyId24977);
    $.__views.__alloyId24978 = Ti.UI.createView({
        id: "__alloyId24978"
    });
    $.__views.__alloyId24977.add($.__views.__alloyId24978);
    $.__views.__alloyId24979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24979"
    });
    $.__views.__alloyId24978.add($.__views.__alloyId24979);
    $.__views.__alloyId24980 = Ti.UI.createView({
        id: "__alloyId24980"
    });
    $.__views.__alloyId24980 && $.addTopLevelView($.__views.__alloyId24980);
    $.__views.__alloyId24981 = Ti.UI.createView({
        id: "__alloyId24981"
    });
    $.__views.__alloyId24980.add($.__views.__alloyId24981);
    $.__views.__alloyId24982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24982"
    });
    $.__views.__alloyId24981.add($.__views.__alloyId24982);
    $.__views.__alloyId24983 = Ti.UI.createView({
        id: "__alloyId24983"
    });
    $.__views.__alloyId24983 && $.addTopLevelView($.__views.__alloyId24983);
    $.__views.__alloyId24984 = Ti.UI.createView({
        id: "__alloyId24984"
    });
    $.__views.__alloyId24983.add($.__views.__alloyId24984);
    $.__views.__alloyId24985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24985"
    });
    $.__views.__alloyId24984.add($.__views.__alloyId24985);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;