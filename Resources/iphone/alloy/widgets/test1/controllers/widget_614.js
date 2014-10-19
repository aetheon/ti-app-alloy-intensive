function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_614";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_614 = Ti.UI.createView({
        id: "widget_614"
    });
    $.__views.widget_614 && $.addTopLevelView($.__views.widget_614);
    $.__views.__alloyId14924 = Ti.UI.createView({
        id: "__alloyId14924"
    });
    $.__views.widget_614.add($.__views.__alloyId14924);
    $.__views.__alloyId14925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14925"
    });
    $.__views.__alloyId14924.add($.__views.__alloyId14925);
    $.__views.__alloyId14926 = Ti.UI.createView({
        id: "__alloyId14926"
    });
    $.__views.__alloyId14926 && $.addTopLevelView($.__views.__alloyId14926);
    $.__views.__alloyId14927 = Ti.UI.createView({
        id: "__alloyId14927"
    });
    $.__views.__alloyId14926.add($.__views.__alloyId14927);
    $.__views.__alloyId14928 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14928"
    });
    $.__views.__alloyId14927.add($.__views.__alloyId14928);
    $.__views.__alloyId14929 = Ti.UI.createView({
        id: "__alloyId14929"
    });
    $.__views.__alloyId14929 && $.addTopLevelView($.__views.__alloyId14929);
    $.__views.__alloyId14930 = Ti.UI.createView({
        id: "__alloyId14930"
    });
    $.__views.__alloyId14929.add($.__views.__alloyId14930);
    $.__views.__alloyId14931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14931"
    });
    $.__views.__alloyId14930.add($.__views.__alloyId14931);
    $.__views.__alloyId14932 = Ti.UI.createView({
        id: "__alloyId14932"
    });
    $.__views.__alloyId14932 && $.addTopLevelView($.__views.__alloyId14932);
    $.__views.__alloyId14933 = Ti.UI.createView({
        id: "__alloyId14933"
    });
    $.__views.__alloyId14932.add($.__views.__alloyId14933);
    $.__views.__alloyId14934 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14934"
    });
    $.__views.__alloyId14933.add($.__views.__alloyId14934);
    $.__views.__alloyId14935 = Ti.UI.createView({
        id: "__alloyId14935"
    });
    $.__views.__alloyId14935 && $.addTopLevelView($.__views.__alloyId14935);
    $.__views.__alloyId14936 = Ti.UI.createView({
        id: "__alloyId14936"
    });
    $.__views.__alloyId14935.add($.__views.__alloyId14936);
    $.__views.__alloyId14937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14937"
    });
    $.__views.__alloyId14936.add($.__views.__alloyId14937);
    $.__views.__alloyId14938 = Ti.UI.createView({
        id: "__alloyId14938"
    });
    $.__views.__alloyId14938 && $.addTopLevelView($.__views.__alloyId14938);
    $.__views.__alloyId14939 = Ti.UI.createView({
        id: "__alloyId14939"
    });
    $.__views.__alloyId14938.add($.__views.__alloyId14939);
    $.__views.__alloyId14940 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14940"
    });
    $.__views.__alloyId14939.add($.__views.__alloyId14940);
    $.__views.__alloyId14941 = Ti.UI.createView({
        id: "__alloyId14941"
    });
    $.__views.__alloyId14941 && $.addTopLevelView($.__views.__alloyId14941);
    $.__views.__alloyId14942 = Ti.UI.createView({
        id: "__alloyId14942"
    });
    $.__views.__alloyId14941.add($.__views.__alloyId14942);
    $.__views.__alloyId14943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14943"
    });
    $.__views.__alloyId14942.add($.__views.__alloyId14943);
    $.__views.__alloyId14944 = Ti.UI.createView({
        id: "__alloyId14944"
    });
    $.__views.__alloyId14944 && $.addTopLevelView($.__views.__alloyId14944);
    $.__views.__alloyId14945 = Ti.UI.createView({
        id: "__alloyId14945"
    });
    $.__views.__alloyId14944.add($.__views.__alloyId14945);
    $.__views.__alloyId14946 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14946"
    });
    $.__views.__alloyId14945.add($.__views.__alloyId14946);
    $.__views.__alloyId14947 = Ti.UI.createView({
        id: "__alloyId14947"
    });
    $.__views.__alloyId14947 && $.addTopLevelView($.__views.__alloyId14947);
    $.__views.__alloyId14948 = Ti.UI.createView({
        id: "__alloyId14948"
    });
    $.__views.__alloyId14947.add($.__views.__alloyId14948);
    $.__views.__alloyId14949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14949"
    });
    $.__views.__alloyId14948.add($.__views.__alloyId14949);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;