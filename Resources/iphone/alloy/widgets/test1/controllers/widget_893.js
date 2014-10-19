function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_893";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_893 = Ti.UI.createView({
        id: "widget_893"
    });
    $.__views.widget_893 && $.addTopLevelView($.__views.widget_893);
    $.__views.__alloyId22958 = Ti.UI.createView({
        id: "__alloyId22958"
    });
    $.__views.widget_893.add($.__views.__alloyId22958);
    $.__views.__alloyId22959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22959"
    });
    $.__views.__alloyId22958.add($.__views.__alloyId22959);
    $.__views.__alloyId22960 = Ti.UI.createView({
        id: "__alloyId22960"
    });
    $.__views.__alloyId22960 && $.addTopLevelView($.__views.__alloyId22960);
    $.__views.__alloyId22961 = Ti.UI.createView({
        id: "__alloyId22961"
    });
    $.__views.__alloyId22960.add($.__views.__alloyId22961);
    $.__views.__alloyId22962 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22962"
    });
    $.__views.__alloyId22961.add($.__views.__alloyId22962);
    $.__views.__alloyId22963 = Ti.UI.createView({
        id: "__alloyId22963"
    });
    $.__views.__alloyId22963 && $.addTopLevelView($.__views.__alloyId22963);
    $.__views.__alloyId22964 = Ti.UI.createView({
        id: "__alloyId22964"
    });
    $.__views.__alloyId22963.add($.__views.__alloyId22964);
    $.__views.__alloyId22965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22965"
    });
    $.__views.__alloyId22964.add($.__views.__alloyId22965);
    $.__views.__alloyId22966 = Ti.UI.createView({
        id: "__alloyId22966"
    });
    $.__views.__alloyId22966 && $.addTopLevelView($.__views.__alloyId22966);
    $.__views.__alloyId22967 = Ti.UI.createView({
        id: "__alloyId22967"
    });
    $.__views.__alloyId22966.add($.__views.__alloyId22967);
    $.__views.__alloyId22968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22968"
    });
    $.__views.__alloyId22967.add($.__views.__alloyId22968);
    $.__views.__alloyId22969 = Ti.UI.createView({
        id: "__alloyId22969"
    });
    $.__views.__alloyId22969 && $.addTopLevelView($.__views.__alloyId22969);
    $.__views.__alloyId22970 = Ti.UI.createView({
        id: "__alloyId22970"
    });
    $.__views.__alloyId22969.add($.__views.__alloyId22970);
    $.__views.__alloyId22971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22971"
    });
    $.__views.__alloyId22970.add($.__views.__alloyId22971);
    $.__views.__alloyId22972 = Ti.UI.createView({
        id: "__alloyId22972"
    });
    $.__views.__alloyId22972 && $.addTopLevelView($.__views.__alloyId22972);
    $.__views.__alloyId22973 = Ti.UI.createView({
        id: "__alloyId22973"
    });
    $.__views.__alloyId22972.add($.__views.__alloyId22973);
    $.__views.__alloyId22974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22974"
    });
    $.__views.__alloyId22973.add($.__views.__alloyId22974);
    $.__views.__alloyId22975 = Ti.UI.createView({
        id: "__alloyId22975"
    });
    $.__views.__alloyId22975 && $.addTopLevelView($.__views.__alloyId22975);
    $.__views.__alloyId22976 = Ti.UI.createView({
        id: "__alloyId22976"
    });
    $.__views.__alloyId22975.add($.__views.__alloyId22976);
    $.__views.__alloyId22977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22977"
    });
    $.__views.__alloyId22976.add($.__views.__alloyId22977);
    $.__views.__alloyId22978 = Ti.UI.createView({
        id: "__alloyId22978"
    });
    $.__views.__alloyId22978 && $.addTopLevelView($.__views.__alloyId22978);
    $.__views.__alloyId22979 = Ti.UI.createView({
        id: "__alloyId22979"
    });
    $.__views.__alloyId22978.add($.__views.__alloyId22979);
    $.__views.__alloyId22980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22980"
    });
    $.__views.__alloyId22979.add($.__views.__alloyId22980);
    $.__views.__alloyId22981 = Ti.UI.createView({
        id: "__alloyId22981"
    });
    $.__views.__alloyId22981 && $.addTopLevelView($.__views.__alloyId22981);
    $.__views.__alloyId22982 = Ti.UI.createView({
        id: "__alloyId22982"
    });
    $.__views.__alloyId22981.add($.__views.__alloyId22982);
    $.__views.__alloyId22983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22983"
    });
    $.__views.__alloyId22982.add($.__views.__alloyId22983);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;