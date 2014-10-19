function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_268";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_268 = Ti.UI.createView({
        id: "widget_268"
    });
    $.__views.widget_268 && $.addTopLevelView($.__views.widget_268);
    $.__views.__alloyId4914 = Ti.UI.createView({
        id: "__alloyId4914"
    });
    $.__views.widget_268.add($.__views.__alloyId4914);
    $.__views.__alloyId4915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4915"
    });
    $.__views.__alloyId4914.add($.__views.__alloyId4915);
    $.__views.__alloyId4916 = Ti.UI.createView({
        id: "__alloyId4916"
    });
    $.__views.__alloyId4916 && $.addTopLevelView($.__views.__alloyId4916);
    $.__views.__alloyId4917 = Ti.UI.createView({
        id: "__alloyId4917"
    });
    $.__views.__alloyId4916.add($.__views.__alloyId4917);
    $.__views.__alloyId4918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4918"
    });
    $.__views.__alloyId4917.add($.__views.__alloyId4918);
    $.__views.__alloyId4919 = Ti.UI.createView({
        id: "__alloyId4919"
    });
    $.__views.__alloyId4919 && $.addTopLevelView($.__views.__alloyId4919);
    $.__views.__alloyId4920 = Ti.UI.createView({
        id: "__alloyId4920"
    });
    $.__views.__alloyId4919.add($.__views.__alloyId4920);
    $.__views.__alloyId4921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4921"
    });
    $.__views.__alloyId4920.add($.__views.__alloyId4921);
    $.__views.__alloyId4922 = Ti.UI.createView({
        id: "__alloyId4922"
    });
    $.__views.__alloyId4922 && $.addTopLevelView($.__views.__alloyId4922);
    $.__views.__alloyId4923 = Ti.UI.createView({
        id: "__alloyId4923"
    });
    $.__views.__alloyId4922.add($.__views.__alloyId4923);
    $.__views.__alloyId4924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4924"
    });
    $.__views.__alloyId4923.add($.__views.__alloyId4924);
    $.__views.__alloyId4925 = Ti.UI.createView({
        id: "__alloyId4925"
    });
    $.__views.__alloyId4925 && $.addTopLevelView($.__views.__alloyId4925);
    $.__views.__alloyId4926 = Ti.UI.createView({
        id: "__alloyId4926"
    });
    $.__views.__alloyId4925.add($.__views.__alloyId4926);
    $.__views.__alloyId4927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4927"
    });
    $.__views.__alloyId4926.add($.__views.__alloyId4927);
    $.__views.__alloyId4928 = Ti.UI.createView({
        id: "__alloyId4928"
    });
    $.__views.__alloyId4928 && $.addTopLevelView($.__views.__alloyId4928);
    $.__views.__alloyId4929 = Ti.UI.createView({
        id: "__alloyId4929"
    });
    $.__views.__alloyId4928.add($.__views.__alloyId4929);
    $.__views.__alloyId4930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4930"
    });
    $.__views.__alloyId4929.add($.__views.__alloyId4930);
    $.__views.__alloyId4931 = Ti.UI.createView({
        id: "__alloyId4931"
    });
    $.__views.__alloyId4931 && $.addTopLevelView($.__views.__alloyId4931);
    $.__views.__alloyId4932 = Ti.UI.createView({
        id: "__alloyId4932"
    });
    $.__views.__alloyId4931.add($.__views.__alloyId4932);
    $.__views.__alloyId4933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4933"
    });
    $.__views.__alloyId4932.add($.__views.__alloyId4933);
    $.__views.__alloyId4934 = Ti.UI.createView({
        id: "__alloyId4934"
    });
    $.__views.__alloyId4934 && $.addTopLevelView($.__views.__alloyId4934);
    $.__views.__alloyId4935 = Ti.UI.createView({
        id: "__alloyId4935"
    });
    $.__views.__alloyId4934.add($.__views.__alloyId4935);
    $.__views.__alloyId4936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4936"
    });
    $.__views.__alloyId4935.add($.__views.__alloyId4936);
    $.__views.__alloyId4937 = Ti.UI.createView({
        id: "__alloyId4937"
    });
    $.__views.__alloyId4937 && $.addTopLevelView($.__views.__alloyId4937);
    $.__views.__alloyId4938 = Ti.UI.createView({
        id: "__alloyId4938"
    });
    $.__views.__alloyId4937.add($.__views.__alloyId4938);
    $.__views.__alloyId4939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4939"
    });
    $.__views.__alloyId4938.add($.__views.__alloyId4939);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;