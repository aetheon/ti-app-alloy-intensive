function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_753";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_753 = Ti.UI.createView({
        id: "widget_753"
    });
    $.__views.widget_753 && $.addTopLevelView($.__views.widget_753);
    $.__views.__alloyId18928 = Ti.UI.createView({
        id: "__alloyId18928"
    });
    $.__views.widget_753.add($.__views.__alloyId18928);
    $.__views.__alloyId18929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18929"
    });
    $.__views.__alloyId18928.add($.__views.__alloyId18929);
    $.__views.__alloyId18930 = Ti.UI.createView({
        id: "__alloyId18930"
    });
    $.__views.__alloyId18930 && $.addTopLevelView($.__views.__alloyId18930);
    $.__views.__alloyId18931 = Ti.UI.createView({
        id: "__alloyId18931"
    });
    $.__views.__alloyId18930.add($.__views.__alloyId18931);
    $.__views.__alloyId18932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18932"
    });
    $.__views.__alloyId18931.add($.__views.__alloyId18932);
    $.__views.__alloyId18933 = Ti.UI.createView({
        id: "__alloyId18933"
    });
    $.__views.__alloyId18933 && $.addTopLevelView($.__views.__alloyId18933);
    $.__views.__alloyId18934 = Ti.UI.createView({
        id: "__alloyId18934"
    });
    $.__views.__alloyId18933.add($.__views.__alloyId18934);
    $.__views.__alloyId18935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18935"
    });
    $.__views.__alloyId18934.add($.__views.__alloyId18935);
    $.__views.__alloyId18936 = Ti.UI.createView({
        id: "__alloyId18936"
    });
    $.__views.__alloyId18936 && $.addTopLevelView($.__views.__alloyId18936);
    $.__views.__alloyId18937 = Ti.UI.createView({
        id: "__alloyId18937"
    });
    $.__views.__alloyId18936.add($.__views.__alloyId18937);
    $.__views.__alloyId18938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18938"
    });
    $.__views.__alloyId18937.add($.__views.__alloyId18938);
    $.__views.__alloyId18939 = Ti.UI.createView({
        id: "__alloyId18939"
    });
    $.__views.__alloyId18939 && $.addTopLevelView($.__views.__alloyId18939);
    $.__views.__alloyId18940 = Ti.UI.createView({
        id: "__alloyId18940"
    });
    $.__views.__alloyId18939.add($.__views.__alloyId18940);
    $.__views.__alloyId18941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18941"
    });
    $.__views.__alloyId18940.add($.__views.__alloyId18941);
    $.__views.__alloyId18942 = Ti.UI.createView({
        id: "__alloyId18942"
    });
    $.__views.__alloyId18942 && $.addTopLevelView($.__views.__alloyId18942);
    $.__views.__alloyId18943 = Ti.UI.createView({
        id: "__alloyId18943"
    });
    $.__views.__alloyId18942.add($.__views.__alloyId18943);
    $.__views.__alloyId18944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18944"
    });
    $.__views.__alloyId18943.add($.__views.__alloyId18944);
    $.__views.__alloyId18945 = Ti.UI.createView({
        id: "__alloyId18945"
    });
    $.__views.__alloyId18945 && $.addTopLevelView($.__views.__alloyId18945);
    $.__views.__alloyId18946 = Ti.UI.createView({
        id: "__alloyId18946"
    });
    $.__views.__alloyId18945.add($.__views.__alloyId18946);
    $.__views.__alloyId18947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18947"
    });
    $.__views.__alloyId18946.add($.__views.__alloyId18947);
    $.__views.__alloyId18948 = Ti.UI.createView({
        id: "__alloyId18948"
    });
    $.__views.__alloyId18948 && $.addTopLevelView($.__views.__alloyId18948);
    $.__views.__alloyId18949 = Ti.UI.createView({
        id: "__alloyId18949"
    });
    $.__views.__alloyId18948.add($.__views.__alloyId18949);
    $.__views.__alloyId18950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18950"
    });
    $.__views.__alloyId18949.add($.__views.__alloyId18950);
    $.__views.__alloyId18951 = Ti.UI.createView({
        id: "__alloyId18951"
    });
    $.__views.__alloyId18951 && $.addTopLevelView($.__views.__alloyId18951);
    $.__views.__alloyId18952 = Ti.UI.createView({
        id: "__alloyId18952"
    });
    $.__views.__alloyId18951.add($.__views.__alloyId18952);
    $.__views.__alloyId18953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18953"
    });
    $.__views.__alloyId18952.add($.__views.__alloyId18953);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;