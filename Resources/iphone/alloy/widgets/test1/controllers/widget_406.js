function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_406";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_406 = Ti.UI.createView({
        id: "widget_406"
    });
    $.__views.widget_406 && $.addTopLevelView($.__views.widget_406);
    $.__views.__alloyId8918 = Ti.UI.createView({
        id: "__alloyId8918"
    });
    $.__views.widget_406.add($.__views.__alloyId8918);
    $.__views.__alloyId8919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8919"
    });
    $.__views.__alloyId8918.add($.__views.__alloyId8919);
    $.__views.__alloyId8920 = Ti.UI.createView({
        id: "__alloyId8920"
    });
    $.__views.__alloyId8920 && $.addTopLevelView($.__views.__alloyId8920);
    $.__views.__alloyId8921 = Ti.UI.createView({
        id: "__alloyId8921"
    });
    $.__views.__alloyId8920.add($.__views.__alloyId8921);
    $.__views.__alloyId8922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8922"
    });
    $.__views.__alloyId8921.add($.__views.__alloyId8922);
    $.__views.__alloyId8923 = Ti.UI.createView({
        id: "__alloyId8923"
    });
    $.__views.__alloyId8923 && $.addTopLevelView($.__views.__alloyId8923);
    $.__views.__alloyId8924 = Ti.UI.createView({
        id: "__alloyId8924"
    });
    $.__views.__alloyId8923.add($.__views.__alloyId8924);
    $.__views.__alloyId8925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8925"
    });
    $.__views.__alloyId8924.add($.__views.__alloyId8925);
    $.__views.__alloyId8926 = Ti.UI.createView({
        id: "__alloyId8926"
    });
    $.__views.__alloyId8926 && $.addTopLevelView($.__views.__alloyId8926);
    $.__views.__alloyId8927 = Ti.UI.createView({
        id: "__alloyId8927"
    });
    $.__views.__alloyId8926.add($.__views.__alloyId8927);
    $.__views.__alloyId8928 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8928"
    });
    $.__views.__alloyId8927.add($.__views.__alloyId8928);
    $.__views.__alloyId8929 = Ti.UI.createView({
        id: "__alloyId8929"
    });
    $.__views.__alloyId8929 && $.addTopLevelView($.__views.__alloyId8929);
    $.__views.__alloyId8930 = Ti.UI.createView({
        id: "__alloyId8930"
    });
    $.__views.__alloyId8929.add($.__views.__alloyId8930);
    $.__views.__alloyId8931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8931"
    });
    $.__views.__alloyId8930.add($.__views.__alloyId8931);
    $.__views.__alloyId8932 = Ti.UI.createView({
        id: "__alloyId8932"
    });
    $.__views.__alloyId8932 && $.addTopLevelView($.__views.__alloyId8932);
    $.__views.__alloyId8933 = Ti.UI.createView({
        id: "__alloyId8933"
    });
    $.__views.__alloyId8932.add($.__views.__alloyId8933);
    $.__views.__alloyId8934 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8934"
    });
    $.__views.__alloyId8933.add($.__views.__alloyId8934);
    $.__views.__alloyId8935 = Ti.UI.createView({
        id: "__alloyId8935"
    });
    $.__views.__alloyId8935 && $.addTopLevelView($.__views.__alloyId8935);
    $.__views.__alloyId8936 = Ti.UI.createView({
        id: "__alloyId8936"
    });
    $.__views.__alloyId8935.add($.__views.__alloyId8936);
    $.__views.__alloyId8937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8937"
    });
    $.__views.__alloyId8936.add($.__views.__alloyId8937);
    $.__views.__alloyId8938 = Ti.UI.createView({
        id: "__alloyId8938"
    });
    $.__views.__alloyId8938 && $.addTopLevelView($.__views.__alloyId8938);
    $.__views.__alloyId8939 = Ti.UI.createView({
        id: "__alloyId8939"
    });
    $.__views.__alloyId8938.add($.__views.__alloyId8939);
    $.__views.__alloyId8940 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8940"
    });
    $.__views.__alloyId8939.add($.__views.__alloyId8940);
    $.__views.__alloyId8941 = Ti.UI.createView({
        id: "__alloyId8941"
    });
    $.__views.__alloyId8941 && $.addTopLevelView($.__views.__alloyId8941);
    $.__views.__alloyId8942 = Ti.UI.createView({
        id: "__alloyId8942"
    });
    $.__views.__alloyId8941.add($.__views.__alloyId8942);
    $.__views.__alloyId8943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8943"
    });
    $.__views.__alloyId8942.add($.__views.__alloyId8943);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;