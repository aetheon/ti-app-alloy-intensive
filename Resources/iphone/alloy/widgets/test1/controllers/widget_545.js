function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_545";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_545 = Ti.UI.createView({
        id: "widget_545"
    });
    $.__views.widget_545 && $.addTopLevelView($.__views.widget_545);
    $.__views.__alloyId12922 = Ti.UI.createView({
        id: "__alloyId12922"
    });
    $.__views.widget_545.add($.__views.__alloyId12922);
    $.__views.__alloyId12923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12923"
    });
    $.__views.__alloyId12922.add($.__views.__alloyId12923);
    $.__views.__alloyId12924 = Ti.UI.createView({
        id: "__alloyId12924"
    });
    $.__views.__alloyId12924 && $.addTopLevelView($.__views.__alloyId12924);
    $.__views.__alloyId12925 = Ti.UI.createView({
        id: "__alloyId12925"
    });
    $.__views.__alloyId12924.add($.__views.__alloyId12925);
    $.__views.__alloyId12926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12926"
    });
    $.__views.__alloyId12925.add($.__views.__alloyId12926);
    $.__views.__alloyId12927 = Ti.UI.createView({
        id: "__alloyId12927"
    });
    $.__views.__alloyId12927 && $.addTopLevelView($.__views.__alloyId12927);
    $.__views.__alloyId12928 = Ti.UI.createView({
        id: "__alloyId12928"
    });
    $.__views.__alloyId12927.add($.__views.__alloyId12928);
    $.__views.__alloyId12929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12929"
    });
    $.__views.__alloyId12928.add($.__views.__alloyId12929);
    $.__views.__alloyId12930 = Ti.UI.createView({
        id: "__alloyId12930"
    });
    $.__views.__alloyId12930 && $.addTopLevelView($.__views.__alloyId12930);
    $.__views.__alloyId12931 = Ti.UI.createView({
        id: "__alloyId12931"
    });
    $.__views.__alloyId12930.add($.__views.__alloyId12931);
    $.__views.__alloyId12932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12932"
    });
    $.__views.__alloyId12931.add($.__views.__alloyId12932);
    $.__views.__alloyId12933 = Ti.UI.createView({
        id: "__alloyId12933"
    });
    $.__views.__alloyId12933 && $.addTopLevelView($.__views.__alloyId12933);
    $.__views.__alloyId12934 = Ti.UI.createView({
        id: "__alloyId12934"
    });
    $.__views.__alloyId12933.add($.__views.__alloyId12934);
    $.__views.__alloyId12935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12935"
    });
    $.__views.__alloyId12934.add($.__views.__alloyId12935);
    $.__views.__alloyId12936 = Ti.UI.createView({
        id: "__alloyId12936"
    });
    $.__views.__alloyId12936 && $.addTopLevelView($.__views.__alloyId12936);
    $.__views.__alloyId12937 = Ti.UI.createView({
        id: "__alloyId12937"
    });
    $.__views.__alloyId12936.add($.__views.__alloyId12937);
    $.__views.__alloyId12938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12938"
    });
    $.__views.__alloyId12937.add($.__views.__alloyId12938);
    $.__views.__alloyId12939 = Ti.UI.createView({
        id: "__alloyId12939"
    });
    $.__views.__alloyId12939 && $.addTopLevelView($.__views.__alloyId12939);
    $.__views.__alloyId12940 = Ti.UI.createView({
        id: "__alloyId12940"
    });
    $.__views.__alloyId12939.add($.__views.__alloyId12940);
    $.__views.__alloyId12941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12941"
    });
    $.__views.__alloyId12940.add($.__views.__alloyId12941);
    $.__views.__alloyId12942 = Ti.UI.createView({
        id: "__alloyId12942"
    });
    $.__views.__alloyId12942 && $.addTopLevelView($.__views.__alloyId12942);
    $.__views.__alloyId12943 = Ti.UI.createView({
        id: "__alloyId12943"
    });
    $.__views.__alloyId12942.add($.__views.__alloyId12943);
    $.__views.__alloyId12944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12944"
    });
    $.__views.__alloyId12943.add($.__views.__alloyId12944);
    $.__views.__alloyId12945 = Ti.UI.createView({
        id: "__alloyId12945"
    });
    $.__views.__alloyId12945 && $.addTopLevelView($.__views.__alloyId12945);
    $.__views.__alloyId12946 = Ti.UI.createView({
        id: "__alloyId12946"
    });
    $.__views.__alloyId12945.add($.__views.__alloyId12946);
    $.__views.__alloyId12947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12947"
    });
    $.__views.__alloyId12946.add($.__views.__alloyId12947);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;